<script setup>

import Button from './Button.vue';

const { meal } = defineProps({
  meal: {
    type: Object,
    required: true
  }
})

</script>

<template>
  <div class="card">
    <router-link :to="{name: 'mealDetails', params: { id: meal.idMeal}}" class="card__image">
      <img :src="meal.strMealThumb" :alt="meal.strMeal">
    </router-link>
    <div class="card__details">
      <h3 class="title">{{ meal.strMeal }}</h3>
      <div class="links">
        <Button :href="meal.strYoutube" title="YouTube" class="red"/>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @use '../sass/variables' as *;
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
    .title {
      font-weight: 600;
      font-size: 1.5rem;
      letter-spacing: .3px;
    }

    &__details {
      padding: 0 20px 30px;

      .links{
        margin-top: 30px;
      }
    }
  } 

</style>

