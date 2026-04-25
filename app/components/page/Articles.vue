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
            <!-- <img class="inner-media" draggable="false" :src="photo" /> -->
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
    text: "How Mercury and Venus transits influence relationships according to your zodiac sign",
    date: "25 Липня, 2025",
    photo: "/images/img2.png",
    link: "https://www.dailymail.co.uk/femail/article-14793429/How-Mercury-Venus-transits-influence-relationships-according-astrologer-signs-affected.html ",
  },
  {
    text: "Zodiac Signs With Least Sexual Compatibility",
    date: "11 Червня, 2025",
    photo: "/images/img2.png",
    link: "https://theeverygirl.com/zodiac-signs-with-no-sexual-compatibility/",
  },
  {
    text: "Summer Solstice 2025 Horoscopes for Every Zodiac Sign ",
    date: "25 Липня, 2025",
    photo: "/images/img2.png",
    link: "https://nypost.com/2025/06/20/astrology/summer-solstice-2025-horoscopes-for-every-zodiac-sign/",
  },
  {
    text: "How the summer solstice will affect your star sign - including a big 'change' coming",
    date: "25 Липня, 2025",
    photo: "/images/img2.png",
    link: "https://www.hellomagazine.com/horoscopes/837983/summer-solstice-affect-star-sign-big-change-coming/ ",
  },
  {
    text: "How This Weekend’s Summer Solstice Will Affect Your Zodiac Sign",
    date: "25 Липня, 2025",
    photo: "/images/img2.png",
    link: "https://theeverygirl.com/how-summer-solstice-affects-zodiac-signs/",
  },

  {
    text: "Are Taylor Swift And Travis Kelce Written In The Stars?",
    date: "25 Липня, 2025",
    photo: "/images/img2.png",
    link: "https://theblast.com/690752/taylor-swift-travis-kelce-stars-astrologer/",
  },
  {
    text: "Is Jennifer Aniston’s New Flame The Real Deal? Astrology Has An Answer",
    date: "25 Липня, 2025",
    photo: "/images/img2.png",
    link: "https://theblast.com/716362/is-jennifer-anistons-new-flame-real-deal-astrology/",
  },
  {
    text: "What Astrology Reveals About Katy Perry’s Fling With Justin Trudeau",
    date: "25 Липня, 2025",
    photo: "/images/img2.png",
    link: "https://theblast.com/717398/what-astrology-reveals-katy-perrys-new-romance-justin-trudeau/",
  },

  {
    text: "4 unlucky signs who should be extra cautious during this month’s lunar eclipse corridor",
    date: "25 Липня, 2025",
    photo: "/images/img2.png",
    link: "https://nypost.com/2025/09/07/astrology/4-signs-with-the-most-to-lose-during-septembers-lunar-eclipse-corridor/",
  },
]
</script>

<style scoped lang="scss">
.articles {
  @include mobile {
    display: flex;
    flex-direction: column;
    overflow: hidden;
    align-items: center;
  }
}
.title {
  text-align: center;
  color: transparent;
  -webkit-text-stroke-width: 0.125rem;
  -webkit-text-stroke-color: #cdcdcd;
  font-family: var(--f-can-light);
  font-size: 13.75rem;
  line-height: 100%;
  mask-image: linear-gradient(to top, transparent 0%, #000 80%, #000 100%);
  @include mobile {
    font-size: 6.375rem;
    -webkit-text-stroke-width: 0.0625rem;
  }
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
  @include mobile {
    display: flex;
    padding: 0.75rem 0;
  }
}
.item-name {
  opacity: 0.5;
  transition: all 0.4s ease;
  @include mobile {
    opacity: 1;
    font-size: 1.5rem;
    font-weight: 300;
    line-height: 1.75rem;
    order: 2;
  }
}
.item-photo {
  position: relative;
  height: 6rem;
  opacity: 0;
  transition: all 0.4s ease;
  @include mobile {
    display: none;
  }
}
.col {
  position: relative;
  @include mobile {
    display: flex;
    flex-direction: column;
  }
}
.item-date {
  position: absolute;
  top: 0;
  left: 100%;
  margin-left: 0.5rem;
  white-space: nowrap;
  @include mobile {
    position: relative;
    left: 0;
    margin-left: 0;
    text-align: center;
    order: 1;
  }
}
.item-more {
  transition: all 0.4s ease;
  text-align: right;
  opacity: 0;
  @include mobile {
    display: none;
  }
}
@include hover {
  .item:hover .item-more,
  .item:hover .item-photo,
  .item:hover .item-name {
    opacity: 1;
  }
}
</style>
