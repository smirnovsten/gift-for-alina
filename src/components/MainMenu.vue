<template>
  <div class="relative min-h-screen overflow-hidden bg-gradient-to-b from-pink-100 via-rose-50 to-purple-100 flex flex-col items-center justify-center text-center">
    <!-- Фоновые сердечки и облака -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div v-for="n in 6" :key="'heart'+n" class="absolute animate-float opacity-30 text-pink-400">
        ❤️
      </div>
      <div v-for="n in 4" :key="'cloud'+n" class="absolute animate-cloud opacity-40 text-6xl text-white">
        ☁️
      </div>
    </div>

    <!-- Заголовок -->
    <h1 class="text-2xl md:text-3xl font-semibold text-rose-600 mb-10 z-10 drop-shadow-sm">
      Дорогая Алина, выбери, с чего начнёшь 💕
    </h1>

    <!-- Кнопки -->
    <div class="flex flex-col gap-5 z-10">
      <RouterLink
        to="/card"
        class="px-8 py-3 bg-rose-300/80 hover:bg-rose-400 text-white rounded-full shadow-lg transition transform hover:scale-105 backdrop-blur-md"
      >
        💌 Тёплые слова
      </RouterLink>

      <RouterLink
        to="/timeline"
        class="px-8 py-3 bg-pink-300/80 hover:bg-pink-400 text-white rounded-full shadow-lg transition transform hover:scale-105 backdrop-blur-md"
      >
        💭 Смешные моменты
      </RouterLink>

      <RouterLink
        to="/game"
        class="px-8 py-3 bg-purple-300/80 hover:bg-purple-400 text-white rounded-full shadow-lg transition transform hover:scale-105 backdrop-blur-md"
      >
        💕 Играй с сердцем
      </RouterLink>
    </div>

    <p class="absolute bottom-4 text-xs text-rose-500 opacity-80 z-10">
      С любовью, твой Стен 💖
    </p>

    <!-- 🎵 Музыка (добавь свой файл позже)
    <audio autoplay loop>
      <source src="/music/your-song.mp3" type="audio/mpeg" />
    </audio>
    -->
  </div>
</template>

<script setup>
</script>

<style scoped>
@keyframes float {
  0% {
    transform: translateY(0) translateX(0);
  }
  50% {
    transform: translateY(-20px) translateX(10px);
  }
  100% {
    transform: translateY(0) translateX(0);
  }
}

@keyframes cloudMove {
  0% {
    transform: translateX(-10%);
  }
  100% {
    transform: translateX(110%);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}

.animate-cloud {
  animation: cloudMove 60s linear infinite;
}

/* Разные позиции для сердечек и облаков */
.animate-float:nth-child(1) { top: 10%; left: 20%; }
.animate-float:nth-child(2) { top: 30%; right: 25%; }
.animate-float:nth-child(3) { top: 60%; left: 10%; }
.animate-float:nth-child(4) { top: 70%; right: 15%; }
.animate-float:nth-child(5) { top: 40%; left: 50%; }
.animate-float:nth-child(6) { bottom: 15%; right: 40%; }

.animate-cloud:nth-child(1) { top: 20%; left: -10%; animation-delay: 0s; }
.animate-cloud:nth-child(2) { top: 40%; left: -20%; animation-delay: 10s; }
.animate-cloud:nth-child(3) { top: 60%; left: -15%; animation-delay: 20s; }
.animate-cloud:nth-child(4) { top: 80%; left: -25%; animation-delay: 30s; }
</style>
