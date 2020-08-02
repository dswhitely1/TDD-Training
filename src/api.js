import axios from 'axios';

const apiKey = process.env.REACT_APP_API_KEY;

const client = axios.create({
    baseURL: `https://api.outsidein.dev/${apiKey}`
})

const api= {
    loadRestaurants() {
        return client.get('/restaurants').then(response => response.data);
    }
}

export default api;
