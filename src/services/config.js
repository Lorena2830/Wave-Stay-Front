import axios from 'axios'

const app = axios.create({
    baseURL: "https://wavestay-project.onrender.com/api"
});

export default app