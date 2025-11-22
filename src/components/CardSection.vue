<template>
  <div class="relative min-h-screen bg-gradient-to-b from-pink-100 via-rose-50 to-purple-100 flex flex-col items-center justify-center overflow-hidden text-center p-6">
    <div v-for="n in 20" :key="n" class="sparkle absolute bg-white rounded-full opacity-60"></div>

    <h1 class="text-2xl md:text-3xl font-semibold text-rose-600 mb-10 drop-shadow-sm z-10">
      💌 Мои открытки для тебя
    </h1>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 z-10">
      <div
        class="card w-72 h-96 perspective"
        @click="toggleFlip(0)"
      >
        <div
          class="card-inner w-full h-full transition-transform duration-700"
          :class="{ 'rotate-y-180': flipped[0] }"
        >
          <div
            class="card-front absolute w-full h-full rounded-2xl shadow-lg overflow-hidden bg-white/70 backdrop-blur-md flex items-center justify-center border border-rose-200"
          >
            <img src="/lovely_girl_with_mercy.jpg" alt="Фото 1" class="object-cover w-full h-full rounded-2xl" />
          </div>

          <div
            class="card-back absolute w-full h-full rounded-2xl shadow-lg bg-rose-100/80 backdrop-blur-md border border-rose-200 flex flex-col items-center justify-center p-6 text-rose-700 rotate-y-180"
          >
            <p class="text-lg italic mb-4">Ты делаешь мой мир ярче, мой любимый миниончик 🌸</p>
            <p class="text-sm opacity-80">- Твой Грю</p>
          </div>
        </div>
      </div>

      <div
        class="card w-72 h-96 perspective"
        @click="toggleFlip(1)"
      >
        <div
          class="card-inner w-full h-full transition-transform duration-700"
          :class="{ 'rotate-y-180': flipped[1] }"
        >
          <div
            class="card-front absolute w-full h-full rounded-2xl shadow-lg overflow-hidden bg-white/70 backdrop-blur-md flex items-center justify-center border border-rose-200"
          >
            <img src="/lovely_girl_with_gerda.jpg" alt="Фото 2" class="object-cover w-full h-full rounded-2xl" />
          </div>

          <div
            class="card-back absolute w-full h-full rounded-2xl shadow-lg bg-rose-100/80 backdrop-blur-md border border-rose-200 flex flex-col items-center justify-center p-6 text-rose-700 rotate-y-180"
          >
            <p class="text-lg italic mb-4">С днём рождения, моя любимая турбо!
                                            Пусть в твоём сердце всегда живёт свет,
                                            а рядом будут только те, кто делает тебя по-настоящему счастливой.
                                            Ты заслуживаешь самого доброго в этом мире 💫</p>
            <p class="text-sm opacity-80">- Твой кчау</p>
          </div>
        </div>
      </div>

      <div
        class="card w-72 h-96 perspective"
        @click="toggleFlip(2)"
      >
        <div
          class="card-inner w-full h-full transition-transform duration-700"
          :class="{ 'rotate-y-180': flipped[2] }"
        >
          <div
            class="card-front absolute w-full h-full rounded-2xl shadow-lg overflow-hidden bg-white/70 backdrop-blur-md flex items-center justify-center border border-rose-200"
          >
            <img src="/lovely_girl_with_tigra.jpg" alt="Фото 3" class="object-cover w-full h-full rounded-2xl" />
          </div>

          <div
            class="card-back absolute w-full h-full rounded-2xl shadow-lg bg-rose-100/80 backdrop-blur-md border border-rose-200 flex flex-col items-center justify-center p-6 text-rose-700 rotate-y-180"
          >
            <p class="text-lg italic mb-4">Я очень рад тому, что ты у меня есть. 
                                            Спасибо, что делаешь мир вокруг меня красивее просто тем, что в нём есть ты 💕</p>
            <p class="text-sm opacity-80">- Твой мистер фиш</p>
          </div>
        </div>
      </div>
    </div>

    <RouterLink
      to="/"
      class="mt-10 px-6 py-2 bg-rose-300/80 hover:bg-rose-400 text-white rounded-full shadow-md transition transform hover:scale-105 backdrop-blur-md z-10"
    >
      Назад в меню
    </RouterLink>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const flipped = ref([false, false, false])

function toggleFlip(index) {
  flipped.value[index] = !flipped.value[index]
}

onMounted(() => {
  const sparkles = document.querySelectorAll('.sparkle')
  sparkles.forEach((s) => {
    const size = Math.random() * 5 + 2
    const left = Math.random() * 100
    const top = Math.random() * 100
    const duration = Math.random() * 10 + 10

    s.style.width = `${size}px`
    s.style.height = `${size}px`
    s.style.left = `${left}%`
    s.style.top = `${top}%`
    s.style.animation = `floatSparkle ${duration}s ease-in-out infinite`
  })
})
</script>

<style scoped>
.perspective {
  perspective: 1000px;
}

.card-inner {
  transform-style: preserve-3d;
}

.rotate-y-180 {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  backface-visibility: hidden;
}

@keyframes floatSparkle {
  0% {
    transform: translateY(0) translateX(0);
    opacity: 0.8;
  }
  50% {
    transform: translateY(-20px) translateX(10px);
    opacity: 1;
  }
  100% {
    transform: translateY(0) translateX(0);
    opacity: 0.8;
  }
}

.card {
  animation: fadeInUp 1.5s ease both;
}

@keyframes fadeInUp {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
