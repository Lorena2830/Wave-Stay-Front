import React from 'react';
import ProfileCard from '../../components/ProfileCard/ProfileCard';
import './Profile.css';

function Profile() {
  return (
    <div className="profile">
      <h1>My Profile</h1>
      <ProfileCard
        name="Pepe"
        photoUrl="https://img.freepik.com/vector-premium/icono-avatar-masculino-persona-desconocida-o-anonima-icono-perfil-avatar-predeterminado-usuario-redes-sociales-hombre-negocios-silueta-perfil-hombre-aislado-sobre-fondo-blanco-ilustracion-vectorial_735449-120.jpg"
        description="Â¡Hola! Soy Pepe y me encanta el surf."
      />
    </div>
  );
}

export default Profile;