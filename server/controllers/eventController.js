const fs = require('fs');
const connectModels = require('../utils/dbUtil');
const MasterAdmin = require('../models/MasterAdmin');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

exports.createEvent = async (req, res) => {
  try {
    const { HostModel, EventModel } = await connectModels(req.db);

    const {
      title,
      description,
      startDate,
      endDate,
      registrationDeadline,
      maxTeamSize,
      hostName,
      hostType,
      contactDetails
    } = req.body;

    if (
      !title ||
      !description ||
      !startDate ||
      !endDate ||
      !registrationDeadline ||
      !maxTeamSize ||
      !hostName ||
      !hostType ||
      !contactDetails
    ) {
      return res.status(400).json({
        success: false,
        message: 'All required fields must be provided.'
      });
    }

    const contact = JSON.parse(contactDetails);
    const existingEvent = await EventModel.findOne({
      title,
      startDate,
      endDate
    });
    if (existingEvent) {
      return res.status(400).json({
        success: false,
        message: 'An event with the same title and dates already exists.'
      });
    }

    let host = await HostModel.findOne({ name: hostName, type: hostType });
    if (!host) {
      host = await HostModel.create({
        name: hostName,
        type: hostType,
        contact
      });
    }

    let posterUrl = null;
    if (req.file) {
      const uploadResult = await cloudinary.uploader.upload(req.file.path, {
        folder: 'event_posters',
        resource_type: 'image'
      });
      posterUrl = uploadResult.secure_url;
      fs.unlinkSync(req.file.path);
    }

    const event = await EventModel.create({
      title,
      description,
      startDate,
      endDate,
      registrationDeadline,
      maxTeamSize,
      createdBy: req.user.id,
      hostedBy: host._id,
      poster: posterUrl
    });

    host.eventsHosted.push(event._id);
    await host.save();

    res.status(201).json({
      success: true,
      message: 'Event created successfully.',
      data: event
    });
  } catch (error) {
    console.error('Error creating event:', error);
    res.status(500).json({
      success: false,
      message: 'Server error. Please try again later.',
      error: error.message
    });
  }
};

exports.getEvents = async (req, res) => {
  try {
    const { EventModel } = await connectModels(req.db);
    const events = await EventModel.find()
      .populate('createdBy', 'name email role')
      .populate('hostedBy', 'name type contact');

    res.status(200).json(events);
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

exports.getEventById = async (req, res) => {
  try {
    const { EventModel } = await connectModels(req.db);
    const event = await EventModel.findById(req.params.id)
      .populate('createdBy', 'name email role')
      .populate('hostedBy', 'name type contact');

    if (!event) {
      return res.status(404).json({
        success: false,
        message: 'Event not found'
      });
    }

    res.status(200).json(event);
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

exports.updateEvent = async (req, res) => {
  try {
    const { EventModel } = await connectModels(req.db);
    let updateData = req.body;

    if (req.file && req.file.path) {
      const result = await cloudinary.uploader.upload(req.file.path);
      updateData.poster = result.secure_url;
    }

    const event = await EventModel.findByIdAndUpdate(
      req.params.id,
      updateData,
      {
        new: true,
        runValidators: true
      }
    );

    if (!event) {
      return res.status(404).json({
        success: false,
        message: 'Event not found'
      });
    }

    res.status(200).json(event);
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

exports.deleteEvent = async (req, res) => {
  try {
    const { EventModel } = await connectModels(req.db);
    const event = await EventModel.findByIdAndDelete(req.params.id);

    if (!event) {
      return res.status(404).json({
        success: false,
        message: 'Event not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Event deleted successfully'
    });
  } catch (error) {
    res.status(400).json({
      error: error.message
    });
  }
};
