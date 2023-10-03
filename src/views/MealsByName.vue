<script setup>
  import { computed, onMounted, ref } from 'vue';
  import store from '../store';
  import { useRoute } from 'vue-router';

  const route = useRoute()
  const keyword = ref('')
  const meals = computed(()=> store.state.searchedMeals)
  const searchMeals = ()=> store.dispatch('searchMeals', keyword.value)

  onMounted(()=> {
    keyword.value = route.params.name

    if(keyword.value){
      searchMeals()
    }
  })

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
      <router-link to="/" class="card__image">
        <img :src="meal.strMealThumb" :alt="meal.strMeal">
      </router-link>
      <div class="card__details">
        <h3 class="title">{{ meal.strMeal }}</h3>
        <a class="action" :href="meal.strYoutube" target="_blank">Youtube</a>
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
      width: 100%;

      img {
        height: 200px;
        width: 100%;
        object-fit: cover;
      }
    }

    &__title {
      font-weight: 500;
      font-size: 1.8rem;
      padding: 0 10px;
    }

    &__details {
      padding: 0 10px 30px;
    }
  }
</style>