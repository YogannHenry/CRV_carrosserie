<template>
  <div class="bg-black">
    <div class="pt-10">
      <img src="../assets/images/logoCRV_PNG.png" alt="logo" class="w-4/6 lg:w-1/6 mx-auto" />
    </div>
    <div class="flex flex-col items-center">
      <h2 class="text-5xl pt-2 font-semibold font-Cormorant_Garamond text-base-100 border-b-2">Nos Réalisations</h2>
    </div>
  </div>
  <div class="bg-black h-auto p-5">
    <div class="carousel  rounded-box">
      <div class="carousel-item">
        <img class="object-cover  w-96 "
          src="../assets/images/réalisations/photo1.jpeg" alt="Burger" />
      </div>
      <div class="carousel-item">
        <img class="object-cover  w-96 "
          src="../assets/images/réalisations/photo2.jpeg" alt="Burger" />
      </div>
      <div class="carousel-item">
        <img class="object-cover  w-96 "
          src="../assets/images/réalisations/photo3.jpeg" alt="Burger" />
      </div>
      <div class="carousel-item">
        <img class="object-cover  w-96 " src="../assets/images/réalisations/photo4.jpeg"
          alt="Burger" />
      </div>
      <div class="carousel-item">
        <img class="object-cover  w-96 "
          src="../assets/images/réalisations/photo5.jpeg" alt="Burger" />
      </div>
      <div class="carousel-item">
        <img class="object-cover  w-96 "
          src="../assets/images/Réalisations/photo6.jpeg" alt="Burger" />
      </div>
      <div class="carousel-item">
        <img class="object-cover  w-96 "
          src="../assets/images/réalisations/photo7.jpeg" alt="Burger" />
      </div>
      <div class="carousel-item">
        <img class="object-cover  w-96 "
          src="../assets/images/réalisations/photo8.jpeg" alt="Burger" />
      </div>
      <div class="carousel-item">
        <img class="object-cover  w-96 "
          src="../assets/images/réalisations/photo9.jpeg" alt="Burger" />
      </div>
      <div class="carousel-item">
      <img class="object-cover  w-96 " src="../assets/images/réalisations/photo10.jpeg"
        alt="Burger" />
    </div>
  </div>
</div>
<SocialsNetwork />
<Footer />
</template>

<script setup>
import Footer from '../components/Footer.vue';
import SocialsNetwork from '../components/SocialsNetwork.vue';
</script>

