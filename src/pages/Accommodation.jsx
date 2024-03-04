import React from 'react'
import { getAccommodationById } from '../services/accommodationService'
import { getBookingByAccommodation } from '../services/bookingService'
import AccommodationUnique from '../components/AccommodationUnique/AccommodationUnique'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Accommodation() {

  const { accommodationId } = useParams()
  const [schedules, setSchedules] = useState([])
  const [showOneAccommodation, setShowOneAccommodation] = useState([])

  useEffect(() => {
    const showAcc = async () => {
      try {
        const { result } = await getAccommodationById(accommodationId)      
        setShowOneAccommodation(result)
        // console.log(showOneAccommodation) 
      } catch (error) {
        console.log(error)
      }
    }
    showAcc()
  }, [accommodationId])

  useEffect(() => {
    const showBookings = async () => {
      try {
        const result = await getBookingByAccommodation(accommodationId)
        console.log(result)
        setSchedules(result)
      } catch (error) {
        console.log(error)
      }
    }
    showBookings()
  }, [accommodationId])

  return (
    <div>
      <AccommodationUnique info={showOneAccommodation} data={schedules} reservado= {false}/>
    </div>
  )
}

export default Accommodation