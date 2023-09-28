<template>
  <main class="bg-gray-100 h-full">
    <router-view />
  </main>
</template>

<script setup>
  
</script>

<style scoped>
  .navLinks {
    display: flex;
    align-items: center;
    gap: 20px;
    height: 100%;
  }
  .navLinks a:hover {
    color: grey;
  }
  .main {
    position: relative;
    min-height: 100vh;
    width: 90%;
    max-width: 1200px;
    margin: auto;
  }
</style>
