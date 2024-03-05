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
    <div style={{ display: 'flex', alignItems: 'center', gap: '30px', flexWrap: 'wrap', height: '80vh', margin: '60px', justifyContent: 'center', overflowY: 'scroll' }}>
      {
        displayAccommodations()
      }
    </div>
  )
}

export default Home