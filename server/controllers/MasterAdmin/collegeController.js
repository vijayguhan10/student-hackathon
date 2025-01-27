const bcrypt = require('bcrypt');
const MasterAdmin = require('../../models/MasterAdmin');
const connectModels = require('../../utils/dbUtil');

exports.createCollege = async (req, res) => {
  const { name, collegecode, address, contactnumber, counts, dbname } =
    req.body;

  try {
    const { CollegeModel, UserModel } = await connectModels(dbname);

    const masterAdminId = req.user.id;
    const masterAdmin = await MasterAdmin.findById(masterAdminId);
    if (!masterAdmin) {
      return res.status(400).json({ message: 'Master Admin not found' });
    }

    const found = masterAdmin.colleges.find((clg) => clg.dbname === dbname);
    if (found) {
      return res
        .status(400)
        .json({ message: 'Database with this name already exists' });
    }

    const newCollege = await CollegeModel.create({
      name,
      collegecode,
      address,
      contactnumber,
      counts,
      superadmins: [],
      primeadmins: [],
      normaladmins: [],
      students: []
    });

    const superAdminPassword = await bcrypt.hash('superadmin123', 10);
    const superAdminIds = [];

    for (let i = 1; i <= counts.superadmin; i++) {
      const superAdmin = await UserModel.create({
        name: `SuperAdmin${i} of ${name}`,
        email: `superadmin${i}@${name.toLowerCase().replace(/\s/g, '')}.com`,
        password: superAdminPassword,
        role: 'superAdmin',
        college: newCollege._id
      });
      superAdminIds.push(superAdmin._id);
    }

    const primeAdminPassword = await bcrypt.hash('primeadmin123', 10);
    const primeAdminIds = [];

    for (let i = 1; i <= counts.primeadmin; i++) {
      const primeAdmin = await UserModel.create({
        name: `PrimeAdmin${i} of ${name}`,
        email: `primeadmin${i}@${name.toLowerCase().replace(/\s/g, '')}.com`,
        password: primeAdminPassword,
        role: 'primeAdmin',
        college: newCollege._id
      });
      primeAdminIds.push(primeAdmin._id);
    }

    const normalAdminPassword = await bcrypt.hash('normaladmin123', 10);
    const normalAdminIds = [];

    for (let i = 1; i <= counts.normaladmin; i++) {
      const normalAdmin = await UserModel.create({
        name: `NormalAdmin${i} of ${name}`,
        email: `normaladmin${i}@${name.toLowerCase().replace(/\s/g, '')}.com`,
        password: normalAdminPassword,
        role: 'normalAdmin',
        college: newCollege._id
      });
      normalAdminIds.push(normalAdmin._id);
    }

    const updatedCollege = await CollegeModel.findByIdAndUpdate(
      newCollege._id,
      {
        $push: {
          superadmins: { $each: superAdminIds },
          primeadmins: { $each: primeAdminIds },
          normaladmins: { $each: normalAdminIds }
        }
      },
      { new: true }
    );

    masterAdmin.colleges.push({
      collegeid: newCollege._id,
      dbname,
      active: true
    });

    await masterAdmin.save();
    res.status(200).json(updatedCollege);
  } catch (error) {
    res.status(500).json({ message: 'Error creating college', error });
  }
};

exports.getAllColleges = async (req, res) => {
  try {
    const masterAdminId = req.user.id;

    const masterAdmin = await MasterAdmin.findById(masterAdminId);

    if (!masterAdmin) {
      return res.status(404).json({ message: 'Master Admin not found' });
    }

    if (!masterAdmin.colleges || masterAdmin.colleges.length === 0) {
      return res
        .status(200)
        .json({ message: 'No colleges found', colleges: [] });
    }

    const collegeDetails = await Promise.all(
      masterAdmin.colleges.map(async (college) => {
        const { dbname, collegecode, active } = college;

        try {
          const { CollegeModel } = await connectModels(dbname);
          const collegeInfo = await CollegeModel.findOne();
          console.log({ ...collegeInfo });
          return { ...collegeInfo._doc, dbname };
        } catch (error) {
          console.error(`Error fetching data for ${dbname}:`, error.message);
          return {
            dbname,
            collegecode,
            active,
            details: null,
            error: `Failed to fetch data for ${dbname}`
          };
        }
      })
    );

    res.status(200).json(collegeDetails);
  } catch (error) {
    console.error('Error fetching all colleges:', error.stack);
    res
      .status(500)
      .json({ message: 'Internal server error', error: error.message });
  }
};

exports.getCollegeById = async (req, res) => {
  try {
    const collegeId = req.params.id;

    const masterAdmin = await MasterAdmin.findOne({
      'colleges.collegeid': collegeId
    });
    if (!masterAdmin)
      return res
        .status(404)
        .json({ message: 'College not found or unauthorized' });

    const collegeInfo = masterAdmin.colleges.find(
      (col) => col.collegeid.toString() === collegeId
    );
    if (!collegeInfo)
      return res.status(404).json({ message: 'College not found' });

    const { dbname, active } = collegeInfo;
    const { CollegeModel, UserModel } = await connectModels(dbname);

    const college = await CollegeModel.findById(collegeId);
    if (!college) return res.status(404).json({ message: 'College not found' });

    const superadmins = await UserModel.find({
      role: 'superAdmin',
      college: collegeId
    });
    const primeadmins = await UserModel.find({
      role: 'primeAdmin',
      college: collegeId
    });
    const normaladmins = await UserModel.find({
      role: 'normalAdmin',
      college: collegeId
    });
    const students = await UserModel.find({
      role: 'student',
      college: collegeId
    });

    const counts = {
      superadmin: superadmins.length,
      primeadmin: primeadmins.length,
      normaladmin: normaladmins.length,
      student: students.length
    };

    const response = {
      name: college.name,
      collegecode: college.collegecode,
      address: college.address,
      contactnumber: college.contactnumber,
      active: active,
      counts: counts,
      superadmins: superadmins,
      primeadmins: primeadmins,
      normaladmins: normaladmins,
      students: students
    };

    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.updateCollege = async (req, res) => {
  try {
    const collegeId = req.params.id;
    const updateData = req.body;

    const masterAdmin = await MasterAdmin.findOne({
      'colleges.collegeid': collegeId
    });
    if (!masterAdmin)
      return res
        .status(404)
        .json({ message: 'College not found or unauthorized' });

    const collegeInfo = masterAdmin.colleges.find(
      (col) => col.collegeid.toString() === collegeId
    );
    if (!collegeInfo)
      return res.status(404).json({ message: 'College not found' });

    const { dbname } = collegeInfo;
    const { CollegeModel } = await connectModels(dbname);

    const updatedCollege = await CollegeModel.findByIdAndUpdate(
      collegeId,
      updateData,
      { new: true }
    );
    if (!updatedCollege)
      return res.status(404).json({ message: 'College not found' });

    res.status(200).json(updatedCollege);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.deactivateCollege = async (req, res) => {
  try {
    const collegeId = req.params.id;

    const masterAdmin = await MasterAdmin.findOne({
      'colleges.collegeid': collegeId
    });
    if (!masterAdmin)
      return res
        .status(404)
        .json({ message: 'College not found or unauthorized' });

    const collegeInfo = masterAdmin.colleges.find(
      (col) => col.collegeid.toString() === collegeId
    );
    if (!collegeInfo)
      return res.status(404).json({ message: 'College not found' });

    if (collegeInfo.active == false)
      return res
        .status(200)
        .json({ message: 'College is already in Deactivated state' });

    const { dbname } = collegeInfo;
    const { CollegeModel, UserModel } = await connectModels(dbname);

    await CollegeModel.findByIdAndUpdate(collegeId, { active: false });

    await MasterAdmin.updateOne(
      { 'colleges.collegeid': collegeId },
      { $set: { 'colleges.$.active': false } }
    );

    res.status(200).json({ message: 'College deactivated successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

exports.activateCollege = async (req, res) => {
  try {
    const collegeId = req.params.id;
    const masterAdmin = await MasterAdmin.findOne({
      'colleges.collegeid': collegeId
    });
    if (!masterAdmin)
      return res
        .status(404)
        .json({ message: 'college not found or unauthorized' });

    const collegeInfo = masterAdmin.colleges.find(
      (col) => col.collegeid.toString() === collegeId
    );
    if (!collegeInfo)
      return res.status(404).json({ message: 'College not found' });

    if (collegeInfo.active == true)
      return res
        .status(200)
        .json({ message: 'College is already in Activated state' });

    const { dbname } = collegeInfo;
    const { CollegeModel, UserModel } = await connectModels(dbname);

    await CollegeModel.findByIdAndUpdate(collegeId, { active: true });

    // await UserModel.updateMany({}, { active: true });
    await MasterAdmin.updateOne(
      { 'colleges.collegeid': collegeId },
      { $set: { 'colleges.$.active': true } }
    );

    res.status(200).json({ message: 'College activated successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
