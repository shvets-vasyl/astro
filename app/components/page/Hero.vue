<template>
  <section class="hero">
    <img class="inner-media" draggable="false" src="/images/hero.png" />

    <div class="circles">
      <IconCircles />
    </div>

    <div class="content">
      <p class="subtitle cap-small">
        розуміння ваших талантів та життєвого призначення
      </p>

      <div class="title-wrap">
        <div class="title title-large">Astrology Spirituality</div>
        <p class="name body-standard">Polina Arutiunian</p>
      </div>

      <div class="title-wrap2">
        <h1 class="title2 h1">Крок <br />до гармонії</h1>
        <p class="descr body-small">Глибокий аналіз вашого життєвого шляху</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.hero {
  position: relative;
  padding: 11.5rem 3.125rem 9.375rem;
  color: var(--c-white);
  overflow: hidden;
  @include mobile {
    padding: 9.75rem 1rem 3.125rem;
    height: 100vh;
  }
}
.subtitle {
  width: 12.5rem;
  margin-bottom: 9.9375rem;
  @include mobile {
    width: 100%;
    margin-bottom: 0;
  }
}
.content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  @include mobile {
    justify-content: space-between;
  }
}
.title-wrap {
  width: 38.75rem;
  margin-bottom: 14.6875rem;
  @include mobile {
    width: 100%;
    margin-bottom: 0;
  }
}

.name {
  text-align: right;
  margin-right: 5rem;
  margin-top: -0.4rem;
}
.title-wrap2 {
  position: relative;
}
.descr {
  width: 10.0625rem;
  text-align: right;
  position: absolute;
  top: 2.6rem;
  left: -3rem;
}
.circles {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 3rem;
}
</style>
