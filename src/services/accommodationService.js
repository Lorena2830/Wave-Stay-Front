import app from "./config";

export const getAllAccommodations = async () => {
    try {
        const { data } = await app.get('accommodation')
        //console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}
  export const getAccommodationById = async (id) => {
    try {
        const { data } = await app.get(`accommodation/${id}`);
        //console.log(data)
        return data;
    } catch (error) {
        console.error("Error fetching accommodation:", error);
        throw error;
    }
}

export const createAccommodation = async (accommodationData) => {
    try {
        const { data } = await app.post('accommodation', accommodationData);
        return data; 
    } catch (error) {
        console.error("Error creating accommodation:", error);
        throw error; 
    }
}

/* export const updateAccommodation = async (id) => {

} */

export const getAllAccommodationsFavorites = async (id) => {
    try {
        const { data } = await app.get(`accommodation/fav/${id}`)
        console.log(data)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const addOneAccToFavorite = async (id) => {
    try {
        const { data } = await app.put(`accommodation/add/${id}`,{} )/*,{
          headers: {
            authorization: localStorage.getItem("token"),
          }
        } */
        return data
    } catch (error) {
        console.log(error);
    }
}

/* export const removeFromFavorites = async (id) => {

}

export const deleteAccommodation = async (id) => {

} */