<script setup>
 const props = defineProps({
  href: String,
  title: String
 })
</script>

<template>
   <a class="button" :href="href" target="_blank">{{ title }}</a>
</template>

<style scoped lang="scss">
  @use '../sass/variables' as *;

 .button {
  border: 1.5px solid $blue;
  padding: 10px 15px;
  border-radius: $borderRadius;
  color: $blue;
  font-size: 1.3rem;
  font-weight: 500;
  transition: all .2s ease-in;

  &:hover {
      border-color: $blue;
      background-color: $blue;
      color:$white;
    }
 }
 .red {
    background-color: lighten($red, 15);
    color: $white;
    border-color: lighten($red, 15);
    
    &:hover {
      border-color: lighten($red, 15);
      background-color: $white;
      color: lighten($red, 15);
    }
  }

</style>