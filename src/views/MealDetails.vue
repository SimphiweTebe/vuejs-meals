<script setup>
  import { onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';
  import axiosClient from '../axiosClient';
import Button from '../components/Button.vue';

  const route = useRoute()
  const meal = ref({})

  onMounted(async ()=> {
    window.scrollTo(0,0)
    const {data} = await axiosClient.get(`lookup.php?i=${route.params.id}`)
    meal.value = data.meals[0] || {}
  })

</script>

<template>
  <div class="details">
    <div class="details__header">
      <img :src="meal.strMealThumb" :alt="meal.strMeal">
      <h1>{{ meal.strMeal }}</h1>
    </div>

    <div class="details__cards">
      <p><span>type: </span><strong>{{ meal.strArea }}</strong></p>
      <p><span>category: </span><strong>{{ meal.strCategory }}</strong></p>
    </div>

    <p class="text">
      {{ meal.strInstructions }}
    </p>

    <div class="details__table">

      <div class="column">
        <h3>Ingredients</h3>
        <ul>
          <template v-for="(el, ind) of new Array(20)">
            <li v-if="meal[`strIngredient${ind + 1}`]">
              {{ meal[`strIngredient${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>

      <div class="column">
        <h3>Measures</h3>
        <ul>
          <template v-for="(el, ind) of new Array(20)">
            <li v-if="meal[`strMeasure${ind + 1}`]">
              {{ meal[`strMeasure${ind + 1}`] }}
            </li>
          </template>
        </ul>
      </div>

    </div>

    <div class="links">
      <Button :href="meal.strSource" title="Original source" target="_blank"/>
      <Button :href="meal.strSource" title="YouTube" target="_blank" class="red"/>
    </div>

    <p class="tags">tags: {{ meal.strTags }}</p>
  </div>
</template>

<style scoped lang="scss">
  @use '../sass/variables' as *;
  .details {
    position: relative;
    max-width: 800px;
    margin: 0 auto 40px;
    box-shadow: $boxShadow;
    border-radius: $borderRadius;
    overflow: hidden;
    padding-bottom: 40px;
    text-align: center;
    background-color: $white;

    .text {
      width: 90%;
      margin: 40px auto;
      line-height: 1.8;
    }

    &__header {
      position: relative;

      img {
        display: block;
        height: 450px;
        width: 100%;
        object-fit: cover;
      }

      h1 {
        color: $blue;
        font-weight: 500;
        padding: 20px;
        font-size: 2.7rem;
      }
    }

    &__cards {
      display: flex;
      justify-content: center;
      gap: 10px;

      p {
        background-color: lighten($blue, 60);
        color: $blue;
        padding: 10px 20px;
        border-radius: $borderRadius;
        font-size: 1.4rem;

        span {
          font-size: 1.3rem;
        }

        strong {
          font-weight: 600;
        }
        
      }
    }

    &__table {
      margin: 40px auto;
      display: flex;
      width: 90%;
      border: 1px solid $grey-2;
      border-bottom: none;
      border-radius: $borderRadius;
      .column {
        flex: 1;
        text-align: left;

        &:nth-of-type(1) {
          border-right: 1px solid $grey-2;
        }

        h3 {
          font-weight: 500;
          font-size: 1.6rem;
          padding: 10px;
          border-bottom: 1px solid $grey-2;
        }

        li {
          padding: 5px 10px;
          border-bottom: 1px solid $grey-2;
        }
      }
    }

    .links {
      display: flex;
      gap: 20px;
      justify-content: center;
    }

    .tags {
      color: $blue;
      margin: 20px auto;
      font-size: 1.4rem;
    }
  }
</style>