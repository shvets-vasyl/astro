<template>
  <div class="btn-template cta-standard" :class="{ border }">
    {{ text }}
  </div>
</template>

<script setup lang="ts">
defineProps<{
  text: string
  border?: boolean
}>()
</script>

<style scoped lang="scss">
.btn-template {
  background: var(--c-black);
  border-radius: 3.125rem;
  padding: 0 2rem;
  height: 3.5rem;
  text-align: center;
  color: var(--c-white);
  box-shadow: inset 0 0 0 0.0625rem var(--c-black);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease;
}
.btn-template.border {
  background: none;
  color: var(--c-black);
}
@include hover {
  .btn-template:hover {
    background: transparent;
    color: var(--c-black);
  }
  .btn-template.border:hover {
    background: var(--c-black);
    color: var(--c-white);
  }
}
</style>
