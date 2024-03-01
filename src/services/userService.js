import app from "./config";

export const getOwnProfile = async () => {
  try {
    const {data} = await app.get('user/profile', {
      headers: {
        authorization: localStorage.getItem('token')
      }
    });

    console.log('Perfil del usuario obtenido:', data.result);
    return data.result
  } catch (error) {
    console.error('Error al obtener el perfil:', error);
    throw error
  }
};