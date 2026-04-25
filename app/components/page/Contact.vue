<template>
  <section class="contact sect">
    <img class="inner-media" draggable="false" src="/images/footer.png" />
    <IconCircles4 class="circles" />
    <IconCirclesMob3 class="circles-mob" />

    <div class="head">
      <p class="descr cap-small">це твій час для змін</p>
      <h3 class="h3 title">
        Ваш шлях стає зрозумілим в той момент, коли ви робите перший крок до
        усвідомленості свого життя.
      </h3>
    </div>

    <div class="body">
      <div class="time body-standard">
        <p>Mon - Fri</p>
        <p>10:00 - 16:00 (GMT+1)</p>
      </div>

      <div class="email">
        <a
          class="email-link h4 hover-fade"
          href="mailto:astro.paulinearuty@gmail.com"
        >
          astro.paulinearuty@gmail.com
        </a>
        <p class="email-text body-standard">E-mail</p>
      </div>

      <div class="soc-wrap">
        <CommonSocials />
      </div>
    </div>

    <div class="foot">
      <p class="copy body-small">
        © Astro {{ new Date().getFullYear() }} | All rights reserved
      </p>

      <div class="docs">
        <a class="cta-standard" href="/files/terms-of-use.pdf" target="_blank"
          >Terms of use</a
        >
        <a class="cta-standard" href="/files/privacy-policy.pdf" target="_blank"
          >Privacy Policy</a
        >
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.contact {
  position: relative;
  height: 100vh;
  color: var(--c-white);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
  @include mobile {
    padding: 1rem;
  }
}

.head {
  position: relative;
  display: grid;
  grid-template-columns: 19.8125rem 1fr;
  gap: 1.5rem;
  width: 100%;
  @include mobile {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    align-items: center;
  }
}
.title {
  text-indent: 12.25rem;
  padding-right: 5rem;
  @include mobile {
    text-indent: 0;
    padding-right: 0;
    text-align: center;
    font-size: 2rem;
  }
}
.circles {
  position: absolute;
  top: -10rem;
  left: 50%;
  transform: translateX(-50%);
  pointer-events: none;
  @include mobile {
    display: none;
  }
}
.body {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.5rem;
  width: 100%;
  margin-top: auto;
  padding-top: 1rem;
  text-align: center;
}
.email {
  position: relative;
  @include mobile {
    display: flex;
    flex-direction: column;
  }
}
.email-link {
  @include mobile {
    font-size: 1.75rem;
    order: 2;
  }
}
.email-text {
  position: absolute;
  left: 100%;
  bottom: 0.25rem;
  margin-left: 1rem;
  white-space: nowrap;
  @include mobile {
    left: 0;
    position: relative;
    bottom: 0;
    margin-left: 0;
    order: 1;
    margin-bottom: 0.5rem;
  }
}
.foot {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  margin-top: 3.5rem;
  position: relative;
  @include mobile {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
  }
}
.soc-wrap {
  @include mobile {
    display: none;
  }
}
.docs {
  display: flex;
  gap: 1.5rem;
  @include mobile {
    gap: 1rem;
  }
}
.docs a {
  text-decoration-line: underline;
  text-decoration-style: solid;
  text-decoration-skip-ink: auto;
  text-decoration-thickness: 5%;
  text-underline-offset: 12.5%;
  text-underline-position: from-font;
}
@include hover {
  .docs a:hover {
    text-decoration: none;
  }
}
.copy {
  @include mobile {
    order: 2;
  }
}
.circles-mob {
  display: none;
  pointer-events: none;
  @include mobile {
    position: absolute;
    display: block;
    width: 69.3125rem;
    top: -2rem;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
