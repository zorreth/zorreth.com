<script setup lang="ts">
import DiscordIcon from './icons/DiscordIcon.vue'
import GitHubIcon from './icons/GitHubIcon.vue'
import SpotifyIcon from './icons/SpotifyIcon.vue'
import TelegramIcon from './icons/TelegramIcon.vue'

defineProps({ href: String, icon: String })
</script>

<template>
  <a :href="href">
    <button class="btn">
      <DiscordIcon v-if="icon == 'discord'" />
      <TelegramIcon v-if="icon == 'telegram'" />
      <SpotifyIcon v-if="icon == 'spotify'" />
      <GitHubIcon v-if="icon == 'github'" />
    </button>
  </a>
</template>

<style scoped>
.btn {
}
</style>
