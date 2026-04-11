<template>
  <menu class="menu">
    <div class="bg" />

    <div class="content">
      <IconCircles5 class="circles" />
      <div class="nav">
        <h4
          v-for="({ name, link }, i) in nav"
          :key="i"
          :href="link"
          class="nav-link"
          @click="scrollTo(link)"
        >
          <div class="h4">{{ name }}</div>
          <div class="link-count sub-extra-small">{{ i + 1 }}</div>
        </h4>
      </div>

      <div class="soc-wrap">
        <CommonSocials black />
      </div>
    </div>
  </menu>
</template>

<script setup lang="ts">
const nav = [
  {
    name: "Послуги",
    link: "section.services",
  },
  {
    name: "Про мене",
    link: "section.about",
  },
  {
    name: "Продукція",
    link: "section.products",
  },
  {
    name: "Відгуки",
    link: "section.reviews",
  },
]

const scrollTo = (link: string) => {
  const header = document.querySelector("header.header") as HTMLElement | null
  const headerHeight = header?.offsetHeight || 0

  if (link === "0") {
    gsap.to(window, {
      scrollTo: 0,
    })
    return
  }

  const target = document.querySelector(link) as HTMLElement | null
  if (!target) return

  gsap.to(window, {
    scrollTo: {
      y: target,
      offsetY: headerHeight,
    },
  })
}
</script>

<style scoped lang="scss">
.menu {
  position: fixed;
  inset: 0;
  z-index: var(--z-menu);
  display: flex;
  align-items: center;
  justify-content: center;
  display: none;
}
.bg {
  position: absolute;
  inset: 0;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(25px);
}
.content {
  width: calc(100% - 1rem);
  height: calc(100% - 1rem);
  border-radius: 0.5rem;
  background: #eeece8;
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 2.5rem 1rem 1rem;
  align-items: center;
  text-align: center;
}
.nav {
  margin: auto 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
}
.nav-link {
  position: relative;
}
.link-count {
  position: absolute;
  top: 0;
  left: 100%;
  margin-left: 0.25rem;
}
.circles {
  position: absolute;
  left: 0;
  top: 0;
}
</style>
