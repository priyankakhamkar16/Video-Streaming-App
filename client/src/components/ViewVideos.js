// src/components/ViewVideos.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewVideos = () => {
  const [videos, setVideos] = useState([]);

  const fetchVideos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/videos/all'); // Update endpoint if necessary
      setVideos(response.data);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div>
      <h2>Uploaded Videos</h2>
      <div>
        {videos.map((video) => (
          <div key={video._id}>
            <video width="320" height="240" controls>
              <source src={`http://localhost:5000/${video.path}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewVideos;
