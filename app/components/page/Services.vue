<template>
  <section class="services sect">
    <img class="leaves-img" draggable="false" src="/images/leaves.png" />
    <div class="titles">
      <h2 class="h2 title1">Натальна карта</h2>
      <h2 class="h2 title2">Прогностика</h2>

      <div class="content">
        <p class="descr body-standard">
          Ви дізнаєтесь про свої сильні сторони, про які, можливо, лише
          здогадувалися, і зрозумієте, як їх використовувати на повну.
        </p>

        <div class="block">
          <div class="tab-titles">
            <h5
              v-for="({ name }, i) in items"
              :key="i"
              class="tab-title h5"
              :class="{ active: activeTab === i }"
              @click="activeTab = i"
            >
              {{ name }}
            </h5>
          </div>

          <p class="tab-subtitle cap-large">{{ items[activeTab]?.subtitle }}</p>
          <p class="tab-descr body-small">{{ items[activeTab]?.descr }}</p>

          <p class="tab-list-title cap-medium">У розборі:</p>

          <div class="tab-list">
            <div class="tab-col">
              <p
                v-for="(text, i) in items[activeTab]?.list.slice(0, 4)"
                :key="i"
                class="tab-list-text body-standard"
              >
                {{ text }}
              </p>
            </div>
            <div class="tab-col">
              <p
                v-for="(text, i) in items[activeTab]?.list.slice(4)"
                :key="i"
                class="tab-list-text body-standard"
              >
                {{ text }}
              </p>
            </div>
          </div>

          <div class="tab-foot">
            <a class="tab-btn" href="#" target="_blank">
              <CommonButton text="Обрати послугу" />
            </a>

            <p class="tab-price sub-large">
              {{ items[activeTab]?.price }} грн.
            </p>

            <p class="tab-pdf-text body-small">
              Текстовий PDF або голосовий розбір
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const items = [
  {
    name: "Базовий",
    subtitle: "Ваша особистість, сильні сторони та потенціал",
    descr:
      "Розбір, з якого найкраще почати знайомство з собою через астрологію.",
    list: [
      "Загальний аналіз особистості",
      "Сонце, Місяць, Асцендент — ваша база та поведінка",
      "Меркурій, Венера, Марс — мислення, почуття, дії сильні сторони та таланти",
      "Сильні сторони та таланти",
      "Напружені аспекти та способи їх проживання",
      "Базовий розбір фінансів та професій",
      "Базовий розбір сфери особистого життя ",
    ],
    price: "2200",
  },
  {
    name: "Поглиблений",
    subtitle: "Повний аналіз особистості, життєвого шляху та сценаріїв",
    descr:
      "Підійде, якщо ви хочете розібратися в собі на глибшому рівні та отримати відповіді на важливі питання.",
    list: [
      "Все з базового розбору",
      "Призначення та реалізація",
      "Фінансовий потенціал і ризики",
      "Сценарії стосунків і партнерства",
      "Кармічні задачі та повторювані патерни",
      "Вектор розвитку",
    ],
    price: "3500",
  },
  {
    name: "Тематичний",
    subtitle: "Глибокий аналіз однієї сфери життя",
    descr:
      "Ви обираєте одну сферу: стосунки, фінанси та реалізація, кармічне призначення.",
    list: [
      "Аналіз ключових показників у карті",
      "Сценарії та моделі поведінки",
      "Причини повторюваних ситуацій",
      "Сильні сторони у цій сфері",
      "Рекомендації щодо проживання",
    ],
    price: "2000",
  },
  {
    name: "Синастрія",
    subtitle: "Аналіз взаємодії між двома людьми",
    descr:
      "Розбір допомагає зрозуміти динаміку стосунків, причини притягання, складнощів та потенціал пари.",
    list: [
      "Аналіз кожного партнера",
      "Як ви впливаєте один на одного",
      "Сильні сторони союзу",
      "Зони конфліктів",
      "Перспективи стосунків (шлюб / спільне життя)",
      "Кармічний підтекст",
    ],
    price: "3000",
  },
]

const activeTab = ref(0)
</script>

<style scoped lang="scss">
.titles {
  position: relative;
}
.leaves-img {
  width: 48.25rem;
  position: absolute;
  top: 0;
  left: 0;
}
.title1 {
  margin-bottom: 1.5rem;
}
.title2 {
  opacity: 0.35;
}
.content {
  position: relative;
  display: grid;
  grid-template-columns: 19.8125rem 1fr;
  gap: 7.125rem;
  align-items: flex-end;
  margin-top: -1.5rem;
}
.block {
  border-radius: 0.5rem;
  background: var(--c-white);
  padding: 1.5rem;
}
.tab-titles {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}
.tab-title {
  cursor: pointer;
  opacity: 0.35;
  transition: all 0.4s ease;
}
.tab-title.active {
  opacity: 1;
}
@include hover {
  .tab-title:hover {
    opacity: 1;
  }
}
.tab-subtitle {
  margin-bottom: 0.5rem;
}
.tab-descr {
  margin-bottom: 2.5rem;
}
.tab-list-title {
  margin-bottom: 1rem;
}
.tab-list {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
  margin-bottom: 2.5rem;
}
.tab-col {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.tab-list-text {
  position: relative;
  padding-left: 1.25rem;
}
.tab-list-text:after {
  content: "";
  position: absolute;
  top: 50%;
  transform: translateY(-40%);
  left: 0;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 100%;
  background: var(--c-black);
}
.tab-btn {
  display: inline-flex;
}
.tab-foot {
  display: flex;
  align-items: center;
}
.tab-price {
  margin-left: 1.5rem;
}
.tab-pdf-text {
  color: #5c5c5c;
  margin-left: auto;
}
</style>
