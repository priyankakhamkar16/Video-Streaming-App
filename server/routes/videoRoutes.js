// server/routes/videoRoutes.js
const express = require('express');
const multer = require('multer');
const path = require('path');
const videoController = require('../controllers/videoController');

const router = express.Router();

// Setup storage for videos
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage: storage });

// Routes
router.post('/upload', upload.single('video'), videoController.uploadVideo);
router.get('/all', videoController.getAllVideos); // Ensure this route is correct

module.exports = router;
