import React from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

function AccommodationUnique({info}) {
  return (
    <div id= 'oneCard'>
  <h2>{info.name}</h2>
  <img src={info.imageUrl} alt="" />
  <img src={info.imageUrl1} alt="" />
  <img src={info.imageUrl2} alt="" />
  <p>HABITACIONES: {info.bedrooms}</p>
  <p>{info.price} €</p>
  <p>{info.address}</p>
  <p>{info.description_large}</p>
  <Stack spacing={1}>
       {/*  <Rating name="half-rating" defaultValue={3.5} precision={0.5} /> */}
        <Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly /> 
      </Stack>
    </div>
  )
}

export default AccommodationUnique


