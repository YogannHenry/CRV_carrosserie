<template>
  <HomeLogo />
  <div class="bg-black text-base-100 pt-16 pl-5">
    <h1 class="text-4xl font-semibold font-Open_Sans lg:text-7xl">
      CARROSSERIE - REPARATIONS </h1>
  </div>
  <div class=" bg-black">
    <div class="flex items-start lg:pt-10 test">
      <div class="lg:flex lg:flex-col lg:w-1/2">
        <div class="p-5 ">
          <p class="font-Open_Sans text-md text-base-300 lg:text-2xl lg:w-5/6">
            Nous sommes spécialisés dans toutes les marques et modèles de véhicules. Nous sommes des mécaniciens honnêtes
            et
            éthiques qui travaillent pour desservir la région Caennaise.
          </p>
          <RouterLink to="/realisations"
            class="btn mt-20 lg:mt-40 border-lime-500 border-2 hover:text-lime-500 hover:bg-black bg-lime-500 text-black hover:border-black">
            NOS REALISATIONS
          </RouterLink>
        </div>

      </div>

      <div class="  lg:w-3/6 ">
        <img src="../assets/images/Réalisations/home1.png" alt="logo" class=" ml-5 pt-5 pr-5 mx-auto lg:ml-0 lg:pr-0 ">
      </div>
    </div>

    <div class="gap-10 py-20  lg:py-32 test">
      <HomeIcon :description="'Des mécaniciens en qui vous pouvez avoir confiance'">
        <WrenchScrewdriverIcon class="w-20 h-20 text-white stroke-1" />
      </HomeIcon>
      <HomeIcon
        :description="'Nous valorisons la transparence concernant votre voiture  et nous nous efforçons sincèrement de rendre votre expérience en parfait accord avec les coûts réels.'">
        <UsersIcon class="w-20 h-20 text-white stroke-1" />
      </HomeIcon>
      <HomeIcon :description="'Nous savons tenir les délais annoncés, avec nous il est facile de vous organiser.'">
        <KeyIcon class="w-20 h-20 text-white stroke-1" />
      </HomeIcon>
    </div>
  </div>

  <div class="h-auto lg:flex lg:flex-row-reverse">

    <div>
      <div class="bg-base-100 h-10 mt-10 m-5">
        <h2 class="text-4xl font-semibold font-Open_Sans lg:text-5xl">NOS SERVICES</h2>
      </div>
      <div class="p-5 ">
        <p class="font-Open_Sans text-md lg:text-lg">
          Découvrez notre expertise exceptionnelle en carrosserie automobile ! Notre équipe de professionnels qualifiés
          est
          prête à redonner vie à votre véhicule. Des réparations précises suite à un accident à la peinture personnalisée,
          nous offrons des prestations de qualité pour restaurer l'esthétique et la performance de votre voiture. Faites
          confiance à notre engagement envers la satisfaction client et redonnez à votre véhicule son éclat d'origine.
          Contactez-nous dès aujourd'hui pour un service exceptionnel et une expérience sans souci pour votre voiture !
        </p>
      </div>
      <div>
        <img src="../assets/images/Réalisations/Home2carPainting.png" alt="logo"
          class=" ml-5 pt-5 pr-5 mx-auto lg:ml-0 lg:pr-0 ">
      </div>
    </div>

    <div>
      <div>
        <img src="../assets/images/Réalisations/Home3paintParts.png" alt="logo" class=" mr-5 mt-16 pr-5 mx-auto">
      </div>
      <div class="bg-base-100 h-10 my-10 m-5">
        <h2 class="text-4xl font-semibold font-Open_Sans lg:text-5xl">LE RESPECT DES COULEURS</h2>
      </div>
      <div class="p-5 ">
        <p class="font-Open_Sans text-md lg:text-lg">
          Découvrez l'excellence de notre atelier de carrosserie, où la qualité rencontre l'innovation ! Nous sommes fiers
          de vous proposer des prestations exceptionnelles, utilisant les dernières peintures approuvées par les
          principaux
          constructeurs automobiles. Notre engagement envers le respect des couleurs d'origine garantit que votre véhicule
          retrouve son éclat d'usine.
        </p>
      </div>
    </div>

  </div>


  <div class="bg-black text-base-100 py-20 p-5 h-auto">
    <h1 class="text-5xl  text-center font-semibold font-Open_Sans">CHOISISSEZ CRV POUR PRENDRE SOIN DE VOTRE VEHICULE.

    </h1>
    <div class="flex justify-center pt-20">
      <RouterLink to="/contact"
        class="btn border-lime-500 border-2 text-lime-500 bg-black hover:bg-lime-500 hover:text-black hover:border-black">
        CONTACTEZ-NOUS
      </RouterLink>
    </div>
  </div>
  <Footer />
  <SocialsNetwork />
</template>

<script setup>
import HomeIcon from '@/components/HomeIcon.vue'
import Footer from '@/components/Footer.vue'
import SocialsNetwork from '../components/SocialsNetwork.vue';
import HomeLogo from '../components/HomeLogo.vue';
import { WrenchScrewdriverIcon, UsersIcon, KeyIcon } from '@heroicons/vue/24/outline'


</script>

<style>
.test {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@media (min-width: 700px) {
  .test {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;

  }
}
</style>

```