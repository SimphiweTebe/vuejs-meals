<template>
  <Navbar />
  <div class="main">
    <router-view />
  </div>
</template>

<script setup>
  import Navbar from './Navbar.vue';
</script>