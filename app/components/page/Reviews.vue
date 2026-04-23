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
            <div class="slide-text sub-small" v-html="text" />
            <!-- <div class="slide-name cap-small">{{ name }}</div> -->
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
        slidesPerView: 1.15,
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
    text: `Доброго дня, Поліно. Нарешті прочитала розбір. Дуже багато інформації, дуже змістовно написано, хотілося зупинятися на кожному аспекті, вдумуватися та аналізувати) І не раз, звісно, я ще буду повертатися до прочитання🙂 <br>
Інформації дійсно достатньо, багато що відгукується в душі.<br>
Дякую вам велике за вашу працю, я дуже задоволена 👍👍👍`,
    name: "",
  },
  {
    text: "Зрозуміла, дуже дякую! Дуже задоволена цим соляром, ви велика молодець! Вже бачу, що виділені вами періоди співпадають з майбутнім. Обов’язково ще буду звертатись! 🤍",
    name: "",
  },
  {
    text: "Дуже вдячна за змістовну консультацію та чіткі відповіді на мої запитання. Професійний підхід і приємна атмосфера допомогли мені нарешті розставити пріоритети в житті.",
    name: "",
  },
  {
    text: "Добрий день, дуже дякую за таку класну роботу. Читаєш і розумієш що це про тебе. Дуже багато спільного є, і розуміння що зараз займаюсь тим що мені подобається і тим що ви там прописали. Слідкую за вами давно в тік тоці, дуже подобаються ваші відео. Бажаю далі розвиватись 🤗❤️",
    name: "",
  },
  {
    text: `Я дуже вдячна долі, що в потрібний момент побачила ваше відео в тік ток, ви мені відгукнулися як експерт і тепер я проходжу ваш курс і вперше в житті замовила соляр<br>
Дякую за вашу роботу ❤️`,
    name: "",
  },
  {
    text: `Зрозуміла, щиро вам дякую 🙏<br>
Раджу вас усім) бо мені здається ви найкраща у своїй справі)) звертаюсь і буду звертатись тільки до вас ✨`,
    name: "",
  },
  {
    text: `Вже почало програватись, цей рік для мене наповнений навчанням і зміною кола друзів 😍<br>
Ви дуже круто все пояснили, я залишилась задоволена 🫶<br>
Це як інструкція до цього року і як його прожити краще, дякую вам велике ❤️`,
    name: "",
  },
]
</script>

<style scoped lang="scss">
.reviews {
  @include mobile {
    overflow: hidden;
  }
}
.head {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 3.5rem;
  @include mobile {
    margin-bottom: 2.5rem;
    width: 100%;
  }
}
.title {
  @include mobile {
    font-size: 2.8rem;
  }
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
