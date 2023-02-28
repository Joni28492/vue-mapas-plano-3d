<template>
  <button 
  v-if="isBtnReady"
  class="btn btn-primary"
  @click="onMyLocationClicked"
  >Ir a mi Ubicacion</button>
</template>

<script lang="ts">
import { useMapStore, usePlaceStore } from '@/composables'
import { defineComponent, computed } from 'vue'

export default defineComponent({
    name: "MyLocationBtn",
    setup() {
        
        const {userLocation, isUserLocationReady} = usePlaceStore()
        const { map, isMapReady } = useMapStore()

        return {
            isBtnReady: computed<boolean>( ()=> isUserLocationReady.value && isMapReady.value ),


            onMyLocationClicked: ()=>{
                map.value?.flyTo({
                    center: userLocation.value,
                    zoom: 14

                })
            }
        }
    },
})
</script>


<style scoped>
    button {
        position: fixed;
        top: 30px;
        right: 30px;
    }
</style>