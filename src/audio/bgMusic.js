let bgMusic = null

export function getBgMusic() {
  if (!bgMusic) {
    bgMusic = new Audio('/sounds/bg.mp3')
    bgMusic.loop = true
    bgMusic.volume = 0.1
  }
  return bgMusic
}
