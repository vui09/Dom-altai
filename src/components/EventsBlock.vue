<template>
  <section class="container events" id="events">
    <h2 class="title">Ближайшие мероприятия</h2>
    <swiper
      :spaceBetween="16"
      :pagination="{clickable: true,}"
      :modules="modules"
      class="mySwiper"
      :breakpoints="{ 768:{ slidesPerView: 2 }, 1024:{ slidesPerView: 3 } }"
    >
      <swiper-slide>
        <div class="slide__wrapper">
          <div class="events__top">
            <h3 class="events__title">Стратегическая Сессия по обсуждению проекта «Каракольские озера»</h3>
            <p class="events__text">Представители местных сообществ, бизнеса, администрации, активисты и эксперты в области урбанистики и архитектуры обсудят как развивать промыслы без вреда для окружающей среды, сохранить и поддержать уникальную природу озёр, сделать туризм осознанным</p>
          </div>
          <div class="events__bottom">
            <div class="events__date">
              <span class="events__small">c</span>
              <span class="events__number">26</span>
              <span class="events__fraction">/</span>
              <span class="events__month">января</span>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide__wrapper">
          <div class="events__top">
            <h3 class="events__title">Стратегическая Сессия по обсуждению проекта «Каракольские озера»</h3>
            <p class="events__text">Представители местных сообществ, бизнеса, администрации, активисты и эксперты в области урбанистики и архитектуры обсудят как развивать промыслы без вреда для окружающей среды, сохранить и поддержать уникальную природу озёр, сделать туризм осознанным</p>
          </div>
          <div class="events__bottom">
            <div class="events__date">
              <span class="events__small"></span>
              <span class="events__number">27</span>
              <span class="events__fraction">/</span>
              <span class="events__month">января</span>
            </div>
          </div>
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide__wrapper">
          <div class="events__top">
            <h3 class="events__title">Стратегическая Сессия по обсуждению проекта «Каракольские озера»</h3>
            <p class="events__text">Представители местных сообществ, бизнеса, администрации, активисты и эксперты в области урбанистики и архитектуры обсудят как развивать промыслы без вреда для окружающей среды, сохранить и поддержать уникальную природу озёр, сделать туризм осознанным</p>
          </div>
          <div class="events__bottom">
            <div class="events__date">
              <span class="events__small"></span>
              <span class="events__number">30</span>
              <span class="events__fraction">/</span>
              <span class="events__month">января</span>
            </div>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </section>
</template>

<script>
// Import Swiper Vue.modules components
import { Swiper, SwiperSlide } from 'swiper/vue'

// Import Swiper styles
import 'swiper/css'

import 'swiper/css/pagination'

// import required modules
import { Pagination } from 'swiper'

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  setup () {
    return {
      modules: [Pagination]
    }
  }
}

</script>

<style lang="scss">
.events{
  .swiper{
    margin-bottom: 80px;
  }
  &__title{
    font-size: 16px;
    font-family: Gilroy-Medium,sans-serif;
    line-height: 20px;
    margin-bottom: 8px;

    @media (min-width: 768px) {
      font-size: 20px;
    }

    @media (min-width: 1024px) {
      font-size: 24px;
      line-height: 28px;
    }
  }
  &__date{
    display: flex;
  }
  &__text{
    font-size: 14px;
    font-family: Golos-Regular,sans-serif;
    line-height: 20px;

    @media (min-width: 768px) {
      font-size: 16px;
      line-height: 24px;
    }
  }
  &__small{
    font-size: 14px;
    font-family: Golos-Regular,sans-serif;
    line-height: 20px;
    padding-right: 6px;
    display: flex;
    align-items: flex-end;
    transform: translateY(-3px);

    @media (min-width: 1024px) {
      font-size: 16px;
      transform: translateY(-6px);
    }
  }
  &__number,
  &__fraction{
    font-family: Gilroy-Medium,sans-serif;
    font-size: 32px;
    line-height: 36px;

    @media (min-width: 1024px) {
      font-size: 48px;
      line-height: 52px;
    }
  }
  &__month{
    font-family: Golos-Regular,sans-serif;
    font-size: 14px;
    line-height: 20px;

    @media (min-width: 1024px) {
      font-size: 16px;
    }
  }
  .slide__wrapper{
    height: 424px;
    background: #F5F5F7;
    padding: 16px;
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    @media (min-width: 768px) {
      padding: 24px;
    }

    @media (min-width: 1024px) {
      padding: 32px;
    }
  }
  .swiper-pagination{
    display: flex;
  }
  .swiper-pagination-bullet{
    width: 50%;
    height: 2px;
    border-radius: 0;
    background: #999;
    opacity: 1;
    //margin: 0 16px 0 0 !important;
    //
    //&:last-child{
    //  margin-right: 0 !important;
    //}
  }
  .swiper-pagination-bullet-active{
    background: #000;
  }
}
</style>
