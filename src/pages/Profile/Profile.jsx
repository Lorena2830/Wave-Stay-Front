import React, { useState, useEffect } from 'react';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import BookingCard from '../../components/BookingCard/BookingCard';
import { getOwnProfile } from '../../services/userService';
import { getAllBooking } from '../../services/bookingService';

function Profile() {
  const [bookings, setBookings] = useState([])
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

  useEffect(()=> {
    const getBookings = async () => {
      try {
        const result = await getAllBooking()
        //console.log(result, 'result')
        setBookings(result)
      } catch (error) {
        console.log(error)
      }
    }
    getBookings()
  }, [])
  
  useEffect(() => {
    console.log(bookings, 'bookings')
  }, [bookings])
  
  const displayBookings = () => {
    return bookings.map((booking, index) => {
       return (
         <BookingCard key={index} info={booking} />
       )
     })
   }
    return (
    <>
    <ProfileCard user={user} />
    {displayBookings()}
    </>
  );
}

export default Profile;
