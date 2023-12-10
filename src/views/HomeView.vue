<script setup>
import {sendRequest} from "@/utils/sendRequest.js";
import {onMounted, ref} from "vue";

const teams = ref([])

const fetchTeams = async () => {
  const {response, json} = await sendRequest(
      'GET',
      `${import.meta.env.VITE_API_URL}/teams`
  )

  if (response.ok) {
    teams.value = json
  }
}

onMounted(() => {
  fetchTeams()
})
</script>

<template>
  <h2>Team List</h2>

  <div v-for="team in teams">
    {{team.name}}
  </div>
</template>
