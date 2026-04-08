<template>
  <div class="wrapper">
    <NuxtPage />
  </div>
</template>
<script setup lang="ts">
useState("header-state", () => {
  return {
    isMenuOpen: false,
    isScrolled: false,
  }
})
</script>
