// src/components/UploadVideo.js
import React, { useState } from 'react';
import axios from 'axios';
import './styles/UploadVideo.css';
import { useNavigate } from 'react-router-dom';

const UploadVideo = () => {
  const [file, setFile] = useState(null);
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const navigate = useNavigate();

  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('video', file);

    try {
      // Replace 'your_auth_token' with the actual token
      const token = localStorage.getItem('authToken'); // or however you store the token

      await axios.post('http://localhost:5000/api/videos/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      });
      setUploadSuccess(true);
    } catch (error) {
      console.error('Error uploading video:', error);
    }
  };

  return (
    <div>
      <h2>Upload Video</h2>
      <form onSubmit={onSubmit}>
        <input type="file" accept="video/*" onChange={onFileChange} required />
        <button type="submit">Upload</button>
      </form>
      {uploadSuccess && (
        <div>
          <p>Video uploaded successfully!</p>
          <button onClick={() => navigate('/videos')}>View Uploaded Videos</button>
        </div>
      )}
    </div>
  );
};

export default UploadVideo;
