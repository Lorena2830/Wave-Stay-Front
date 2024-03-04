import React, { useState } from 'react';
import '../Booking/Booking.css';
import { Link } from 'react-router-dom'; 

function Booking() {
  const [showPopup, setShowPopup] = useState(true);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <div className="popup-container">
          <div className="popup">
            <p>Su reserva ha sido realizada con éxito. Pagará al llegar al alojamiento.</p>
            <p>Tendrá un 20% de descuento en futuras reservas durante este año.</p>
            <button onClick={() => { handleClosePopup(); }}>
              <Link to="/home/profile">Aceptar</Link>
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default Booking;