import React from 'react'
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import './AccommodationUnique.css'
import KingBedIcon from '@mui/icons-material/KingBed';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import BeachAccessIcon from '@mui/icons-material/BeachAccess';
import SurfingIcon from '@mui/icons-material/Surfing';
import WifiIcon from '@mui/icons-material/Wifi';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css'
import { Link } from 'react-router-dom';
import { useState } from 'react'
import { useParams } from 'react-router-dom';
import { DateRange } from 'react-date-range'
import { useEffect } from 'react';
import { createBooking } from '../../services/bookingService';

function AccommodationUnique({ info, data }) {
  const [disableDates, setDisableDates] = useState([])
  const { accommodationId } = useParams()
  const [ranges, setRanges] = useState([{
    startDate: new Date(),
    endDate: null,
    key: 'selection'
  }])

  useEffect(() => {
    let test = []
    data.forEach((booking) => {
      test.push(...obtenerFechasIntermedias(booking.startdate, booking.endingdate))
    })
    setDisableDates(test)
  }, [data])

  function obtenerFechasIntermedias(fechaInicio, fechaFin) {
    const fechasIntermedias = [];

    // Convierte las cadenas de fecha en objetos Date
    const fechaInicioObj = new Date(fechaInicio);
    const fechaFinObj = new Date(fechaFin);

    // Incrementa la fecha de inicio hasta la fecha de fin y agrega cada fecha al array
    for (let fecha = fechaInicioObj; fecha <= fechaFinObj; fecha.setDate(fecha.getDate() + 1)) {
      fechasIntermedias.push(new Date(fecha));
    }

    return fechasIntermedias;
  }

  async function handdleCreateBooking() {
    const userId = localStorage.getItem('id')
    const { result } = await createBooking({ accommodationId: accommodationId, startdate: ranges[0].startDate, endingdate: ranges[0].endDate, userId })
    console.log(result)
  }

  function handleSelect(newRanges) {
    setRanges([])
    setRanges([newRanges.selection])
    //console.log(ranges, 'ranges');
    console.log(newRanges.selection, 'newRanges');
  }

  return (
    <div className='oneCard'> {/* Div de todo el componente */}
      <div className="space"></div>
      <div><h2>{info.name}</h2>   </div>
      <div className="space"></div>
      <div className="space"></div> {/* Div de las imagenes */}
      <div className='grid-wrapper'>
        <div className='grid-wrapper-item'><img src={info.imageUrl} alt="" className="grid-wrapper-img" /></div>
        <div className='grid-wrapper-item'><img src={info.imageUrl1} alt="" className="grid-wrapper-img" /></div>
        <div className='grid-wrapper-item'><img src={info.imageUrl2} alt="" className="grid-wrapper-img" /></div>  </div>


      <div className="space"></div> {/* Div de la info + Recomandacion cliente*/}
      <div className="box">
        <p><h3>Alojamiento entero: {info.bedrooms} habitaciones</h3></p>
        <p>4 viajeros,  {info.bedrooms} {info.bedrooms > 1 ? (
          <>
            dormitorios
          </>
        ) : (
          <>
            dormitorio
          </>
        )} , {info.bedrooms} {info.bedrooms > 1 ? (
          <>
            camas
          </>
        ) : (
          <>
            cama
          </>
        )} , 2 baños

        </p>
        <div className="space"></div>
        <div className="cajita"></div>
        <div className="cuadradito2">
          <div>
            <EmojiEventsIcon /> <br /> <strong> Recomendación de <br />los surferos</strong>
          </div>
          <div>
            <strong>Uno de los <br />alojamientos que <br />más gustan</strong>
          </div>
          <div>
            <strong></strong>
            <Stack spacing={1}>
              {/*  <Rating name="half-rating" defaultValue={3.5} precision={0.5} /> */}
              <Rating name="half-rating-read" defaultValue={4} precision={0.5} readOnly />
            </Stack>
          </div>
        </div>
      </div>


      <hr />      {/* Descubre el alojamiento*/}
      <div className="box">
        <div className="space"></div>
        <p><h3>Descubre el alojamiento</h3> <br /></p>
        <p>Nuestro alojamiento está ubicado en {info.address}</p>
        <p>{info.description_large} <br />
          Escríbemos sin ningún tipo de compromiso, te podemos ayudar info@alojamiento.com <br />
          Si quieres reservar en nuestra web te recordamos que no disponemos de pago web, se tendrá <br />
          que pagar una vez se llegue al alojamiento. <br />
          El precio de la estancia/noche es {info.price} €
        </p>
      </div>
      <div className="space"></div>

      <hr />{/* Donde dormiras*/}
      <div className="box">
        <p><h3>¿Dónde dormirás?</h3></p>
        <div className="space"></div>
        <div className="cajita"></div>
        <div className="cuadradito" style={{ textAlign: 'left' }}>
          <div className="camas">
            {info.bedrooms > 1 ? (
              <>
                <KingBedIcon />
                <KingBedIcon />
              </>
            ) : (
              <KingBedIcon />
            )}
          </div>
          <p><strong>Dormitorios {info.bedrooms}</strong></p>
          <p>{info.bedrooms} {info.bedrooms > 1 ? (
            <>
              Camas
            </>
          ) : (
            <>
              Cama
            </>
          )}</p>
        </div>
      </div>


      <hr />
      <div className="box">
        <p><h3>¿Qué hay en este alojamiento?</h3><br /></p>
        <p><BeachAccessIcon />Vistas a la playa</p>
        <p><SurfingIcon />Academia de surf cerca</p>
        <p><WifiIcon />Wifi</p>
        <p>Cocina</p>
        <p>Aparcamiento privado</p>
      </div>
      <hr />
      <h3>Elige la duración de tu estancia:</h3>
      <div id='divCalendary'>
        <DateRange
          editableDateInputs={true}
          onChange={handleSelect}
          moveRangeOnFirstSelection={false}
          ranges={ranges}
          disabledDates={disableDates}
          className='calendary'
        />
        <Link to='/home/booking'>
          <button id='reservar' onClick={handdleCreateBooking}>RESERVAR</button>
        </Link>
      </div>
    </div>
  )
}


export default AccommodationUnique



