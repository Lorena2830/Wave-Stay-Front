import app from "./config";

 export const getBookingByAccommodation = async (id) => {
    try {
        const { data } = await app.get(`/booking/accommodation/${id}`);
        //console.log(data)
        return data;
    } catch (error) {
        console.error("Error fetching booking:", error);
        throw error;
    }
}

export const createBooking = async (bookingData) => {
    try {
        const { data } = await app.post('booking', bookingData);
        return data; 
    } catch (error) {
        console.error("Error creating booking:", error);
        throw error; 
    }
}

