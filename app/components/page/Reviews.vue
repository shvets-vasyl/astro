<template>
  <section class="reviews sect">
    <div class="head">
      <h2 class="h2 title">Що про мене кажуть</h2>

      <div class="navigation">
        <button class="nav-prev hover-fade">
          <IconArrow />
        </button>
        <button class="nav-next hover-fade">
          <IconArrow />
        </button>
      </div>
    </div>

    <div class="body">
      <div class="reviews-swiper swiper">
        <div class="swiper-wrapper">
          <div
            v-for="({ name, text }, i) in items"
            :key="i"
            class="swiper-slide"
          >
            <div class="slide-text sub-small">{{ text }}</div>
            <div class="slide-name cap-small">{{ name }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Navigation } from "swiper/modules"
import Swiper from "swiper"

onMounted(() => {
  initSwiper()
})

const initSwiper = () => {
  new Swiper(".reviews-swiper.swiper", {
    speed: 500,
    modules: [Navigation],
    grabCursor: true,
    breakpoints: {
      0: {
        slidesPerView: 1.25,
      },
      1024: {
        slidesPerView: 3,
      },
    },
    navigation: {
      nextEl: ".reviews .navigation .nav-next",
      prevEl: ".reviews .navigation .nav-prev",
    },
  })
}

const items = [
  {
    text: "Дуже вдячна за змістовну консультацію та чіткі відповіді на мої запитання. Професійний підхід і приємна атмосфера допомогли мені нарешті розставити пріоритети в житті.",
    name: "Ірина",
  },
  {
    text: "Звернулася до фахівця у складний період вибору, і це було найкраще рішення. Мене вразило, наскільки точно було описано мій характер та поточні життєві обставини без зайвої води. Замість загальних фраз я отримала конкретний план дій та розуміння своїх сильних сторін.",
    name: "настя",
  },
  {
    text: "Довго шукала спеціаліста, якому зможу повністю довіритися, і нарешті знайшла. Консультація пройшла дуже легко, хоча ми розбирали досить глибокі та важливі для мене теми. Особливо цінним став індивідуальний підхід — я відчула щиру зацікавленість у моєму результаті, а не просто сухий виклад фактів.  Величезне дякую за вашу працю, емпатію та неймовірну точність у деталях!",
    name: "оля",
  },
  {
    text: "Дуже вдячна за змістовну консультацію та чіткі відповіді на мої запитання. Професійний підхід і приємна атмосфера допомогли мені нарешті розставити пріоритети в житті.",
    name: "Ірина",
  },
  {
    text: "Звернулася до фахівця у складний період вибору, і це було найкраще рішення. Мене вразило, наскільки точно було описано мій характер та поточні життєві обставини без зайвої води. Замість загальних фраз я отримала конкретний план дій та розуміння своїх сильних сторін.",
    name: "настя",
  },
  {
    text: "Довго шукала спеціаліста, якому зможу повністю довіритися, і нарешті знайшла. Консультація пройшла дуже легко, хоча ми розбирали досить глибокі та важливі для мене теми. Особливо цінним став індивідуальний підхід — я відчула щиру зацікавленість у моєму результаті, а не просто сухий виклад фактів.  Величезне дякую за вашу працю, емпатію та неймовірну точність у деталях!",
    name: "оля",
  },
]
</script>

<style scoped lang="scss">
.head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 3.5rem;
}
.reviews-swiper {
  width: calc(100% + 6.25rem);
  margin-left: -3.125rem;
  margin-right: -3.125rem;
}
.navigation {
  display: flex;
  align-items: center;
  gap: 1rem;
}
.nav-next {
  transform: rotate(180deg);
}
.swiper-slide {
  padding: 2.5rem;
  padding-left: 3.125rem;
  display: flex;
  flex-direction: column;
  height: auto;
  justify-content: space-between;
}
.swiper-slide:not(:last-child) {
  border-right: 0.0625rem solid #cdcdcd;
}
.slide-name {
  padding-top: 6rem;
}
.nav-prev.swiper-button-disabled,
.nav-next.swiper-button-disabled {
  opacity: 0.2;
}
</style>
