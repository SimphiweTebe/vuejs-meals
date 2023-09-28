<template>
  <div class="bg-gray-100 h-full">
    <header class="bg-white shadow-md h-16 flex justify-between items-stretch">
      <router-link :to="{name: 'home'}" class="inline-flex items-center px-5">
        Home
      </router-link>
      <div class="navLinks px-5">
        <router-link :to="{name: 'byName'}">
          Search Meals
        </router-link>
        <router-link :to="{name: 'byLetter'}">
          Meals by Letter
        </router-link>
        <router-link :to="{name: 'byIngredient'}">
          Meals by Ingredient
        </router-link>
      </div>
    </header>
    <main class="main">
      <router-view />
    </main>
  </div>
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
