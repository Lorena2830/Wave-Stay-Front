import app from "./config";

export const login = async (body) => {
    try {
        const { data } = await app.post('auth/login', body)
        return data
    } catch (error) {
        console.log(error)
    }
}