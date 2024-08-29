// server/controllers/videoController.js
const Video = require('../models/Video'); // Update path and filename

// Controller functions
exports.uploadVideo = async (req, res) => {
  try {
    const video = new Video({
      filename: req.file.filename,
      path: req.file.path,
    });
    await video.save();
    res.status(201).json({ message: 'Video uploaded successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error uploading video', error });
  }
};

exports.getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find();
    res.status(200).json(videos);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching videos', error });
  }
};
