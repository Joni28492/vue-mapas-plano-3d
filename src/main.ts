import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'


import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
mapboxgl.accessToken = process.env.MAPBOX_TOKEN;

if(!navigator.geolocation){
    alert('Tu navegador no soporta el geolocation')
    throw new Error('Tu navegador no soporta el geolocation')
}

createApp(App).use(store).use(router).mount('#app')
