<script setup lang="ts">
import { ref } from 'vue'

defineProps({ showSplash: Boolean })

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
  <div :class="`splash ${!showSplash && 'hide'}`" :style="{ fontFamily: fonts[fontIndex] }">
    zorreth
  </div>
</template>

<style scoped>
.splash {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 64px;
  font-weight: 700;
  width: 100%;
  height: 100%;
  background-color: var(--color-background);
}

.hide {
  animation: 1s linear forwards hide;
}

@keyframes hide {
  100% {
    display: none;
    background-color: transparent;
  }
}
</style>
