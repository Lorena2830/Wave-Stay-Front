import React, { useState, useEffect } from 'react';
import AccommodationBookingCard from '../../components/AccommodationBookingCard/AccommodationBookingCard';
import { getOwnProfile } from '../../services/userService';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import './Profile.css'

function Profile() {
  const [user, setUser] = useState();
  
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

  const displayBookings = () => {
    return user.bookings.map((booking, index) => {
       return (
        <>
       <AccommodationBookingCard accommodations ={user.accommodation} key={index} info={booking} />
        </>
       )
     })
   }
    return (
      <>
      <div id= 'All'>
      {
        !user ? 
      <Box sx={{ display: 'flex', justifyContent:'center' }}>
      <CircularProgress />
      </Box>:
        <>
          <h1 id='welcome'>
              Hola... {user.username}!
          </h1>
          <div>
            <p id='text'>
              Tus reservas...
            </p>
            <div id= 'myBookings'>
            { displayBookings() }
          </div>
          </div>
        </>
      }
      </div>
    </>
  );
}

export default Profile;
