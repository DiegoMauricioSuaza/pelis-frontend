import axios from 'axios';

const axiosInstance = axios.create({
    //  baseURL: 'http://localhost:3000/'
    baseURL: 'https://pelis-backend-1.onrender.com/'
});

export {
    axiosInstance
}