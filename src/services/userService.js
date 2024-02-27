import app from "./config"

export const getOwnProfile = async () => {
    try {
        const { data } = await app.get('user/profile', {
            headers: {
                authorization: localStorage.getItem('token')
            }
        })
        console.log(data)
        return data 
    } catch (error) {
        console.log(error)
    }
} 