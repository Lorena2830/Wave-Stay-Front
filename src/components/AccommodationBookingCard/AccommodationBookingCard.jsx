import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Link from '@mui/joy/Link';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import Chip from '@mui/joy/Chip';
import Typography from '@mui/joy/Typography';
import AccommodationCard from '../AccommodationCard/AccommodationCard';
import { useEffect, useState } from 'react';
import './AccommodationBookingCard.css'
import { removeBookingFromUser } from '../../services/bookingService'

export default function AccommodationBookingCard({ accommodations, info}) {
const [reservado, setReservado] = useState(true)

  const handleClick = () => {
    const estabaReservado = reservado;
    setReservado(!estabaReservado)
    if (estabaReservado) {
      removeBookingFromUser(info.id) 
      console.log(reservado)
    }
  }
  const [infoState, setInfoState] = useState([])
  const [accommodationState, setAccommodationState] = useState([])

  function formatearFecha(fechaISO) {
    const fecha = new Date(fechaISO);

    if(fecha) {
      const dia = fecha.getDate().toString().padStart(2, '0');
      const mes = (fecha.getMonth() + 1).toString().padStart(2, '0');
      const año = fecha.getFullYear();

      return `${dia}/${mes}/${año}`;
    }
    return
  }

  useEffect(() => {
    accommodations.forEach((item) => {
      if (item && info && item.id === info.accommodationId) {
        setAccommodationState(item)
      }
    })
    setInfoState(info)
  }, [info, accommodations])
  return (
    <Card
      variant="outlined"
      orientation="horizontal"
      id='bookingCard'
      sx={{
        width: 700,
        height: 200,
        marginBottom: 5,
        '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
      }}
    >
      <AspectRatio ratio="1" sx={{ width: 150 }}>
        <img src= {accommodationState.imageUrl} alt="Accommodation"/>
      </AspectRatio>
      <CardContent>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography level="title-lg" id="card-description">
            <p style={{fontSize: '20px'}}>
              {accommodationState.name}
            </p>
          </Typography>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography level="title-lg" id="card-description">
              <p>
                {formatearFecha(infoState.startdate)}
              </p>
            </Typography>
            <span style={{ marginLeft: '5px', marginRight: '5px' }}>-</span>
            <Typography level="title-lg" id="card-description">
              <p>
              {formatearFecha(infoState.endingdate)}
              </p>
            </Typography>
          </div>
        </div>
        <Typography level="body-sm" aria-describedby="card-description" mb={1}>
          <Link
            overlay
            underline="none"
            href="#interactive-card"
            sx={{ color: 'text.tertiary' }}
          >
            <p style={{fontWeight:'bold'}}>{accommodationState.address}</p>
          </Link>
        </Typography>
        <Chip
          variant="outlined"
          color="primary"
          size="sm"
          sx={{ pointerEvents: 'none' }}
        >
          Puede cancelar su reserva 
        </Chip>
        <button id='cancelar' onClick={handleClick} >{reservado ? 'Cancelar reserva' : 'Reserva cancelada'}</button>
      </CardContent>
    </Card>
  );
}