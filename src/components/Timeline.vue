<template>
  <div class="relative min-h-screen bg-gradient-to-b from-pink-100 via-rose-50 to-purple-100 p-6">
    <h1 class="text-2xl md:text-3xl font-semibold text-rose-600 text-center mb-10 drop-shadow-sm">
      ✨ Смешные моменты ✨
    </h1>

    <div class="timeline relative max-w-3xl mx-auto">
      <div
        v-for="(item, index) in timelineData"
        :key="index"
        class="timeline-item flex relative"
        :class="[
          index % 2 === 0 ? 'justify-start' : 'justify-end',
          index === 0 ? 'mt-0' : '-mt-24'
        ]"
      >
        <div
          class="w-72 md:w-96 rounded-2xl shadow-xl bg-white/80 backdrop-blur-md p-4 animate-fadeInUp border border-rose-300"
        >
          <p class="text-sm text-rose-500 font-medium mb-3">{{ item.date }}</p>

          <!-- Фото -->
          <div v-if="item.type === 'photo'" class="rounded-2xl overflow-hidden">
            <img
              :src="item.src"
              class="w-full max-h-96 object-contain bg-white cursor-zoom-in"
              @click="openImage(item.src)"
            />
          </div>

          <video
            v-else
            controls
            class="rounded-2xl w-full max-h-96 object-contain"
            @play="bgMusic.pause()"
            @pause="bgMusic.play()"
            @ended="bgMusic.play()"
          >
            <source :src="item.src" type="video/mp4" />
          </video>
        </div>
      </div>
    </div>

    <RouterLink
      to="/"
      class="mt-10 mx-auto block w-max px-6 py-2 bg-rose-300/80 hover:bg-rose-400 text-white rounded-full shadow-md transition transform hover:scale-105 backdrop-blur-md"
    >
      Назад в меню
    </RouterLink>

    <!-- Модалка полноэкранного просмотра -->
    <div
      v-if="selectedImage"
      class="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
      @click="closeImage"
    >
      <img
        :src="selectedImage"
        class="max-w-full max-h-full object-contain rounded-lg"
      />
    </div>
  </div>
</template>

<script setup>
import { getBgMusic } from '../audio/bgMusic'
import { ref, onMounted, onUnmounted } from 'vue'

const bgMusic = getBgMusic()

const selectedImage = ref(null);

function openImage(src) {
  selectedImage.value = src
  bgMusic.play()
}

function closeImage() {
  selectedImage.value = null
  bgMusic.play()
}

onMounted(() => {
  bgMusic.pause()
})

onUnmounted(() => {
  bgMusic.play()
})

const timelineData = [
  { date: "13 февраля 2021", src: "photos/13.02.2021.jpg", type: "photo" },
  { date: "16 декабря 2023", src: "photos/16.12.2023 (2).jpg", type: "photo" },
  { date: "16 декабря 2023", src: "photos/16.12.2023.jpg", type: "photo" },
  { date: "13 января 2024", src: "photos/13.01.2024.jpg", type: "photo" },
  { date: "30 января 2024", src: "videos/30.01.2024.mp4", type: "video" },
  { date: "11 марта 2024", src: "photos/11.03.2024.jpg", type: "photo" },
  { date: "26 марта 2024", src: "photos/26.03.2024.jpg", type: "photo" },
  { date: "28 марта 2024", src: "photos/28.03.2024.jpg", type: "photo" },
  { date: "28 марта 2024", src: "photos/28.03.2024 (2).jpg", type: "photo" },
  { date: "13 апреля 2024", src: "photos/13.04.2024.jpg", type: "photo" },
  { date: "28 апреля 2024", src: "videos/28.04.2024.mp4", type: "video" },
  { date: "12 мая 2024", src: "videos/12.05.2024.mp4", type: "video" },
  { date: "28 мая 2024", src: "videos/28.05.2024.mp4", type: "video" },
  { date: "22 июня 2024", src: "photos/22.06.2024.jpg", type: "photo" },
  { date: "29 июня 2024", src: "photos/29.06.2024.jpg", type: "photo" },
  { date: "7 июля 2024", src: "videos/07.07.2024.mp4", type: "video" },
  { date: "7 июля 2024", src: "videos/07.07.2024 (2).mp4", type: "video" },
  { date: "21 июля 2024", src: "videos/21.07.2024.mp4", type: "video" },
  { date: "27 июля 2024", src: "photos/27.07.2024.jpg", type: "photo" },
  { date: "3 августа 2024", src: "videos/03.08.2024.mp4", type: "video" },
  { date: "17 августа 2024", src: "photos/17.08.2024.jpg", type: "photo" },
  { date: "26 сентября 2024", src: "videos/26.09.2024.mp4", type: "video" },
  { date: "26 сентября 2024", src: "videos/26.09.2024 (2).mp4", type: "video" },
  { date: "3 октября 2024", src: "photos/03.10.2024.jpg", type: "photo" },
  { date: "3 октября 2024", src: "photos/03.10.2024 (2).jpg", type: "photo" },
  { date: "12 октября 2024", src: "photos/12.10.2024.jpg", type: "photo" },
  { date: "2 декабря 2024", src: "photos/02.12.2024.jpg", type: "photo" },
  { date: "9 декабря 2024", src: "photos/09.12.2024.jpg", type: "photo" },
  { date: "2 января 2025", src: "photos/02.01.2025.jpg", type: "photo" },
  { date: "11 января 2025", src: "photos/11.01.2025.jpg", type: "photo" },
  { date: "19 января 2025", src: "videos/19.01.2025.mp4", type: "video" },
  { date: "24 января 2025", src: "videos/24.01.2025.mp4", type: "video" },
  { date: "25 января 2025", src: "videos/25.01.2025.mp4", type: "video" },
  { date: "28 января 2025", src: "photos/28.01.2025.jpg", type: "photo" },
  { date: "1 февраля 2025", src: "videos/01.02.2025.mp4", type: "video" },
  { date: "3 февраля 2025", src: "photos/03.02.2025.jpg", type: "photo" },
  { date: "3 февраля 2025", src: "videos/03.02.2025.mp4", type: "video" },
  { date: "7 февраля 2025", src: "photos/07.02.2025.jpg", type: "photo" },
  { date: "23 февраля 2025", src: "photos/23.02.2025.jpg", type: "photo" },
  { date: "24 февраля 2025", src: "photos/24.02.2025.jpg", type: "photo" },
  { date: "28 февраля 2025", src: "videos/28.02.2025.mp4", type: "video" },
  { date: "28 февраля 2025", src: "videos/28.02.2025 (2).mp4", type: "video" },
  { date: "9 марта 2025", src: "videos/09.03.2025.mp4", type: "video" },
  { date: "9 марта 2025", src: "videos/9.03.2025.mp4", type: "video" },
  { date: "24 апреля 2025", src: "videos/24.04.2025.mp4", type: "video" },
  { date: "26 апреля 2025", src: "photos/26.04.2025.jpg", type: "photo" },
  { date: "19 июня 2025", src: "videos/19.06.2025.mp4", type: "video" },
  { date: "20 июня 2025", src: "photos/20.06.2025.jpg", type: "photo" },
  { date: "22 июня 2025", src: "photos/22.06.2025.jpg", type: "photo" },
  { date: "22 июня 2025", src: "photos/22.06.2025 (2).jpg", type: "photo" },
  { date: "22 июня 2025", src: "photos/22.06.2025 (3).jpg", type: "photo" },
  { date: "22 июня 2025", src: "photos/22.06.2025 (4).jpg", type: "photo" },
  { date: "22 июня 2025", src: "photos/22.06.2025 (5).jpg", type: "photo" },
  { date: "24 июня 2025 (я сделал фото в эту дату)", src: "photos/24.06.2025.jpg", type: "photo" },
  { date: "29 июня 2025", src: "videos/29.06.2025.mp4", type: "video" },
  { date: "29 июня 2025", src: "videos/29.06.2025 (2).mp4", type: "video" },
  { date: "30 июня 2025", src: "videos/30.06.2025 (2).mp4", type: "video" },
  { date: "30 июня 2025", src: "videos/30.06.2025.mp4", type: "video" },
  { date: "5 сентября 2025", src: "photos/05.09.2025.jpg", type: "photo" },
  { date: "9 сентября 2025", src: "videos/09.09.2025.mp4", type: "video" },
  { date: "14 октября 2025", src: "photos/14.10.2025.jpg", type: "photo" },
  { date: "18 октября 2025", src: "videos/18.10.2025.mp4", type: "video" },
  { date: "19 октября 2025", src: "photos/19.10.2025.jpg", type: "photo" },
  { date: "31 октября 2025", src: "photos/31.10.2025.jpg", type: "photo" },
  { date: "2 ноября 2025", src: "videos/2.11.2025.mp4", type: "video" },
  { date: "10 декабря 2025", src: "videos/10.12.2025.mp4", type: "video" },
  { date: "12 декабря 2025", src: "photos/12.12.2025.jpg", type: "photo" },
  { date: "13 декабря 2025", src: "photos/13.12.2025.jpg", type: "photo" }
];
</script>

<style scoped>
@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(30px); }
  100% { opacity: 1; transform: translateY(0); }
}

.animate-fadeInUp {
  animation: fadeInUp 1s ease forwards;
}

.cursor-zoom-in {
  cursor: zoom-in;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 50%;
  top: 0;
  width: 3px;
  height: 100%;
  background: rgba(244, 114, 182, 0.3);
  transform: translateX(-50%);
  border-radius: 10px;
}
</style>
