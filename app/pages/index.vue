<template>
  <main class="main-page">
    <CommonHeader />
    <PageHero />
    <PageServices />
  </main>
</template>

<script setup lang="ts">
onMounted(() => {
  gsap.to("main.main-page", {
    opacity: 1,
  })
})
</script>

<style scoped lang="scss">
.main-page {
  opacity: 0;
}
</style>
