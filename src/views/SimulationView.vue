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
  const playedFixtures = ref([])

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
      fetchPageData()
    }
  }

  const playAllWeeks = async () => {
    const {response, json} = await sendRequest(
        'POST',
        `${import.meta.env.VITE_API_URL}/leagues/${leagueId}/play-all-weeks`
    )

    if (response.ok) {
      fetchPageData()
    }
  }

  const getPlayedFixtures = async () => {
    const {response, json} = await sendRequest(
        'GET',
        `${import.meta.env.VITE_API_URL}/leagues/${leagueId}/list-played-fixtures`
    )

    if (response.ok) {
      playedFixtures.value = json
    }
  }

  const fetchPageData = () => {
    listScoreboard()
    listWeekFixtures()
    getPlayedFixtures()
  }

  onMounted(() => {
    fetchPageData()
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

    <div v-if="weeklyFixture">
      <WeeklyFixture
          v-for="(fixtures, week) in weeklyFixture"
          :week="week"
          :fixtures="fixtures"
      />
    </div>

    <div v-if="predictions.length">
      <Predictions
        :predictions="predictions"
      />
    </div>
  </div>

  <div style="display: flex; gap: 30px; margin-bottom: 20px;">
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

  <div style="display: flex; flex-wrap: wrap;">
    <WeeklyFixture
        v-for="(fixtures, week) in playedFixtures"
        :week="week"
        :fixtures="fixtures"
    />
  </div>
</template>

<style scoped>

</style>