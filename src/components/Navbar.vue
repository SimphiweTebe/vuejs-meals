<template>
  <nav class="nav">
    <header class="navBar">
    <router-link :to="{name: 'home'}" class="home">
      Home
    </router-link>
    <div class="navBar__menu">
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
  </nav>
</template>