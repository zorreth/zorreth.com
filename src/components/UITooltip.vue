<script setup lang="ts">
defineProps({ tip: String })
</script>

<template>
  <div class="wrapper">
    <div class="trigger">
      <slot />
    </div>

    <div class="tooltip">
      {{ tip }}
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  position: relative;
}

.tooltip {
  position: absolute;
  font-size: 18px;
  font-family: 'Fira Mono', monospace;
  padding: 8px 24px;
  border-radius: 50px;
  right: 50%;
  transform: translate(50%, -8px);

  background-color: rgba(255, 255, 255, 0.1);
  border: 2px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(8px);

  opacity: 0;
  pointer-events: none;
  filter: blur(24px);

  transition:
    opacity 0.4s,
    transform 0.4s,
    filter 0.4s;
}

.wrapper:hover .tooltip {
  opacity: 1;
  transform: translate(50%, 12px);
  filter: blur(0);
}
</style>
