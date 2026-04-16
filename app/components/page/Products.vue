<template>
  <section class="products sect">
    <h2 class="h2 title">Публікації</h2>

    <div class="items">
      <div v-for="({ photo, name, price }, i) in items" :key="i" class="item">
        <div class="item-photo">
          <img draggable="false" :src="photo" />
        </div>

        <h5 class="item-name h5">{{ name }}</h5>
        <p class="item-price cap-large">{{ price }}</p>
        <a class="item-link" href="https://t.me/chipolinaa" target="_blank">
          <CommonButton text="Купити" border />
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const items = [
  {
    photo: "/images/book1.png",
    name: "Майбутнє простою мовою",
    price: "2,299 грн.",
  },
  {
    photo: "/images/book2.png",
    name: "Кармічний шлях вашої душі",
    price: "2,299 грн.",
  },
]
</script>

<style scoped lang="scss">
.title {
  margin-bottom: 3.5rem;
  text-align: center;
}
.items {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}
.item {
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.25);
  position: relative;
  padding: 2.8125rem 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.item-photo {
  width: 13.9375rem;
  margin-bottom: 3.125rem;
}
.item-photo img {
  width: 100%;
}
.item-name {
  width: 50%;
  margin-bottom: 1rem;
}
.item-price {
  margin-bottom: 1.5rem;
}
.item-link {
  display: inline-flex;
}
.item-link:deep(.btn-template) {
  padding: 0 4rem;
}
</style>
