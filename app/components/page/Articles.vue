<template>
  <section class="articles sect">
    <p class="title">Публікації</p>

    <div class="items">
      <a
        v-for="({ text, date, photo, link }, i) in items"
        :key="i"
        class="item"
        :href="link"
        target="_blank"
      >
        <div class="col">
          <div class="item-photo">
            <img class="inner-media" draggable="false" :src="photo" />
          </div>
        </div>
        <div class="col">
          <h5 class="item-name h5">{{ text }}</h5>
          <p class="item-date sub-extra-small">{{ date }}</p>
        </div>
        <div class="col">
          <p class="item-more body-standard">Читати статтю</p>
        </div>
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
const items = [
  {
    text: "Ваша улюблена закуска, згідно з вашим знаком зодіаку",
    date: "25 Липня, 2025",
    photo: "/images/img2.png",
    link: "#",
  },
  {
    text: "Як індивідуальні ритми впливають на прийняття ключових рішень.",
    date: "11 Червня, 2025",
    photo: "/images/img2.png",
    link: "#",
  },
  {
    text: "Чому ми обираємо певних людей та як будувати гармонійні зв'язки.",
    date: "25 Липня, 2025",
    photo: "/images/img2.png",
    link: "#",
  },
  {
    text: "Інструменти для тих, хто прагне керувати своєю долею самостійно.",
    date: "25 Липня, 2025",
    photo: "/images/img2.png",
    link: "#",
  },
  {
    text: "5 знаків зодіака з якими краще не жартувати",
    date: "25 Липня, 2025",
    photo: "/images/img2.png",
    link: "#",
  },
]
</script>

<style scoped lang="scss">
.title {
  text-align: center;
  color: transparent;
  -webkit-text-stroke-width: 0.125rem;
  -webkit-text-stroke-color: #cdcdcd;
  font-family: var(--f-can-light);
  font-size: 13.75rem;
  line-height: 100%;
  mask-image: linear-gradient(to top, transparent 0%, #000 80%, #000 100%);
}
.items {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.item {
  padding: 1rem 0;
  display: grid;
  grid-template-columns: 9.375rem 37.125rem 9.375rem;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  text-align: center;
}
.item-name {
  opacity: 0.5;
  transition: all 0.4s ease;
}
.item-photo {
  position: relative;
  height: 6rem;
  opacity: 0;
  transition: all 0.4s ease;
}
.col {
  position: relative;
}
.item-date {
  position: absolute;
  top: 0;
  left: 100%;
  margin-left: 0.5rem;
  white-space: nowrap;
}
.item-more {
  transition: all 0.4s ease;
  text-align: right;
  opacity: 0;
}
@include hover {
  .item:hover .item-more,
  .item:hover .item-photo,
  .item:hover .item-name {
    opacity: 1;
  }
}
</style>
