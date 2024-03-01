import React from 'react';
import './ProfileCard.css';

function ProfileCard(props) {
  const { name, photoUrl, description } = props;

  return (
    <div className="profile-card">
      <img src={photoUrl} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}

export default ProfileCard;