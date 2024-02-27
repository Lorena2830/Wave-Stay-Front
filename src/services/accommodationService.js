import app from "./config";

export const getAllAccommodations = async () => {
    try {
        const { data } = await app.get('accommodation')
        return data
    } catch (error) {
        console.log(error)
    }
}

export const addFavoriteAccommodation = async (id) => {
    try {
      const { data } = await app.put(`accommodation/add/${id}`/* ,{}, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      } */);
      return data
    } catch (error) {
      console.log(error);  
    }
  }