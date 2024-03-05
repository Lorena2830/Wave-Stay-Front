import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import { addOneAccToFavorite } from '../../services/accommodationService'


function AccommodationCard({info, favorite=false}) {
  const handleClick = () => {
    if (!favorite) {
      //console.log(info)
       addOneAccToFavorite(info.id) 
    }
  }
    return (
      <Card id= 'accommodation'sx={{ maxWidth: 345, boxShadow: '5px 5px 10px 2px rgba(0, 0, 0, 0.1)' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="190"
            width="300"
            image= {info.imageUrl}
            alt="fotodelacasa"
            className='fotodelacasa'
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.name}
            </Typography>
            <Typography gutterBottom variant="" component="div">
              {info.price} €/noche
            </Typography>
            <Typography variant="body2" color="text.secondary">
            {info.description_short}
            </Typography>
          </CardContent>
        </CardActionArea>
        
        <CardActions id= 'favorite'>
          <Link><Button size="large" onClick={handleClick}>{favorite ? '' : 'Añadir a favorito'}
          </Button>
          </Link>
        </CardActions>
      </Card>
    );
  }
export default AccommodationCard