import React from 'react';
import './ProfileCard.css';

function ProfileCard({ user }) {
  console.log(user.result)

  return (
    <div className="profile-card">
      <h2>Hola {user.username}</h2>
      <p>{user.role}</p>
    </div>
  );
}

export default ProfileCard;