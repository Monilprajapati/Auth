import React from 'react';
import Navbar from './Navbar';
import '../App.css'; // Import the CSS

const Home = ({ user, onLogout }) => {
  return (
    <div className="home-container">
      <Navbar user={user} onLogout={onLogout} />
      <h2>Home Page</h2>
    </div>
  );
};

export default Home;
