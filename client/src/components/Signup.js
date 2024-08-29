import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axiosInstance from '../axiosInstance';
import { AuthContext } from '../AuthContext';
import './styles/Signup.css';

const Signup = () => {
  const [name, setName] = useState(''); // Update field to 'name'
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { setIsAuthenticated } = useContext(AuthContext);

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      // Send the 'name' instead of 'username'
      await axiosInstance.post('/auth/signup', { name, email, password });
      setIsAuthenticated(true);
      navigate('/home');
    } catch (err) {
      setError('Error creating account. Please try again.');
    }
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSignup}>
        <h2>Sign Up</h2>
        {error && <p className="error">{error}</p>}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)} // Update handler to setName
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
        <p>
          Already have an account? <a onClick={() => navigate('/login')}>Login</a>
        </p>
      </form>
    </div>
  );
};

export default Signup;
