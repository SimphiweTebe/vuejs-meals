<script setup>
  import { computed } from "@vue/reactivity";
  import { onMounted, watch } from 'vue';
  import store from '../store';
  import { useRoute } from 'vue-router';
  import MealCollection from "../components/MealCollection.vue";

  const letters = "ABCDEFGHIJKLMNOPRSTUVWY".split('')
  const meals = computed(()=> store.state.mealsByLetter)
  const route = useRoute()

  watch(route, ()=> {
    store.dispatch('searchMealByLetter', route.params.letter)
  })

  onMounted(()=> {
    store.dispatch('searchMealByLetter', route.params.letter)
  })
</script>

<template>
  <h1 class="title-1">By letter</h1>

  <div class="letters">
    <router-link 
      :to="{ name: 'byLetter', params: { letter } }" 
      v-for="letter of letters" 
      :key="letter"
      class="letters__link"
    >
      {{ letter }}
    </router-link>
  </div>

  <MealCollection :meals="meals"/>
</template>

<style scoped lang="scss">
  @use '../sass/variables' as *;

  .letters {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    gap: 5px;
    margin-top: 40px;
    width: 100%;

    &__link {
      padding: 10px;
      border: 2px solid $grey-2;
    }
  }
</style>