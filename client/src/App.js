// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider } from './AuthContext';
import ProtectedRoute from './ProtectedRoute'; // Only needed for protected routes
import Navbar from './components/Navbar';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import UploadVideo from './components/UploadVideo';
import ViewVideos from './components/ViewVideos';
import Footer from './components/Footer';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <div className="app-content">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/" element={<Navigate to="/login" />} /> {/* Redirect "/" to "/login" */}
            <Route path="/home" element={<ProtectedRoute element={<Home />} />} /> {/* Keep Home protected */}
            <Route path="/upload" element={<UploadVideo />} /> {/* Route for UploadVideo component */}
            <Route path="/videos" element={<ViewVideos />} /> {/* Route for ViewVideos component */}
          </Routes>
        </div>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
