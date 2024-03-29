import app from "./config";

export const getAllBooking = async () => {
    try {
        const { data } = await app.get('booking')
       //console.log(data, 'data')
        return data
    } catch (error) {
        console.log(error)
    }
}

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

export const getBookingsByUser = async (id) => {
    try {
        const { data } = await app.get(`booking/user/${id}`);
        console.log(data, 'reservas del ususario')
        return data;
    } catch (error) {
        console.error("Error fetching bookings:", error);
        throw error;
    }
}

export const deleteBooking = async (id) => {
    try {
        const { data } = await app.delete(`booking/${id}`, {
            headers: {
                authorization: localStorage.getItem("token"),
            },
        });
        console.log(data, 'data delete')
        return data;
    } catch (error) {
        console.error("Error fetching bookings:", error);
        throw error;
    }
}
