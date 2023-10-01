<script setup>
  import { computed, ref } from 'vue';
  import store from '../store';

  const keyword = ref('')
  const meals = computed(()=> store.state.searchedMeals)
  const searchMeals = ()=> store.dispatch('searchMeals', keyword.value)

</script>

<template>
  <div class="search">
    <input 
      type="text" 
      class="rounded border-2 border-gray-200 w-full" 
      placeholder="Search for meals"
      v-model="keyword"
      @change="searchMeals"
    />
  </div>

  <div class="grid">
    <div class="card" v-for="meal of meals" :key="meal.idMeal">
      <img class="card__image" :src="meal.strMealThumb" :alt="meal.strMeal">
      <h3 class="card__title">{{ meal.strMeal }}</h3>
      <div class="card__actions">
        <a :href="meal.strYoutube" target="_blank">Youtube</a>
        <router-link to="/">View</router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  @use '../sass/variables' as *;

  .search input {
    width: 100%;
  }
  .grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
    margin: 40px auto;
  }
  .card {
    display: flex;
    flex-direction: column;
    gap: 10px;
    border: 1px solid $grey-3;
    border-radius: $borderRadius;
    overflow: hidden;
    background-color: $white;
    box-shadow: 1px 2px 4px rgba(0,0,0,.01);

    &__image {
      height: 200px;
      object-fit: cover;
    }

    &__title {
      font-weight: 500;
      font-size: 1.8rem;
      padding: 0 10px;
    }

    &__actions {
      display: flex;
      padding: 0 10px 20px;
    }
  }
</style>