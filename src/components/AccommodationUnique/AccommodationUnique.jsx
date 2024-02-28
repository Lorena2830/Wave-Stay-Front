import React from 'react'


function AccommodationUnique({info}) {
  console.log(info)
  return (
    <div>
    <img>{info.result.imageUrl}</img>
    <img>{info.result.imageUrl1}</img>
    <img>{info.result.imageUrl2}</img>
    </div>
  )
}

export default AccommodationUnique