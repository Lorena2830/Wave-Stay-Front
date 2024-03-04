import { useState, useEffect } from 'react'
import { getAllAccommodationsFavorites } from '../../services/accommodationService'
import AccommodationCard from '../../components/AccommodationCard/AccommodationCard'
import './Favorite.css'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

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
  <div className='titulo'><h2><FavoriteBorderIcon style={{ color: 'pink' }} /> Tus alojamientos favoritos</h2></div>
  <div id= 'all'>
  <div className='imag'></div>
  <div className='favorite'>
  <div className='space'></div>
  <div className='tarjeta'>{displayFavoriteAcc() } </div>
  </div>
  </div>
   
  </>
  )
}

export default Favorite 