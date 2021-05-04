import axios from 'axios'

const baseURL = process.env.NODE_ENV === 'production' ? "/api/v1/" : "http://localhost:5000/api/v1/"


const instance = axios.create({
    baseURL
});

export default instance