// src/pages/Signup.js
import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    email: '',
    password: '',
    career_path: 'AI Data Analyst'
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // This URL will be your Node.js backend route
      const response = await axios.post('http://localhost:5000/api/signup', formData);
      alert("Signup Successful!");
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h1>Create your Professional Profile</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="First Name" onChange={(e) => setFormData({...formData, first_name: e.target.value})} required /><br/>
        <input type="email" placeholder="Email" onChange={(e) => setFormData({...formData, email: e.target.value})} required /><br/>
        <input type="password" placeholder="Password" onChange={(e) => setFormData({...formData, password: e.target.value})} required /><br/>
        <button type="submit">Join Navigator</button>
      </form>
    </div>
  );
};

export default Signup;