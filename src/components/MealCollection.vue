<script setup>
  import MealItem from './MealItem.vue';

  const { meals } = defineProps({
    meals: {
      type: Array,
      required: true
    }
  })
</script>

<template>
    <div class="meals">
      <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>

    <div v-if="!meals || !meals.length" class="empty">
      <h3>There are no meals found</h3>
    </div>
</template>

<style lang="scss">
@use '../sass/variables' as *;

  .meals {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
    gap: 20px;
    margin: 40px auto;
  }
  .empty {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 70vh;

    h3 {
      font-weight: 500;
      font-size: 1.8rem;
      color: $grey-1;
    }
  }
</style>