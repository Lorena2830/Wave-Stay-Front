import React from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import  'react-date-range/dist/styles.css' ;
import 'react-date-range/dist/theme/default.css' ;
import {DateRange} from 'react-date-range';
import {useState} from 'react'

function AccommodationUnique({info}) {
  const [state, setState] = useState([
      {
        startDate: new Date(),
        endDate: null,
        key: 'selection'
      }
    ]);
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
<DateRange
  editableDateInputs={true}
  onChange={item => setState([item.selection])}
  moveRangeOnFirstSelection={false}
  ranges={state}
/>
    </div>
  )
}


  


export default AccommodationUnique


