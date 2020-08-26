import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-ac82e.firebaseio.com/'
});

export default instance;