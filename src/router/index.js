import { createRouter, createWebHistory } from 'vue-router'
import TeamsView from '../views/TeamsView.vue'
import FixturesView from "@/views/FixturesView.vue";
import SimulationView from "@/views/SimulationView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'teams',
      component: TeamsView
    },
    {
      path: '/leagues/:id/fixtures',
      name: 'fixtures',
      component: FixturesView
    },
    {
      path: '/leagues/:id/simulation',
      name: 'simulation',
      component: SimulationView
    }
  ]
})

export default router
