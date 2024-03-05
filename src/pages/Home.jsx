import AccommodationCard from "../components/AccommodationCard/AccommodationCard"
import { useEffect, useState } from "react"
import { getAllAccommodations } from '../services/accommodationService'
import { Link } from "react-router-dom"
import { useContext } from "react"
import { AccommodationContext } from "../components/Context/Context"


function Home() {

  const { filteredAccommodations, accommodations } = useContext(AccommodationContext)

  const displayAccommodations = () => {
    return filteredAccommodations.map((accommodation, index) => {
      return (
        <div key={index}>
          <Link to={`/home/accommodation/${accommodation.id}`}><AccommodationCard info={accommodation} onClick={() => handleClick(accommodation.id)} /></Link>
        </div>
      )
    })
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '70px', flexWrap: 'wrap', width: '80vw', height: '100%', margin: 'auto', marginTop: '80px', marginBottom: '60px', justifyContent: 'center', overflow: 'hidden'}}>
      {
        displayAccommodations()
      }
    </div>
  )
}

export default Home