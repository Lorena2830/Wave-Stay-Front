import React from 'react'
import { getAccommodationById } from '../services/accommodationService'
import AccommodationUnique from '../components/AccommodationUnique/AccommodationUnique'
import { useEffect, useState } from 'react' 
import { useParams } from 'react-router-dom'

function Accommodation() {
 
  const { accommodationId } = useParams()
 
  const [showOneAccommodation, setShowOneAccommodation] = useState()

  useEffect(() => {
      const showAcc = async () => {
          const data = await getAccommodationById(accommodationId)
          console.log(accommodationId)
          setShowOneAccommodation(data)
          console.log(showOneAccommodation)
        } 
        showAcc()   

  }, [accommodationId])

  function loadShowOneAcc(){
    const result = showOneAccommodation.map((acc, index) => {
        return (
        <div id='cocktail' key={index}>
        <AccommodationUnique info={acc}/>
        </div>
        ) 
    })
    return <div id='result'>{result}</div>
}

  return (
    <div>
  {/*  {loadShowOneAcc()} */}
  <AccommodationUnique info={showOneAccommodation}/>
    </div>
  )
}

export default Accommodation