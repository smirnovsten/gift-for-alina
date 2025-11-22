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

        <div class="w-72 md:w-96 rounded-2xl shadow-xl bg-white/80 backdrop-blur-md p-4 animate-fadeInUp border border-rose-300">
          <p class="text-sm text-rose-500 font-medium mb-3">{{ item.date }}</p>

          <img
            v-if="item.type === 'photo'"
            :src="item.src"
            class="rounded-xl w-full max-h-96 object-contain"
          />

          <video
            v-else
            controls
            class="rounded-xl w-full max-h-96 object-contain"
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
  </div>
</template>


//TODO: исправить timelineData


<script setup>
const timelineData = [
  { date: "13 февраля 2021", src: "photos/13.02.2021.jpg", type: "photo" },
  { date: "16 декабря 2023", src: "photos/16.12.2023 (2).jpg", type: "photo" },
  { date: "16 декабря 2023", src: "photos/16.12.2023.jpg", type: "photo" },
  { date: "13 января 2024", src: "photos/13.01.2024.jpg", type: "photo" },
  { date: "30 января 2024", src: "videos/30.01.2024.mp4", type: "video" },
  { date: "11 марта 2024", src: "photos/11.03.2024.jpg", type: "photo" },
  { date: "26 марта 2024", src: "photos/26.03.2024.jpg", type: "photo" },
  { date: "28 марта 2024", src: "photos/28.03.2024 (2).jpg", type: "photo" },
  { date: "28 марта 2024", src: "photos/28.03.2024.jpg", type: "photo" },
  { date: "13 апреля 2024", src: "photos/13.04.2024.jpg", type: "photo" },
  { date: "28 апреля 2024", src: "videos/28.04.2024.mp4", type: "video" },
  { date: "22 июня 2024", src: "photos/22.06.2024.jpg", type: "photo" },
  { date: "27 апреля 2024", src: "photos/27.04.2024.jpg", type: "photo" },
  { date: "30 апреля 2024", src: "photos/30.04.2024.jpg", type: "photo" },
  { date: "7 мая 2024", src: "photos/07.05.2024.jpg", type: "photo" },
  { date: "17 мая 2024", src: "photos/17.05.2024.jpg", type: "photo" },
  { date: "19 мая 2024", src: "photos/19.05.2024.jpg", type: "photo" },
  { date: "20 мая 2024", src: "photos/20.05.2024.jpg", type: "photo" },
  { date: "28 мая 2024", src: "photos/28.05.2024.jpg", type: "photo" },
  { date: "1 июня 2024", src: "videos/01.06.2024.mp4", type: "video" },
  { date: "2 июня 2024", src: "photos/02.06.2024 (2).jpg", type: "photo" },
  { date: "2 июня 2024", src: "photos/02.06.2024.jpg", type: "photo" },
  { date: "3 июня 2024", src: "photos/03.06.2024 (2).jpg", type: "photo" },
  { date: "3 июня 2024", src: "photos/03.06.2024.jpg", type: "photo" },
  { date: "7 июня 2024", src: "videos/07.06.2024.mp4", type: "video" },
  { date: "8 июня 2024", src: "photos/08.06.2024 (2).jpg", type: "photo" },
  { date: "8 июня 2024", src: "photos/08.06.2024.jpg", type: "photo" },
  { date: "9 июня 2024", src: "videos/09.06.2024.mp4", type: "video" },
  { date: "12 июня 2024", src: "photos/12.06.2024 (2).jpg", type: "photo" },
  { date: "12 июня 2024", src: "photos/12.06.2024.jpg", type: "photo" },
  { date: "13 июня 2024", src: "photos/13.06.2024.jpg", type: "photo" },
  { date: "16 июня 2024", src: "photos/16.06.2024 (2).jpg", type: "photo" },
  { date: "16 июня 2024", src: "photos/16.06.2024.jpg", type: "photo" },
  { date: "22 июня 2024", src: "videos/22.06.2024.mp4", type: "video" },
  { date: "24 июня 2024", src: "photos/24.06.2024.jpg", type: "photo" },
  { date: "30 июня 2024", src: "photos/30.06.2024.jpg", type: "photo" },
  { date: "1 июля 2024", src: "photos/01.07.2024.jpg", type: "photo" },
  { date: "4 июля 2024", src: "photos/04.07.2024.jpg", type: "photo" },
  { date: "6 июля 2024", src: "videos/06.07.2024.mp4", type: "video" },
  { date: "7 июля 2024", src: "photos/07.07.2024.jpg", type: "photo" },
  { date: "10 июля 2024", src: "photos/10.07.2024.jpg", type: "photo" },
  { date: "11 июля 2024", src: "photos/11.07.2024.jpg", type: "photo" },
  { date: "14 июля 2024", src: "photos/14.07.2024.jpg", type: "photo" },
  { date: "17 июля 2024", src: "photos/17.07.2024.jpg", type: "photo" },
  { date: "20 июля 2024", src: "photos/20.07.2024.jpg", type: "photo" },
  { date: "21 июля 2024", src: "videos/21.07.2024.mp4", type: "video" },
  { date: "5 августа 2024", src: "photos/05.08.2024.jpg", type: "photo" },
  { date: "7 августа 2024", src: "photos/07.08.2024.jpg", type: "photo" },
  { date: "16 августа 2024", src: "photos/16.08.2024.jpg", type: "photo" },
  { date: "18 августа 2024", src: "photos/18.08.2024.jpg", type: "photo" },
  { date: "19 августа 2024", src: "videos/19.08.2024.mp4", type: "video" },
  { date: "24 августа 2024", src: "photos/24.08.2024.jpg", type: "photo" },
  { date: "1 сентября 2024", src: "videos/01.09.2024.mp4", type: "video" },
  { date: "22 сентября 2024", src: "photos/22.09.2024.jpg", type: "photo" },
  { date: "26 сентября 2024", src: "videos/26.09.2024 (2).mp4", type: "video" },
  { date: "26 сентября 2024", src: "videos/26.09.2024.mp4", type: "video" }
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

/* Линия по центру (опция) */
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
