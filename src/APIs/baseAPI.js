import Axios from 'axios';

export default Axios.create({
    baseURL: process.env.NODE_ENV === 'production'
        ? 'https://heroku.../api'
        : 'http://localhost:8001/api'
});