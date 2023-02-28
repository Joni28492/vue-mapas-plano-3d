import { defineComponent, ref, computed } from 'vue';
import SearchResults  from "@/components/search-results/SearchResults.vue";
import { usePlaceStore } from '@/composables/usePlaceStore';


export default defineComponent({
    name: 'SearchBar',
    components: {SearchResults},
    setup() {
        
        const debounceTimeout = ref();
        const debounceValued = ref('')

        const {searchPlacesByTerm } = usePlaceStore()

        return {
            debounceValued,
            searchTerm: computed({
                get(){
                    return debounceValued.value;
                },
                set(val:string){
                    if(debounceTimeout.value ) clearTimeout(debounceTimeout.value)
                    
                    debounceTimeout.value = setTimeout(() => {
                        debounceValued.value = val
                        searchPlacesByTerm(val)
                    }, 500);

                }
            })
        }
    },
})