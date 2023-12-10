<script setup>
const props = defineProps({
  text: {
    required: true
  }
})
</script>

<template>
  <div class="button">
    {{text}}
  </div>
</template>

<style scoped>
.button {
  width: fit-content;
  padding: 5px 10px 5px 10px;
  color:white;
  background-color: cornflowerblue;
  border-radius: 10px;
  cursor: pointer;
}
</style>