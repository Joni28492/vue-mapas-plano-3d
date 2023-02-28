<template>

  <MapView />
  <SearchBar />
  <MyLocationBtn />
  <TripDetails />

</template>

<script lang="ts">
import { usePlaceStore } from '@/composables';
import { defineComponent } from 'vue';
import MapView from '@/components/mapview/MapView.vue' //ignorar errores de importacion, vienen del visual
import MyLocationBtn from "@/components/my-location-btn/MyLocationBtn.vue"
import SearchBar from '@/components/searchbar/SearchBar.vue'
import TripDetails from '@/components/trip-details/TripDetails.vue'



export default defineComponent({
  name: 'Home',
  components: { MapView, MyLocationBtn, SearchBar, TripDetails  },

  setup(){
    usePlaceStore()
  }
});
</script>
