import AccommodationCard from "../components/AccommodationCard/AccommodationCard"
import { useEffect, useState } from "react"
import {getAllAccommodations} from '../services/accommodationService'


function Accommodation() {
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
        <AccommodationCard key={index} info={accommodation} />
      )
    })
  }
  return (
    <div style={{display: 'flex', alignItems: 'center', height: '80vh'}}>
      {
        displayAccommodations()
      }
    </div>
  )
}

export default Accommodation