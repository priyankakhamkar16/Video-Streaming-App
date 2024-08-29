// src/components/Home.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import FeatureBox from './FeatureBox';
import './styles/Home.css';

// Import images
import aboutus from './assets/images/about-us.jpg';
import feature1 from './assets/images/feature1.jpg';
import feature2 from './assets/images/feature2.jpg';
import feature3 from './assets/images/feature3.png';

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the user is authenticated
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
      // Fetch videos only if authenticated
      axios.get('/api/videos', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => setVideos(response.data))
        .catch((error) => console.error('Error fetching videos:', error));
    }
  }, []);

  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Welcome to StreamFlix</h1>
        <p>Your one-stop destination for amazing videos!</p>
      </header>
      <section className="about-section">
        <div className="about-content">
          <img src={aboutus} alt="About Us" className="about-image" />
          <p>
            At StreamFlix, we provide a platform for users to upload and watch videos easily.
            Explore our extensive collection and enjoy seamless streaming.
          </p>
        </div>
      </section>
      <section className="features-section">
        <h2>Our Features</h2>
        <div className="features-container">
          <FeatureBox
            image={feature1}
            title="Easy Upload"
            description="Upload your videos effortlessly with our simple interface."
          />
          <FeatureBox
            image={feature2}
            title="High Quality"
            description="Enjoy high-quality streaming with minimal buffering."
          />
          <FeatureBox
            image={feature3}
            title="Secure Platform"
            description="Your videos and data are secure with us."
          />
        </div>
      </section>
      <div className="upload-button-container">
        <Link to="/upload" className="upload-button">
          Upload Your Video
        </Link>
      </div>
      <main>
        <h2>Uploaded Videos</h2>
        <div className="video-list">
          {isAuthenticated ? (
            videos.length > 0 ? (
              videos.map((video) => (
                <video key={video._id} controls>
                  <source src={`/api/videos/${video.filename}`} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ))
            ) : (
              <p>No videos available.</p>
            )
          ) : (
            <p>Please log in to view uploaded videos.</p>
          )}
        </div>
      </main>
      <footer className="home-footer">
        <p>&copy; 2024 StreamFlix. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
