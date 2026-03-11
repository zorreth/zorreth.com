<script setup lang="ts">
import { ref } from 'vue'

defineProps({ hide: Boolean })

const fonts = [
  'Trade Winds',
  'Abril Fatface',
  'Merriweather Variable',
  'Fira Mono',
  'Kalam',
  'Poppins',
]

const fontIndex = ref(0)

setInterval(() => {
  fontIndex.value = (fontIndex.value + 1) % fonts.length
}, 200)
</script>

<template>
  <div class="splash" :class="{ hide: hide }" :style="{ fontFamily: fonts[fontIndex] }">
    zorreth
  </div>
</template>

<style scoped>
.splash {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 64px;
  font-weight: 700;
  width: 100%;
  height: 100%;
  background-color: var(--color-background);
  animation: 2s 2s forwards hide;
}

@keyframes hide {
  100% {
    visibility: hidden;
    filter: blur(64px);
    transform: scale(1.5);
    opacity: 0;
  }
}
</style>
