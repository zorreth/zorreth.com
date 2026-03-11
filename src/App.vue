<script setup lang="ts">
import SplashScreen from './components/SplashScreen.vue'
import IconLink from './components/IconLink.vue'
import BackgroundCanvas from './components/BackgroundCanvas.vue'
import UITooltip from './components/UITooltip.vue'

const links = [
  { tip: 'Telegram', href: 'https://t.me/zorreth', icon: 'telegram' },
  {
    tip: 'Discord',
    href: 'https://discord.com/users/1006899291824078858',
    icon: 'discord',
  },
  { tip: 'GitHub', href: 'https://github.com/eliva1e', icon: 'github' },
  {
    tip: 'Spotify',
    href: 'https://open.spotify.com/artist/3KFWoswTJ6GuEf9N1thuz2',
    icon: 'spotify',
  },
]
</script>

<template>
  <SplashScreen />
  <BackgroundCanvas />

  <main class="content">
    <h1 class="logo">zorreth</h1>

    <div class="links">
      <UITooltip v-for="link in links" :key="link.href" :tip="link.tip">
        <IconLink :href="link.href" :icon="link.icon" />
      </UITooltip>
    </div>
  </main>
</template>

<style scoped>
.content {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  font-size: 64px;
  gap: 24px;
}

.logo {
  font-family: 'Trade Winds';
  font-size: 80px;
  margin: 0;
}

.links {
  display: flex;
  gap: 24px;
}
</style>
