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
import { useState } from 'react'
import { DateRangePicker } from 'react-date-range'

function AccommodationUnique({ info }) {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: null,
      key: 'selection'
    }
  ]);

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
            <strong> 4 Stars</strong>
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


      <hr />{/*¿Qué hay en este alojamiento?*/}
      <div className="box">
        <p><h3>¿Qué hay en este alojamiento?</h3><br /></p>
        <p><BeachAccessIcon />Vistas a la playa</p>
        <p><SurfingIcon />Academia de surf cerca</p>
        <p><WifiIcon />Wifi</p>
        <p>Cocina</p>
        <p>Aparcamiento privado</p>
      </div>
      <hr />
      <div id = 'divCalendary'>
        <DateRangePicker
          editableDateInputs={true}
          onChange={item => setState([item.selection])}
          moveRangeOnFirstSelection={false}
          ranges={state}
          className='calendary'
        />
      <button id='reservar'>RESERVAR</button>
      </div>
    </div>
  )
}


export default AccommodationUnique



