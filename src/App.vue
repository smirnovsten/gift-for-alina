<template>  
  <router-view />
</template>

<script setup>
import { onMounted } from 'vue'
import { getBgMusic } from './audio/bgMusic'

onMounted(() => {
  const bgMusic = getBgMusic()

  document.addEventListener(
    'click',
    () => {
      bgMusic.play().catch(() => {})
    },
    { once: true } 
  )
})
</script>

<style>
</style>
