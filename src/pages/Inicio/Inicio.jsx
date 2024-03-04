import React from 'react';
import '../Inicio/Inicio.css';
import { Link } from 'react-router-dom';

function Inicio() {
  return (
      <div className='all'>
      <div className='bloque'>
        <div className='text'>
          <h3>¿Listo para una experiencia inolvidable de surf en las impresionantes playas de Canarias?</h3> 
          <p>Nuestra página web está diseñada para surfistas como tú, que buscan el alojamiento perfecto para complementar su emocionante escapada de surf en estas islas paradisíacas. <br />¿En qué destacamos?</p>
          <ul>
            <li>Variedad de Opciones</li>
            <li>Información Detallada</li>
            <li>Reservas Fáciles</li>
            <li>Con una red social interna</li>
          </ul>
        </div>
        <div className='grid'>
        <div className='botones'>
          <Link to='/signup'>
            <button id='botones'>REGISTRARSE</button>
          </Link>
        </div>
          <div className='botones'>
          <Link to='/login'>
            <button id='botones'>INICIAR SESIÓN</button>
          </Link>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Inicio;