<template>
  <header>
    <div class="flex items-center pt-20 justify-center text-2xl">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">Contact</RouterLink>
        
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
