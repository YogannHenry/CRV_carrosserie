<template>
    
    <div class="flex flex-col items-center">
      <div class="border rounded p-2 shadow-sm shadow-white">
        <slot></slot>
      </div>
    <p class="font-Open_Sans text-sm text-base-300 w-2/4 text-center mt-3 pt-3 border-t-2">
      {{ description }}
    </p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HomeIcon',
    props: {
    description: {
      type: String,
      default: 'Default description',
    },
  },
  };
  </script>
  
  <style scoped>
  </style>
  