<template>
  <section class="info sect">
    <img class="inner-media" draggable="false" src="/images/img1.png" />

    <IconCircles2 class="circles" />

    <div class="content">
      <h2 class="title h2">Усвідомлення ваших справжніх можливостей</h2>
      <p class="descr body-small">
        Ми розглянемо основи астрології, поради щодо стосунків, кармічну долю та
        отримаєте відповіді на ваші питання.
      </p>
      <p class="descr2 cap-medium">
        Понад 500+ проведених консультацій та сотні клієнтів, які нарешті
        відшукали свій шлях.
      </p>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.info {
  position: relative;
  height: 100vh;
  overflow: hidden;
}
.circles {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 0;
}
.content {
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  text-align: center;
  color: var(--c-white);
  align-items: center;
}
.title {
  margin-bottom: 1.5rem;
  width: 70rem;
}
.descr {
  width: 26.875rem;
}
.descr2 {
  width: 26.875rem;
  margin-top: auto;
}
</style>
