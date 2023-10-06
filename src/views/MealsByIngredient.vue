<script setup>
import { computed, onMounted, ref } from 'vue';
import axiosClient from '../axiosClient';
import MealCollection from '../components/MealCollection.vue';
import store from '../store';
import { useRoute } from 'vue-router';

const route = useRoute()
const meals = computed(()=> store.state.mealsByIngredient)

onMounted(()=> {
  store.dispatch('searchMealByIngredient', route.params.ingredient)
})

</script>

<template>
  <h1 class="title-1">{{ route.params.ingredient }} meals</h1>

  <MealCollection :meals="meals"/>
  
</template>