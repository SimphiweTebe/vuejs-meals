<script setup>
import { computed, onMounted, ref } from 'vue';
import axiosClient from '../axiosClient';

const ingredients = ref([])
const keyword = ref('')
const computedIngredients = computed(()=> {
  if (!computedIngredients) ingredients
  return ingredients.value.filter((item)=> item.strIngredient.toLowerCase().includes(keyword.value.toLowerCase()))
})

onMounted(async ()=> {
  const { data } = await axiosClient.get('list.php?i=list')
  ingredients.value = data.meals
})
</script>

<template>
  <h1 class="title-1">By Ingredient</h1>

  <div class="search">
    <input 
      type="text" 
      class="rounded border-2 border-gray-200 w-full" 
      placeholder="Search for ingredients"
      v-model="keyword"
    />
  </div>

  <router-link 
    :to="{ name: 'ingredientDetails', params: { ingredient: ingredient.strIngredient}}" 
    class="ingredient" 
    v-for="ingredient of computedIngredients" 
    :key="ingredient.idIngredient"
  >
    <h4 class="ingredient__title">{{ ingredient.strIngredient }}</h4>
    <p class="ingredient__desc">{{ ingredient.strDescription }}</p>
  </router-link>
  
</template>

<style lang="scss">
  @use '../sass/variables' as *;

  .ingredient {
    padding: 20px;
    background-color: $white;
    margin-bottom: 40px;
    box-shadow: $boxShadow;
    display: block;

    &__title {
      font-weight: 500;
      font-size: 1.7rem;
      margin-bottom: 20px;
    }
  }
</style>