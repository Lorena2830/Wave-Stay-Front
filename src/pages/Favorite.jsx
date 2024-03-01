import React from 'react'
import { useState, useEffect } from 'react'
import { getAllAccommodationsFavorites } from '../services/accommodationService'
import AccommodationCard from '../components/AccommodationCard/AccommodationCard'
import { useParams } from 'react-router-dom'

function Favorite() {
const [favorites, setFavorites] = useState([])
    
    useEffect(()=> {
        const getFavorites = async () => {
          try {
            const {result} = await getAllAccommodationsFavorites()
            console.log(result)
            setFavorites(result)
            console.log(favorites)
          } catch (error) {
            console.log(error)
          }
        }
        getFavorites()
      }, [])


      useEffect(() => {
        console.log(favorites)
      }, [favorites])

       const displayFavoriteAcc = () => {
        return favorites.map((acc, index) => {
           return (
             <AccommodationCard key={index} info={acc} favorite={true} />
           )
         })
       }
  return (
  <>
  <h1>Your list of favorites...</h1>
   {displayFavoriteAcc()} 
  </>
  )
}

export default Favorite