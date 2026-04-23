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

    <button class="burger" @click="toggleMenu">
      <IconBurger />
    </button>
  </header>
</template>

<script setup lang="ts">
const headerState = useState<{
  isMenuOpen: boolean
  isScrolled: boolean
}>("header-state")

const toggleMenu = () => {
  if (headerState.value.isMenuOpen) {
    headerState.value.isMenuOpen = false
    useLockScroll(false)

    const tl = gsap.timeline()
    tl.to("menu.menu .content", {
      scale: 0.95,
      opacity: 0,
    })
    tl.set("menu.menu", {
      display: "none",
    })
  } else {
    headerState.value.isMenuOpen = true
    useLockScroll(true)

    const tl = gsap.timeline()
    tl.set("menu.menu", {
      display: "flex",
    })
    tl.fromTo(
      "menu.menu .content",
      {
        scale: 0.95,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
      }
    )
  }
}

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
  @include mobile {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.header .logo:deep(path),
.header .burger:deep(path),
.header .burger:deep(rect) {
  transition: all 0.4s ease;
}

.header.scrolled {
  background: var(--c-black);
}
.header.scrolled.open {
  background: transparent;
}
.nav {
  display: flex;
  gap: 1rem;
  align-items: center;
  padding-bottom: 0.25rem;
  @include mobile {
    display: none;
  }
}
.logo {
  display: flex;
  justify-content: center;
}
.soc-wrap {
  display: flex;
  justify-content: flex-end;
  @include mobile {
    display: none;
  }
}
.burger {
  display: none;
  @include mobile {
    display: inline-flex;
  }
}
.header .burger:deep(path) {
  transform-origin: center center;
}
// open
.header.open {
  padding: 1rem 1rem 1.5rem 1.5rem;
}
.header.open .logo:deep(path) {
  fill: var(--c-black);
}
.header.open .burger:deep(path) {
  stroke: var(--c-black);
}
.header.open .burger:deep(rect) {
  opacity: 0;
}
.header.open .burger:deep(.path1) {
  transform: rotate(45deg) translateY(4px);
}
.header.open .burger:deep(.path2) {
  transform: rotate(-45deg) translateY(-4px);
}
</style>
