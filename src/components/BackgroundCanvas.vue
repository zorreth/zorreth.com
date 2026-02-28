<script setup lang="ts">
import { onMounted, ref } from 'vue'

const imageModules = import.meta.glob('@/assets/img/bg/*', { eager: true, import: 'default' })
const images = Object.values(imageModules) as string[]

const canvas = ref<HTMLCanvasElement | null>(null)
const isReplacing = ref(false)
const backgroundIndex = ref(0)

onMounted(() => {
  if (!canvas.value) return

  let width = window.innerWidth
  let height = window.innerHeight

  const updateCanvasSize = () => {
    if (!canvas.value) return

    width = window.innerWidth
    height = window.innerHeight

    canvas.value.width = width
    canvas.value.height = height
  }

  window.onresize = updateCanvasSize
  updateCanvasSize()

  const ctx = canvas.value.getContext('2d', { willReadFrequently: true })

  const updateCanvasImage = (index: number) => {
    if (!ctx) return

    const image = new Image()
    image.src = images[index]!
    image.onload = () => ctx.drawImage(image, 0, 0, width, height)
  }

  updateCanvasImage(0)

  let mouseX = 0
  let mouseY = 0
  let currentX = 0
  let currentY = 0

  const brushMin = 140
  const brushMax = 180
  let t = 0

  window.onmousemove = ({ x, y }) => {
    mouseX = x
    mouseY = y
  }

  const isCleared = () => {
    if (!ctx) return

    const pixels = ctx.getImageData(0, 0, width, height).data
    let transparentPixels = 0

    for (let i = 3; i < pixels.length; i += 4) {
      if (pixels[i] === 0) transparentPixels++
    }

    const percentCleared = transparentPixels / (pixels.length / 4)
    return percentCleared >= 0.6
  }

  const animate = () => {
    if (!ctx) return

    requestAnimationFrame(animate)

    currentX += (mouseX - currentX) * 0.2
    currentY += (mouseY - currentY) * 0.2

    t += 0.05
    const brushSize = brushMin + (Math.sin(t) * 0.5 + 0.5) * (brushMax - brushMin)

    const gradient = ctx.createRadialGradient(currentX, currentY, 0, currentX, currentY, brushSize)
    gradient.addColorStop(0, 'rgba(0,0,0,1)')
    gradient.addColorStop(1, 'rgba(0,0,0,0)')

    ctx.beginPath()
    ctx.arc(currentX, currentY, brushSize, 0, Math.PI * 2)
    ctx.fillStyle = gradient

    ctx.globalCompositeOperation = 'destination-out'
    ctx.fill()
    ctx.globalCompositeOperation = 'source-over'

    if (isCleared() && !isReplacing.value) {
      isReplacing.value = true

      setTimeout(() => {
        updateCanvasImage(backgroundIndex.value)
        backgroundIndex.value = (backgroundIndex.value + 1) % images.length
        isReplacing.value = false
      }, 600)
    }
  }

  animate()
})
</script>

<template>
  <canvas class="canvas" :class="{ replacing: isReplacing }" ref="canvas" />
  <img
    class="bg"
    :class="{ replacing: isReplacing }"
    :src="images[backgroundIndex]"
    alt="Background"
  />
</template>

<style scoped>
.canvas,
.bg {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
}

.canvas.replacing {
  animation: 1.2s hide;
}

@keyframes hide {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}

.canvas {
  z-index: -10;
}

.bg {
  z-index: -20;
}

@media screen and (max-width: 700px) {
  .bg {
    object-fit: cover;
  }
}
</style>
