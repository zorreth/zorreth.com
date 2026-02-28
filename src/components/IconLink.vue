<script setup lang="ts">
import DiscordIcon from './icons/DiscordIcon.vue'
import GitHubIcon from './icons/GitHubIcon.vue'
import SpotifyIcon from './icons/SpotifyIcon.vue'
import TelegramIcon from './icons/TelegramIcon.vue'

defineProps({ href: String, icon: String })
</script>

<template>
  <a :href="href" class="btn">
    <DiscordIcon v-if="icon == 'discord'" />
    <TelegramIcon v-if="icon == 'telegram'" />
    <SpotifyIcon v-if="icon == 'spotify'" />
    <GitHubIcon v-if="icon == 'github'" />
  </a>
</template>

<style scoped>
.btn {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--color-foreground);
  border-radius: 50px;
  width: 48px;
  height: 48px;
  transition:
    transform 0.2s,
    box-shadow 0.2s;

  background-color: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow:
    inset 0 1px 0 rgba(255, 255, 255, 0.3),
    0 8px 32px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(8px);
}

.btn:hover {
  transform: scale(1.1);
  box-shadow:
    inset 0 2px 0 rgba(255, 255, 255, 0.3),
    0 8px 32px rgba(0, 0, 0, 0.2);
}
</style>
