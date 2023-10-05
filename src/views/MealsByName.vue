<script setup>
  import { computed, onMounted, ref } from 'vue';
  import store from '../store';
  import { useRoute } from 'vue-router';
  import MealCollection from '../components/MealCollection.vue'

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

  <MealCollection :meals="meals"/>

</template>

<style lang="scss" scoped>
  @use '../sass/variables' as *;
  .search input {
    width: 100%;
  }
  
</style>