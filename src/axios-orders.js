import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-c8022.firebaseio.com/'
});

export default instance