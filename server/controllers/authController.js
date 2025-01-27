const bcrypt = require('bcrypt');
const MasterAdmin = require('../models/MasterAdmin');
const connectModels = require('../utils/dbUtil');
const generateToken = require('../utils/TokenGenerator');

exports.userLogin = async (req, res) => {
  const { email, password, collegeid, role } = req.body;

  try {
    const masterAdmin = await MasterAdmin.findOne({
      'colleges.collegeid': collegeid
    });
    if (!masterAdmin) {
      return res.status(404).json({ message: 'College not found' });
    }

    const collegeData = masterAdmin.colleges.find(
      (college) => college.collegeid.toString() === collegeid.toString()
    );

    if (!collegeData) {
      return res
        .status(404)
        .json({ message: 'College not found in MasterAdmin data' });
    }

    if (!collegeData.active) {
      return res.status(400).json({ message: 'College is inactive' });
    }
    const { UserModel } = await connectModels(collegeData.dbname);

    const user = await UserModel.findOne({ email, role });

    if (!user || user.active === false) {
      return res.status(404).json({ message: 'User not found or inactive' });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    const token = generateToken({
      _id: user._id,
      email: user.email,
      role: user.role,
      dbname: collegeData.dbname
    });

    res.status(200).json({
      message: 'Login successful',
      token,
      user,
      role: user.role
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

exports.signupMasterAdmin = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const existingAdmin = await MasterAdmin.findOne({ email });
    if (existingAdmin) {
      return res.status(400).json({ message: 'Master Admin already exists' });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newMasterAdmin = new MasterAdmin({
      name,
      email,
      password: hashedPassword
    });

    await newMasterAdmin.save();
    res.status(201).json(newMasterAdmin);
  } catch (error) {
    res.status(500).json({ message: 'Signup failed', error });
  }
};

exports.loginMasterAdmin = async (req, res) => {
  const { email, password } = req.body;

  try {
    const masterAdmin = await MasterAdmin.findOne({ email });
    if (!masterAdmin) {
      return res.status(404).json({ message: 'Master Admin not found' });
    }

    const isMatch = await bcrypt.compare(password, masterAdmin.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    masterAdmin.role = 'masterAdmin';

    const token = generateToken(masterAdmin);

    res.status(200).json({ token, masterAdmin });
  } catch (error) {
    res.status(500).json({ message: 'Login failed', error });
  }
};
