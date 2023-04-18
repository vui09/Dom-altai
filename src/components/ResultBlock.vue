<template>
  <section class="container result" id="result">
    <h2 class="title">Результаты работы</h2>

    <swiper
      :spaceBetween="16"
      :pagination="{clickable: true,}"
      :modules="modules"
      class="mySwiper"
      :breakpoints="{ 768:{ slidesPerView: 1 }, 1200:{ slidesPerView: 4 } }"
    >
      <swiper-slide v-for="(item, id) in results" :key="id">
        <div class="result__wrapper">
          <div class="result__top">
            <h3 class="result__title">{{ item.title }}</h3>
          </div>
          <div class="result__info">
            <p class="result__date">{{ item.date }}</p>
            <p class="result__name">{{ item.desc }}</p>
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
  props: ['results'],
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
.result{

  &__wrapper{
    height: 276px;
    background: #A3D562;
    padding: 16px;
    margin-bottom: 30px;

    @media (min-width: 768px) {
      height: 368px;
      padding: 32px;
    }
  }

  &__top{
    min-height: 60px;
    margin-bottom: 40px;
  }

  &__title{
    font-size: 16px;
    line-height: 20px;

    @media (min-width: 768px) {
      font-size: 24px;
      line-height: 28px;
    }
  }

  &__info{
    text-align: center;
  }

  &__date{
    font-size: 40px;
    line-height: 44px;
    margin-bottom: 4px;

    @media (min-width: 768px) {
      font-size: 68px;
      line-height: 68px;
    }
  }

  &__name{
    font-family: Golos-Regular;
    font-size: 14px;
    line-height: 20px;

    @media (min-width: 768px) {
      font-size: 16px;
      line-height: 24px;
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
