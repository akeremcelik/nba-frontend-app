<script setup>
const props = defineProps({
  scoreboards: {
    required: true
  }
})
</script>

<template>
  <table>
    <thead>
    <tr>
      <th>Team Name</th>
      <th>Played</th>
      <th>Won</th>
      <th>Lost</th>
      <th>Scores Out</th>
      <th>Scores In</th>
      <th>Average</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="scoreboard in scoreboards">
      <td>{{ scoreboard.team.name }}</td>
      <td>{{ scoreboard.played }}</td>
      <td>{{ scoreboard.won }}</td>
      <td>{{ scoreboard.lost }}</td>
      <td>{{ scoreboard.scores_out }}</td>
      <td>{{ scoreboard.scores_in }}</td>
      <td>{{ scoreboard.average }}</td>
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