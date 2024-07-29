import React from "react";

const UserData = ({showDetails, user}) => {
    
  return (
    <>
      {showDetails && (
        <div>
          <h2>{user.email}</h2>
        </div>
      )}
    </>
  );
};

export default UserData;
