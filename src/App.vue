<template >
  <NavBar />
  <RouterView />

</template>

<script setup>
import { RouterView } from "vue-router";
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";
</script>
