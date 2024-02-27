import app from "./config";

export const getAllAccommodations = async () => {
    try {
        const { data } = await app.get('accommodation')
        return data
    } catch (error) {
        console.log(error)
    }
}