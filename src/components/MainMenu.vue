<template>
  <div class="main-menu">
    <h1 class="title" data-aos="fade-down">🎁 Gift for You</h1>
    <div class="buttons">
        <router-link to="/card" class="btn">🌹 Open Card</router-link>
        <router-link to="/quiz" class="btn">🛤️ Take Quiz</router-link>
        <router-link to="/game" class="btn">🎮 Play Game</router-link>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'

onMounted(() => {
  gsap.from(".btn", {
    opacity: 0,
    y: 30,
    stagger: 0.2,
    duration: 0.8,
    ease: "back.out(1.7)"
  })
})
</script>

<style scoped>
.menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #ffe4ec, #fff9f2);
  text-align: center;
}

.title {
  font-size: 3rem;
  color: #e91e63;
  margin-bottom: 3rem;
  text-shadow: 0 2px 10px rgba(233, 30, 99, 0.2);
}

.buttons {
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
}

.btn {
  background: #fff;
  color: #e91e63;
  padding: 1rem 2rem;
  border-radius: 1.2rem;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: 600;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  transition: transform 0.3s, background 0.3s, box-shadow 0.3s;
}

.btn:hover {
  background: #e91e63;
  color: #fff;
  transform: translateY(-5px) scale(1.05);
  box-shadow: 0 6px 18px rgba(233,30,99,0.3);
}

@media (max-width: 600px) {
  .buttons {
    flex-direction: column;
  }
}
</style>