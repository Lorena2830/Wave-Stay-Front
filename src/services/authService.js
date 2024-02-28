import app from "./config";

export const login = async (body) => {
    try {
        const { data } = await app.post('auth/login', body)
        return data
    } catch (error) {
        console.log(error)
    }
}

export const signup = async (body) => {
    try {
        const { data } = await app.post('auth/signup', body)
        return data
    } catch (error) {
        console.log(error)
    }
}
