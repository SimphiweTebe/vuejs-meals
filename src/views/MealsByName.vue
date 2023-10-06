<script setup>
  import { computed, onMounted, ref } from 'vue';
  import store from '../store';
  import { useRoute } from 'vue-router';
  import MealCollection from '../components/MealCollection.vue'

  const route = useRoute()
  const keyword = ref('')
  const meals = computed(()=> store.state.searchedMeals)

  const searchMeals = ()=> {
    if (keyword.value){
      store.dispatch('searchMeals', keyword.value)
    } else {
      store.commit('setSearchedMeals', [])
    }
  }

  onMounted(()=> {
    keyword.value = route.params.name
    searchMeals()
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

  <MealCollection :meals="meals"/>

</template>