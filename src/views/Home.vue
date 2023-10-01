<script setup>
  import { computed, onMounted, ref } from 'vue';
  import store from '../store';
  import axiosClient from '../axiosClient'

  const letters ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
  const ingredients = ref([])

  onMounted(async ()=> {
    const { data } = await axiosClient.get('list.php?i=list')
    ingredients.value = data
  })
  
</script>

<template>
  <div class="letters">
      <router-link :to="{ name: 'byLetter', params: {letter}}" v-for="letter of letters" :key="letter">
        {{ letter }}
      </router-link>
  </div>
</template>