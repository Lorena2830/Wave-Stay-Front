import React from 'react'
import '../Footer/Footer.css'
import { Link } from 'react-router-dom'

function Footer() {
    return (
    <>

  <div className='segundo_bloque'>
    <div className='grid'><p><h4>Contacto</h4></p>
    <p>wave-stay@info.com <br /> +34 660000000</p>
    </div>
    <div></div>
    <div className='grid'><p><h4>Social</h4></p>
    <Link to='/home/socialNetwork'>
    <p>TRIBU SURF</p>
    </Link>
    </div>
  </div>
    </>
  )
}

export default Footer