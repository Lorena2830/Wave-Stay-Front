import React, { useState, useEffect } from 'react';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import { getOwnProfile } from '../../services/userService';

function Profile() {
  const [user, setUser] = useState({});

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const userProfile = await getOwnProfile();
        setUser(userProfile);
      } catch (error) {
        console.error('Error al obtener el perfil:', error);
      }
    };

    fetchProfile();
  }, []);

    return (
    <>
    <ProfileCard user={user} />
    </>
  );
}

export default Profile;
