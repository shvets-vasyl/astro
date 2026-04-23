<template>
  <section class="about sect">
    <div class="head">
      <p class="title cap-medium">Про мене</p>

      <h3 class="h3 text">
        Я не даю магічних порад, а допомагаю визначити ваш шлях та рухатися у
        правильному напрямку
      </h3>
    </div>

    <div class="body">
      <div class="descr body-standard">
        <p>
          Я — персональний астролог, який допомагає краще зрозуміти себе, свої
          сильні сторони та життєві процеси. У своїй роботі я поєдную
          аналітичний підхід із уважним ставленням до кожного запиту, щоб надати
          чіткі та практичні відповіді.
        </p>

        <p>
          Моя мета — зробити астрологію зрозумілою та корисною у повсякденному
          житті. Без складних формулювань і зайвої абстракції — лише
          структурований розбір і спокійне пояснення того, що дійсно має
          значення.
        </p>

        <p>
          Я працюю з індивідуальними запитами: від аналізу особистих якостей до
          розгляду життєвих періодів і прийняття рішень. Кожна консультація
          будується навколо ваших цілей і ситуації, щоб ви могли отримати
          ясність і впевненість у подальших кроках.
        </p>
      </div>

      <div class="photo">
        <img class="inner-media" draggable="false" src="/images/photo.png" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.head {
  display: grid;
  grid-template-columns: 19.8125rem 1fr;
  gap: 1.5rem;
  @include mobile {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }
}
.title {
  @include mobile {
    margin-bottom: 0.5rem;
    text-align: center;
  }
}
.text {
  text-indent: 15.125rem;
  padding-right: 5.25rem;
  @include mobile {
    text-indent: 0;
    padding-right: 0;
    font-size: 2rem;
    line-height: 100%;
    text-align: center;
    margin-bottom: 1.5rem;
  }
}
.body {
  display: grid;
  grid-template-columns: 26.9375rem 41.125rem;
  justify-content: space-between;
  align-items: flex-end;
  @include mobile {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: flex-start;
  }
}
.descr {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  @include mobile {
    order: 2;
    font-size: 0.875rem;
    letter-spacing: -0.21px;
  }
}
.photo {
  position: relative;
  height: 49.375rem;
  @include mobile {
    height: 26.875rem;
    width: 100%;
    order: 1;
    margin-bottom: 1.5rem;
  }
}
</style>
