import React from 'react'
import { getAccommodationById } from '../services/accommodationService'
import AccommodationUnique from '../components/AccommodationUnique/AccommodationUnique'
import { useEffect, useState } from 'react' 
import { useParams } from 'react-router-dom'

function Accommodation() {
 
  const { accommodationId } = useParams()
 
  const [showOneAccommodation, setShowOneAccommodation] = useState([])

  useEffect(() => {
      const showAcc = async () => {
        try {
          const {result} = await getAccommodationById(accommodationId)
          console.log(result)
          setShowOneAccommodation(result)
          console.log(showOneAccommodation) 
        } catch (error) {
          console.log(error)
        }
        } 
        showAcc()   
  }, [accommodationId])
  
  return (
    <div>
   <AccommodationUnique info={showOneAccommodation}/> 
    </div>
  )
}

export default Accommodation