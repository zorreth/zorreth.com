<script setup lang="ts">
import { ref } from 'vue'
import SplashScreen from './components/SplashScreen.vue'
import IconLink from './components/IconLink.vue'
import bg from './assets/img/bg-1.jpg'

const links = [{ href: 'https://discord.com/users/1006899291824078858', icon: 'discord' }]

const showSplash = ref(true)

setTimeout(() => {
  showSplash.value = false
}, 2000)
</script>

<template>
  <SplashScreen :show-splash="showSplash" />

  <img :src="bg" alt="Background" class="bg" />

  <main class="content">
    <h1 class="logo">zorreth</h1>

    <div>
      <IconLink v-for="link in links" :key="link.href" :href="link.href" :icon="link.icon" />
    </div>
  </main>
</template>

<style scoped>
.bg {
  position: fixed;
  object-fit: cover;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -10;
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 64px;
}

.logo {
  font-family: 'Trade Winds';
}
</style>
