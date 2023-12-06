<<<<<<< HEAD
<template>
  <header>
    <div class="flex items-center pt-20 justify-center text-2xl">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">Contact</RouterLink>
        
      </nav>
    </div>
  </header>

=======
<template >
  <NavBar />
>>>>>>> fix_main_branch
  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
<<<<<<< HEAD
=======
import NavBar from "./components/NavBar.vue";
>>>>>>> fix_main_branch
</script>
