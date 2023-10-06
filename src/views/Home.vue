<script setup>
  import { computed, onMounted, ref } from 'vue';
  import store from '../store';
  import axiosClient from '../axiosClient'
  import MealCollection from '../components/MealCollection.vue';

  const meals = ref([])

  const fetchMeals = async ()=> {
    const mealsArray = []

    for (let i = 0; i < 4; i++){
      const { data } = await axiosClient.get('random.php')
      mealsArray.push(data.meals[0])
    }

    meals.value = mealsArray
  }

  onMounted(()=> fetchMeals())
  
</script>

<template>
  <MealCollection :meals="meals"/>
</template>