<template>
  <div class="flex items-center  flex-col text-2xl bg-black">
    <div class="pt-10">
      <img src="../assets/images/logoCRV_PNG.png" alt="logo" class="w-4/6 mx-auto" />
    </div>
    <div class="flex flex-col items-center">
      <h2 class="text-5xl pt-5 font-semibold font-Cormorant_Garamond text-lime-500">CRV</h2>
      <h3 class="text-lg pb-5 font-Dancing_Script text-white">Carrosserie - Réparations</h3>
    </div>

    <GoogleMap api-key="" style="width: 100%; height: 300px" :center="center" class="px-5 lg:px-40"
      :zoom="14">
      <Marker :options="{ position: center }" />
    </GoogleMap>

    <button @click="launchNavigation" class=" p-2 mt-10 bg-lime-500 text-black rounded-md">Lancer l'itinéraire</button>

   
    <div class="py-16 mx-4">
      
      <div
        class="text-lg flex flex-col font-Open_Sans text-white border border-white rounded-lg p-5  shadow-round  shadow-white">

        <div class="flex ">
          <svg class="w-10 h-10 mr-2 border rounded-2xl p-1" xmlns="http://www.w3.org/2000/svg" fill="none"
            viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
          <a class="underline" href="tel:0231859729">02.31.85.97.29</a>
        </div>

        <div class="flex py-8">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-10 h-10 mr-2 border rounded-2xl">
            <path stroke-linecap="round" stroke-linejoin="round"
              d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z" />
          </svg>
          <div>
            <p class="">20 ZI Les grandes carrières</p>
            <p class="">14370 MOULT</p>
          </div>
        </div>

        <div class="flex ">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
            class="w-10 h-10 mr-2 border rounded-2xl">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <div>
            <p class="font-semibold">Horaires d'ouverture:</p>
            <p class="">Lundi - Vendredi: <br>10h-12h / 14h-19h</p>
          </div>
        </div>


      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import { GoogleMap, Marker } from "vue3-google-map";

export default defineComponent({
  components: { GoogleMap, Marker },
  setup() {
    const center = { lat: 49.115666324581525, lng: -0.18253721965668682 };

    const launchNavigation = () => {
      const { lat, lng } = center;
      const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`;

      window.open(googleMapsUrl); 
    };

    return { center, launchNavigation };
  },
});
</script>
