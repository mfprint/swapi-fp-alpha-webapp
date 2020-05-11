import Axios from 'axios';

export default Axios.create({
    baseURL: process.env.NODE_ENV === 'production'
        ? 'http://ec2-18-188-126-183.us-east-2.compute.amazonaws.com:8010/api'
        : 'http://localhost:8001/api'
});