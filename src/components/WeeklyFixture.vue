<script setup>
const props = defineProps({
  week: {
    required: true
  },
  fixtures: {
    required: true
  }
})
</script>

<template>
  <table>
    <thead>
    <tr>
      <th>
        Week {{ week }}
        <br/>
        &nbsp;
      </th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="fixture in fixtures">
      <td>{{ fixture.home_team.name }} {{ fixture.home_team_score }} - {{ fixture.away_team_score }} {{ fixture.away_team.name }}
      </td>
    </tr>
    </tbody>
  </table>
</template>

<style scoped>
table {
  -webkit-border-vertical-spacing: 1em;
}

th {
  width: 300px;
  color: white;
}

td {
  text-align: center;
}

thead {
  background-color: cornflowerblue;
}
</style>