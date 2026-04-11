<template>
  <div class="soc" :class="{ black }">
    <a href="#" target="_blank" class="soc-item hover-fade">
      <IconTelegram />
    </a>
    <a href="#" target="_blank" class="soc-item hover-fade">
      <IconInstagram />
    </a>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  black?: boolean
}>()
</script>

<style scoped lang="scss">
.soc {
  display: flex;
  gap: 1.5rem;
  align-items: center;
}
.soc.black:deep(svg path) {
  fill: var(--c-black);
}
</style>
