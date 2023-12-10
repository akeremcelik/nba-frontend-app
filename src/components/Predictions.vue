<script setup>
const props = defineProps({
  predictions: {
    required: true
  }
})
</script>

<template>
  <table>
    <thead>
    <tr>
      <th style="width: 150px;">Championship Predictions</th>
      <th>%</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="prediction in predictions">
      <td>{{ prediction.name }}</td>
      <td>{{ prediction.prediction ?? 0 }}</td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  -webkit-border-vertical-spacing: 1em;
}

th {
  width: 70px;
  color: white;
}

td {
  text-align: center;
}

thead {
  background-color: cornflowerblue;
}
</style>