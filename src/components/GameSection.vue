<template>
  <div
    class="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-pink-100 via-rose-50 to-purple-100 text-center relative overflow-hidden"
  >
    <!-- Заголовок -->
    <h1
      v-if="!gameStarted"
      class="text-2xl font-semibold text-rose-600 mb-4 z-10"
    >
      💕 Играй с сердцем
    </h1>

    <!-- Стартовый экран -->
    <div
      v-if="!gameStarted && !gameOver"
      class="flex flex-col items-center gap-4 z-10"
    >
      <p class="text-rose-500">
        Нажми кнопку и поймай как можно больше сердечек 💖
      </p>

      <button
        @click="startGame"
        class="px-8 py-3 bg-pink-400 hover:bg-pink-500 text-white rounded-full shadow-lg transition transform hover:scale-105"
      >
        Начать игру
      </button>
    </div>

    <!-- Информация во время игры -->
    <div
      v-if="gameStarted"
      class="mb-4 z-10 text-rose-600 text-xl font-extrabold tracking-wide drop-shadow-md"
    >
      ⏳ {{ timeLeft }} сек · ❤️ {{ score }}
    </div>

    <!-- Сердечко -->
    <div
      v-if="showHeart && gameStarted"
      class="absolute text-5xl cursor-pointer heart"
      :class="{ pop: isPopping }"
      :style="{ top: heartTop + '%', left: heartLeft + '%' }"
      @click="catchHeart"
    >
      ❤️
    </div>

    <!-- Экран окончания -->
    <div
      v-if="gameOver"
      class="mt-6 px-6 py-4 bg-white/70 rounded-2xl shadow-lg backdrop-blur z-10"
    >
      <p class="text-lg text-rose-600 font-medium">
        Ты поймала {{ score }} сердечек 💕
      </p>
      <p class="text-sm text-rose-500 mt-2">
        Каждое из них - для тебя, моя любимая Алина 
      </p>

      <div class="flex flex-col gap-3 mt-4">
        <button
          @click="restartGame"
          class="px-6 py-2 bg-pink-400 hover:bg-pink-500 text-white rounded-full transition"
        >
          Играть ещё 
        </button>

        <RouterLink
          to="/"
          class="px-6 py-2 bg-purple-300 hover:bg-purple-400 text-white rounded-full transition"
        >
          В главное меню
        </RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const score = ref(0)
const timeLeft = ref(15)

const showHeart = ref(false)
const gameStarted = ref(false)
const gameOver = ref(false)
const isPopping = ref(false)

const heartTop = ref(50)
const heartLeft = ref(50)

const popSound = new Audio('/sounds/pop.mp3')

let timer = null

function randomPosition() {
  heartTop.value = Math.random() * 80 + 5
  heartLeft.value = Math.random() * 80 + 5
}

function spawnHeart() {
  showHeart.value = false
  setTimeout(() => {
    randomPosition()
    showHeart.value = true
  }, 150)
}

function catchHeart() {
  isPopping.value = true
  popSound.currentTime = 0
  popSound.play()

  score.value++

  setTimeout(() => {
    isPopping.value = false
    spawnHeart()
  }, 300)
}

function startGame() {
  score.value = 0
  timeLeft.value = 15
  gameOver.value = false
  gameStarted.value = true
  spawnHeart()

  timer = setInterval(() => {
    timeLeft.value--
    if (timeLeft.value <= 0) {
      endGame()
    }
  }, 1000)
}

function endGame() {
  clearInterval(timer)
  showHeart.value = false
  gameStarted.value = false
  gameOver.value = true
}

function restartGame() {
  gameOver.value = false
}
</script>

<style scoped>
/* Появление сердечка */
.heart {
  animation: appear 0.4s ease-out;
}

/* Лопание */
.pop {
  animation: pop 0.3s ease-in forwards;
}

@keyframes appear {
  0% {
    transform: scale(0) rotate(-20deg);
    opacity: 0;
  }
  70% {
    transform: scale(1.3) rotate(10deg);
    opacity: 1;
  }
  100% {
    transform: scale(1) rotate(0);
  }
}

@keyframes pop {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(1.8);
    opacity: 0;
  }
}
</style>
