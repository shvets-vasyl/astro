<template>
  <section class="about sect">
    <div class="head">
      <p class="title cap-medium">Про мене</p>

      <h3 class="h3 text">
        Я допомагаю перекласти мову натальної карти на мову зрозумілих
        відповідей
      </h3>
    </div>

    <div class="body">
      <div class="descr body-standard">
        <p>
          Мій блог — простір для тих, кому близький серйозний погляд на
          астрологію.
        </p>
        <p>
          Я працюю в руслі традиційної астрології й розглядаю карту народження
          як систему взаємопов’язаних показників, а не як набір ізольованих
          символів чи красивих психологічних узагальнень.
        </p>
        <p>
          У своїй 6-річній практиці я спираюся на метод, логіку інтерпретації та
          уважне читання карти. Мене цікавить не містифікація астрології, а її
          внутрішня структура: як планети формують темперамент, які життєві теми
          стають провідними та в які періоди вони набувають найбільшої сили.
        </p>
        <p>
          Тому мої консультації спираються на конкретне читання карти: характер,
          здібності, стосунки, професійну реалізацію та часові цикли.
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
