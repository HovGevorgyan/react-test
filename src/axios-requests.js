import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://dolly-e8857.firebaseio.com/'
});

export default instance;
