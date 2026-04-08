<template>
  <header
    class="header"
    :class="{
      scrolled: headerState.isScrolled,
      open: headerState.isMenuOpen,
    }"
  >
    <div class="nav">
      <a
        v-for="({ name, link }, i) in nav"
        :key="i"
        :href="link"
        class="nav-link body-small hover-fade"
        @click.prevent="scrollTo(link)"
      >
        {{ name }}
      </a>
    </div>

    <div class="logo">
      <button class="hover-fade" @click.prevent="scrollTo('0')">
        <IconLogo />
      </button>
    </div>

    <div class="soc-wrap">
      <CommonSocials />
    </div>
  </header>
</template>

<script setup lang="ts">
const headerState = useState<{
  isMenuOpen: boolean
  isScrolled: boolean
}>("header-state")

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
  gsap.to(window, {
    scrollTo: link,
  })
}

const onScroll = () => {
  headerState.value.isScrolled = window.scrollY > 0
}

onMounted(() => {
  onScroll()
  window.addEventListener("scroll", onScroll, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener("scroll", onScroll)
})
</script>

<style scoped lang="scss">
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: var(--z-header);
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 1.5rem 3.125rem;
  color: var(--c-white);
  transition: all 0.4s ease;
}
.header.scrolled {
  backdrop-filter: blur(10px);
  //background: linear-gradient(rgba(0, 0, 0, 0.25), transparent);
}
.nav {
  display: flex;
  gap: 1rem;
  align-items: center;
  padding-bottom: 0.25rem;
}
.logo {
  display: flex;
  justify-content: center;
}
.soc-wrap {
  display: flex;
  justify-content: flex-end;
}
</style>
