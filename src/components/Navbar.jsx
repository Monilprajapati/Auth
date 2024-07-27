import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css'; // Import the CSS

const Navbar = ({ user, onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  const {email} = user;
  const username = email.split('@')[0];

  return (
    <nav className="navbar">
      <div className="navbar-brand">Your App</div>
      <div className="navbar-user">{username}</div>
      {user && (
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      )}
    </nav>
  );
};

export default Navbar;
