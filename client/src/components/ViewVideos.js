import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ViewVideos = () => {
  const [videos, setVideos] = useState([]);

  const fetchVideos = async () => {
    try {
      const response = await axios.get('https://video-streaming-app-bpp4.vercel.app/api/videos/all');
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
              <source src={`https://video-streaming-app-bpp4.vercel.app/${video.path}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewVideos;
