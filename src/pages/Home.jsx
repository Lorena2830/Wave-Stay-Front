import AccommodationCard from "../components/AccommodationCard/AccommodationCard"
import { useEffect, useState } from "react"
import {getAllAccommodations} from '../services/accommodationService'
import { Link } from "react-router-dom"


function Home() {
  const [accommodations, setAccommodation] = useState([])
  useEffect(() => {
    const getAccommodations = async () => {
      const { result } = await getAllAccommodations()
      setAccommodation(result)
    }
    getAccommodations()
  }, [])

  const displayAccommodations = () => {
    return accommodations.map((accommodation, index) => {
      return (
        <div key={index}> 
        <Link to={`/home/accommodation/${accommodation.id}`}><AccommodationCard  info={accommodation} onClick={() => handleClick(accommodation.id)}/></Link>
         </div>
      )
    })
  }
  return (
    <div style={{display: 'flex', alignItems: 'center', gap:'30px' , flexWrap: 'wrap', height: '80vh', margin:'60px', justifyContent: 'center'}}>
      {
        displayAccommodations()
      }
    </div>
  )
}

export default Home