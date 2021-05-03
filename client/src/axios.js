import axios from 'axios'

const baseURL = process.env.NODE_ENV === 'production' ? "/api/v1/recruiters" : "http://localhost:5000/api/v1/recruiters"


const instance = axios.create({
    baseURL
});

export default instance