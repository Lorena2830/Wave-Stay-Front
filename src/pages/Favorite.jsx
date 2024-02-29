import React from 'react'
import { useState, useEffect } from 'react'
import { getAllAccommodationsFavorites } from '../services/accommodationService'
import AccommodationCard from '../components/AccommodationCard/AccommodationCard'

function Favorite() {
    const [favorite, setFavorite] = useState()
    
    useEffect(()=> {
        const getFavorites = async () => {
          const {result} = await getAllAccommodationsFavorites()
          console.log(result)
          setFavorite(result)
        }
        getFavorites()
      }, [])

      const displayFavoriteAcc = () => {
        return favorite.accommodation.map((acc, index) => {
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