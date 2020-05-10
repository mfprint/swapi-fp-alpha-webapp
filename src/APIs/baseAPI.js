import Axios from 'axios';

export default Axios.create({
    baseURL: process.env.NODE_ENV === 'production'
        ? 'https://mfprint-swapi.herokuapp.com/api'
        : 'http://localhost:8001/api'
});