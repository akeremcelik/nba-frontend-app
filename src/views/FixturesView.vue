<script setup>
import {useRoute, useRouter} from "vue-router";
  import {sendRequest} from "@/utils/sendRequest.js";
  import {onMounted, ref} from "vue";

  import Button from "@/components/Button.vue";
  import WeeklyFixture from "@/components/WeeklyFixture.vue";

  const route = useRoute()
  const router = useRouter()

  const leagueId = route.params.id
  const fixtures = ref([])

  const listFixtures = async () => {
    const {response, json} = await sendRequest(
        'GET',
        `${import.meta.env.VITE_API_URL}/leagues/${leagueId}/list-fixtures`
    )

    if (response.ok) {
      fixtures.value = json
    }
  }

  const startSimulation = () => {
    router.push({name: 'simulation', params: {'id': leagueId}})
  }

  onMounted(() => {
    listFixtures()
  })
</script>

<template>
  <h2>Generated Fixtures</h2>

  <div style="display: flex; flex-wrap: wrap; margin-bottom: 20px;">
    <WeeklyFixture
        style="margin-bottom: 20px;"
        v-for="(weeklyFixtures, week) in fixtures"
        :week="week"
        :fixtures="weeklyFixtures"
    />
  </div>

  <Button
      text="Start Simulation"
      @click="startSimulation"
  />
</template>

<style>
h2 {
  color: cornflowerblue;
}
</style>
