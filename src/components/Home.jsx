import React, { useState } from "react";
import Navbar from "./Navbar";
import "../App.css"; // Import the CSS

const Home = ({ user, onLogout }) => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div className="home-container">
      <Navbar user={user} onLogout={onLogout} />
      <h2>Home Page</h2>
        <button onClick={() => setShowDetails(!showDetails)} style={{margin:"30px"}}>
          {showDetails ? "Hide" : "Show"} Details
        </button>
        {showDetails && (
          <div>
            <h2>{user.email}</h2>
          </div>
        )}
    </div>
  );
};

export default Home;
