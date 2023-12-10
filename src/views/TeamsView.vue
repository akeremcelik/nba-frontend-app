<script setup>
import {sendRequest} from "@/utils/sendRequest.js";
import {onMounted, ref} from "vue";

import Button from "@/components/Button.vue";
import {useRouter} from "vue-router";

const teams = ref([])
const router = useRouter()

const fetchTeams = async () => {
  const {response, json} = await sendRequest(
      'GET',
      `${import.meta.env.VITE_API_URL}/teams`
  )

  if (response.ok) {
    teams.value = json
  }
}

const generateFixtures = async () => {
  const {response, json} = await sendRequest(
      'POST',
      `${import.meta.env.VITE_API_URL}/generate-fixtures`
  )

  if (response.ok) {
    await router.push({name: 'fixtures', params: {'id': json.id}})
  }
}

onMounted(() => {
  fetchTeams()
})
</script>

<template>
  <h2>Tournament Teams</h2>

  <div v-for="team in teams">
    <p>
      - {{team.name}}
    </p>
  </div>

  <div style="margin-top: 10px;">
    <Button
        text="Generate Fixtures"
        @click="generateFixtures"
    />
  </div>
</template>
