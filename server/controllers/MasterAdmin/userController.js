const fs = require('fs');
const xlsx = require('xlsx');
const bcrypt = require('bcrypt');
const MasterAdmin = require('../../models/MasterAdmin');
const connectModels = require('../../utils/dbUtil');

exports.bulkCreateStudents = async (req, res) => {
  try {
    const masterAdminId = req.user.id;
    const masterAdmin = await MasterAdmin.findById(masterAdminId);
    if (!masterAdmin) {
      return res.status(403).json({
        message: 'Access denied: Only Master Admin can perform this operation'
      });
    }

    const { collegeid } = req.params;
    if (!collegeid) {
      return res.status(400).json({ message: 'College ID is required' });
    }

    const collegeDetails = masterAdmin.colleges.find(
      (college) => college.collegeid.toString() === collegeid.toString()
    );
    if (!collegeDetails) {
      return res.status(400).json({
        message: 'College not found for the provided ID'
      });
    }

    if (!req.file) {
      return res.status(400).json({ message: 'No file uploaded' });
    }

    const filePath = req.file.path;
    const workbook = xlsx.readFile(filePath);
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const studentsData = xlsx.utils.sheet_to_json(sheet);

    if (!studentsData.length) {
      return res.status(400).json({ message: 'The uploaded file is empty' });
    }

    const { CollegeModel, UserModel } = await connectModels(
      collegeDetails.dbname
    );

    const defaultPassword = await bcrypt.hash('student123', 10);

    const existingEmails = await UserModel.find({
      email: { $in: studentsData.map((student) => student.email) }
    }).distinct('email');

    const newStudentsData = studentsData
      .filter((student) => !existingEmails.includes(student.email))
      .map((student) => ({
        name: student.name,
        email: student.email,
        password: defaultPassword,
        department: student.department,
        role: 'student',
        active: true
      }));

    const createdStudents = await UserModel.insertMany(newStudentsData);

    const college = await CollegeModel.findById(collegeDetails.collegeid);
    if (college) {
      college.counts.student += createdStudents.length;
      college.students.push(...createdStudents.map((student) => student._id));
      await college.save();
    }

    fs.unlinkSync(filePath);

    res.status(200).json({
      message: 'Students created successfully',
      students: createdStudents
    });
  } catch (error) {
    console.error('Error importing students:', error);
    res.status(500).json({
      message: 'Error importing students',
      error: error.message
    });
  }
};

exports.createUser = async (req, res) => {
  const { role, ...userdata } = req.body;
  const { collegeid } = req.params;
  try {
    const masterAdmin = await MasterAdmin.findOne({
      'colleges.collegeid': collegeid
    });

    if (!masterAdmin) {
      return res
        .status(404)
        .json({ message: 'College not found or unauthorized' });
    }

    const college = masterAdmin.colleges.find(
      (college) => college.collegeid.toString() === collegeid
    );

    if (!college) {
      return res.status(404).json({ message: 'College not found' });
    }

    userdata.college = collegeid;

    if (!userdata.password) {
      userdata.password = role.toLowerCase() + '123';
    }

    userdata.password = await bcrypt.hash(userdata.password, 10);

    const { CollegeModel, UserModel } = await connectModels(college.dbname);

    if (
      !['superAdmin', 'primeAdmin', 'normalAdmin', 'student'].includes(role)
    ) {
      return res.status(400).json({ message: 'Invalid role' });
    }

    const newUser = new UserModel({
      ...userdata,
      role: role.toLowerCase(),
      active: true
    });

    const roleFieldMap = {
      superAdmin: 'superadmins',
      primeAdmin: 'primeadmins',
      normalAdmin: 'normaladmins',
      student: 'students'
    };

    const countFieldMap = {
      superAdmin: 'counts.superadmin',
      primeAdmin: 'counts.primeadmin',
      normalAdmin: 'counts.normaladmin',
      student: 'counts.student'
    };

    await CollegeModel.findByIdAndUpdate(
      collegeid,
      {
        $push: { [roleFieldMap[role]]: newUser._id },
        $inc: { [countFieldMap[role]]: 1 }
      },
      { new: true }
    );

    await newUser.save();

    res.status(201).json({
      message: `${role} created successfully!`,
      newUser
    });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.getUsersByRole = async (req, res) => {
  const { role, collegeid } = req.params;

  try {
    const masterAdmin = await MasterAdmin.findOne({
      'colleges.collegeid': collegeid
    });

    if (!masterAdmin) {
      return res
        .status(404)
        .json({ message: 'College not found or unauthorized' });
    }

    const college = masterAdmin.colleges.find(
      (college) => college.collegeid.toString() === collegeid
    );

    if (!college) {
      return res.status(404).json({ message: 'College not found' });
    }

    const { UserModel } = await connectModels(college.dbname);

    if (
      !['superAdmin', 'primeAdmin', 'normalAdmin', 'student'].includes(role)
    ) {
      return res.status(400).json({ message: 'Invalid role' });
    }

    const users = await UserModel.find({
      role: role
    });

    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users by role:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.updateUser = async (req, res) => {
  const { role, collegeid } = req.params;
  const updateData = req.body;

  try {
    const masterAdmin = await MasterAdmin.findOne({
      'colleges.collegeid': collegeid
    });

    if (!masterAdmin) {
      return res
        .status(404)
        .json({ message: 'College not found or unauthorized' });
    }

    const college = masterAdmin.colleges.find(
      (college) => college.collegeid.toString() === collegeid
    );

    if (!college) {
      return res.status(404).json({ message: 'College not found' });
    }

    const { UserModel } = await connectModels(college.dbname);

    if (
      !['superAdmin', 'primeAdmin', 'normalAdmin', 'student'].includes(role)
    ) {
      return res.status(400).json({ message: 'Invalid role' });
    }

    const userid = updateData._id;
    const user = await UserModel.findOne({
      _id: userid,
      role: role
    });

    if (!user) {
      return res
        .status(404)
        .json({ message: 'User not found or role mismatch' });
    }

    if (updateData.password) {
      updateData.password = await bcrypt.hash(updateData.password, 10);
    }

    const updatedUser = await UserModel.findByIdAndUpdate(userid, updateData, {
      new: true
    });

    res
      .status(200)
      .json({ message: `${role} updated successfully!`, updatedUser });
  } catch (error) {
    console.error('Error updating user:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
