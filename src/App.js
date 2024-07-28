import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import './App.css'; // Import the CSS

const App = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (user) => {
    setUser(user);
    // setUser("");
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/home" element={<Home user={user} onLogout={handleLogout} />} />
        <Route path="/" element={<Login onLogin={handleLogin} />} />
      </Routes>
    </Router>
  );
};

export default App;
