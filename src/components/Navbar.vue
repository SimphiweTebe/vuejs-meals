<template>
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
</template>