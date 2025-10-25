import { createRouter, createWebHistory } from 'vue-router'
import MainMenu from '../components/MainMenu.vue'
import CardSection from '../components/CardSection.vue'
import QuizSection from '../components/QuizSection.vue'
import GameSection from '../components/GameSection.vue'

const routes = [
  { path: '/', component: MainMenu },
  { path: '/card', component: CardSection },
  { path: '/quiz', component: QuizSection },
  { path: '/game', component: GameSection },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
