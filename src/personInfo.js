import React from 'react';
import './personInfo.css';

function PersonInfo({ user, onClick }) {
  return (
    <div className="person-info">
      <img src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
      <h3>{user.first_name} {user.last_name}</h3>
      <p>{user.email}</p>
    </div>
  );
}

export default PersonInfo;
