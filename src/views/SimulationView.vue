<script setup>
  import {sendRequest} from "@/utils/sendRequest.js";
  import {useRoute, useRouter} from "vue-router";
  import {onMounted, ref} from "vue";

  import Button from "@/components/Button.vue";
  import Scoreboard from "@/components/Scoreboard.vue";
  import WeeklyFixture from "@/components/WeeklyFixture.vue";
  import Predictions from "@/components/Predictions.vue";

  const route = useRoute()
  const router = useRouter()

  const leagueId = route.params.id
  const scoreboards = ref([])
  const predictions = ref([])
  const weeklyFixture = ref([])

  const listScoreboard = async () => {
    const {response, json} = await sendRequest(
        'GET',
        `${import.meta.env.VITE_API_URL}/leagues/${leagueId}/list-scoreboard`
    )

    if (response.ok) {
      scoreboards.value = json.data
      predictions.value = json.predictions
    }
  }

  const listWeekFixtures = async () => {
    const {response, json} = await sendRequest(
        'GET',
        `${import.meta.env.VITE_API_URL}/leagues/${leagueId}/list-week-fixtures`
    )

    if (response.ok) {
      weeklyFixture.value = json
    }
  }

  const playNextWeek = async () => {
    const {response, json} = await sendRequest(
        'POST',
        `${import.meta.env.VITE_API_URL}/leagues/${leagueId}/play-next-week`
    )

    if (response.ok) {
      await listScoreboard()
      await listWeekFixtures()
    }
  }

  const playAllWeeks = async () => {
    const {response, json} = await sendRequest(
        'POST',
        `${import.meta.env.VITE_API_URL}/leagues/${leagueId}/play-all-weeks`
    )

    if (response.ok) {
      await listScoreboard()
      await listWeekFixtures()
    }
  }

  onMounted(() => {
    listScoreboard()
    listWeekFixtures()
  })
</script>

<template>
  <h2>Simulation</h2>

  <div style="display: flex; gap: 50px; margin-bottom: 20px;">
    <div>
      <Scoreboard
          :scoreboards="scoreboards"
      />
    </div>

    <div>
      <WeeklyFixture
          v-for="(fixtures, week) in weeklyFixture"
          :week="week"
          :fixtures="fixtures"
      />
    </div>

    <div>
      <Predictions
        :predictions="predictions"
      />
    </div>
  </div>

  <div style="display: flex; gap: 30px;">
    <Button
        text="Play All Weeks"
        @click="playAllWeeks"
    />

    <Button
        text="Play Next Week"
        @click="playNextWeek"
    />

    <Button
        text="Reset Data"
        @click="router.push({'name': 'teams'})"
    />
  </div>
</template>

<style scoped>

</style>