import React from 'react'
import '../Footer/Footer.css'
import Surf from '../../../images/Surf.png'
import { Link } from 'react-router-dom'

function Footer() {
    return (
    <>
 <div className='all'>
  <div className='contenedor_img'>
  <img src={Surf} alt="footer"  className='footer'/>
    {/*<div className='textoEncima'>VEN A SURFEAR A CANARIAS</div>*/}
  </div>
  <div className='segundo_bloque'>
    <div className='grid'><p><h4>Contacto</h4></p>
    <p>wave-stay@info.com <br /> +34 660000000</p>
    </div>
    <div className='grid'><p><h4>Cliente</h4></p>
    <p><Link to="home/profile">Perfil</Link> <br /> <Link to="/home/favorite">Tus favoritos</Link> </p>
    </div>
    <div className='grid'><p><h4>Social</h4></p>
    <p>Nuestra red de información </p>
    </div>

  </div>
 </div>
    </>
  )
}

export default Footer