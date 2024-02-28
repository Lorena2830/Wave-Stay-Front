import React from 'react'

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
  <p>{info.rating}</p>
    </div>
  )
}

export default AccommodationUnique


