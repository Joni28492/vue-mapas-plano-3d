import axios from "axios";

const searchApi = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        languaje: 'es',
        access_token: process.env.MAPBOX_TOKEN
    }
})

export default searchApi