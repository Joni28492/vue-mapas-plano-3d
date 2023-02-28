import Mapboxgl from 'mapbox-gl';
import { defineComponent, onMounted, ref, watch } from 'vue';
import { usePlaceStore, useMapStore } from '@/composables/';

export default defineComponent({
    name: 'MapView',
    setup(){

        const {  userLocation, isUserLocationReady } = usePlaceStore()
        const mapElement = ref<HTMLDivElement>();

        const {setMap} = useMapStore()


        const initMap = async() => {

            if(!mapElement.value) throw new Error('Div Elemento no existe');
            if(!userLocation.value) throw new Error('UserLocation no existe');

            await Promise.resolve()

            const map = new Mapboxgl.Map({
                container: mapElement.value, // container ID
                style: 'mapbox://styles/mapbox/light-v10', // style URL
                center: userLocation.value, 
                zoom: 15, 
            });


            const myLocationPopup = new Mapboxgl.Popup()
                .setLngLat(userLocation.value)
                .setHTML(`
                    <h4>Aquí estoy</h4>
                    <p>Actualmente en Asturias</p>
                    <p> ${userLocation.value} </p>
                `)
                

            /*const myLocationMarker =*/ new Mapboxgl.Marker()
                .setLngLat(userLocation.value)
                .setPopup(myLocationPopup)
                .addTo( map )

            
            setMap(map)

        }

        onMounted( ()=>{
            if(isUserLocationReady.value) 
                return initMap();
            console.log('No tengo localización aun')
        })

        watch(isUserLocationReady, ()=>{
            if(isUserLocationReady.value) initMap();
        })

        return {
            isUserLocationReady,
            mapElement
        }
    }
})