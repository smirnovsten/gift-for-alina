import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import AOS from 'aos'

const app = createApp(App)
app.use(router)
app.mount('#app')

AOS.init({
  once: true,
})
