<template>
  <section class="container progress" id="progress">
    <h2 class="title">Ход проекта</h2>
    <div class="progress__wrapper">
      <ul class="progress__list">
        <li class="progress__item active">
          <div class="progress__decor"></div>
          <div class="progress__desc-wrapper">
            <div class="progress__month">
              август - январь
            </div>
            <div class="progress__desc">
              Начало работы, предпроектный анализ
            </div>
          </div>
        </li>
        <li class="progress__item active">
          <div class="progress__decor"></div>
          <div class="progress__desc-wrapper">
            <div class="progress__month">
              январь - май
            </div>
            <div class="progress__desc">
              Проведение очных и онлайн встреч с жителями и экспертами
            </div>
          </div>
        </li>
        <li class="progress__item">
          <div class="progress__decor"></div>
          <div class="progress__desc-wrapper">
            <div class="progress__month">
              январь - май
            </div>
            <div class="progress__desc">
              Онлайн-опрос жителей и экспертов
            </div>
          </div>
        </li>
        <li class="progress__item">
          <div class="progress__decor"></div>
          <div class="progress__desc-wrapper">
            <div class="progress__month">
              май
            </div>
            <div class="progress__desc">
              Презентация предварительного варианта проекта
            </div>
          </div>
        </li>
        <li class="progress__item">
          <div class="progress__decor"></div>
          <div class="progress__desc-wrapper">
            <div class="progress__month">
              сентябрь
            </div>
            <div class="progress__desc">
              Презентация итогового варианта проекта
            </div>
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: 'ProgressBlock'
}
</script>

<style lang="scss">

$green: #8bc540;

.progress{
  .title{
    margin-bottom: 66px;
  }
  &__wrapper{
    margin-bottom: 64px;
    @media (min-width: 768px){
      overflow-x: scroll;
      margin-bottom: 72px;
    }
    @media (min-width: 1025px){
      overflow: hidden;
      margin-bottom: 120px;
    }
  }
  &__list{
    list-style: none;
    @media (min-width: 768px){
      display: flex;
      height: 365px;
      padding-left: 46px;
      min-width: 1000px;
    }
    @media (min-width: 1025px){
      min-width: auto;
    }
  }
  &__item{
    position: relative;
    border-top: 2px solid $green;
    border-right: 2px solid $green;
    width: 50%;
    min-height: 150px;
    padding-top: 16px;
    padding-right: 14px;

    @media (min-width: 768px){
      width: 195px;
      height: 50%;
      border-left: 2px solid $green;
      border-bottom: 2px solid $green;
      border-right: none;
      border-top: none;
    }

    @media (min-width: 1025px){
      width: 20%;
    }

    &:nth-child(2n){
      margin-left: auto;
      padding-left: 14px;
      border-right: 0;
      border-left: 2px solid $green;
      transform: translateX(-2px);

      @media (min-width: 768px){
        margin-top: auto;
        border-top: 2px solid $green;
        border-bottom: 0;
        transform: translateY(-2px);
      }

      &::before{
        right: auto;
        left: -8px;

        @media (min-width: 768px){
          left: -11px;
          top: -11px;
        }
      }

      .progress__desc-wrapper{
        @media (min-width: 768px){
          top: 30%;
        }
      }
    }

    &:last-child{
      .progress__desc-wrapper{
        @media (min-width: 1025px){
          width: auto;
        }
      }
    }

    &::before{
      content: ' ';
      width: 14px;
      height: 14px;
      position: absolute;
      right: -8px;
      top: -7px;
      background: $green;
      border-radius: 50%;

      @media (min-width: 768px){
        width: 20px;
        height: 20px;
        right: auto;
        top: auto;
        left: -11px;
        bottom: -11px;
      }
    }

    &.active{
      border-top-color: #1E1B1B;
      @media (min-width: 768px){
        border-left-color: #1E1B1B;
        border-top-color: #8bc540;
      }
      &::before{
        background: #1E1B1B;
      }
    }
  }

  &__decor{
    display: none;
    background: #1E1B1B;
    width: 2px;
    height: 100%;
    position: absolute;
    right: -2px;
    top: -30%;

    @media (min-width: 768px){
      width: 100%;
      height: 2px;
      left: -30%;
      bottom: -2px;
      right: auto;
      top: auto;
    }

    &:after{
      content: "";
      position: absolute;
      top: 30%;
      transform: translateY(-51%);
      right: -9px;
      width: 20px;
      height: 20px;
      background-color: transparent;
      border: 2px solid #1e1b1b;
      z-index: 2;
      border-radius: 50%;
      box-sizing: border-box;

      @media (min-width: 768px){
        width: 28px;
        height: 28px;
        right: auto;
        top: auto;
        left: calc(30% - 15px);
        bottom: 50%;
        transform: translateY(50%);
      }
    }
  }

  .progress__item.active{
    .progress__decor{
      display: block;
    }

    &:nth-child(2n){
      .progress__decor{
        left: -2px;
        right: auto;
        top: -32%;

        @media (min-width: 768px){
          left: -30%;
          bottom: auto;
          top: -2px;
          transform: translateX(-2px);
        }

        &:after{
          transform: translateY(-36%);

          @media (min-width: 768px){
            transform: translateY(50%) translateX(2px);
          }
        }
      }
    }
  }

  &__month{
    font-family: Golos-Regular;
    font-size: 12px;
    line-height: 16px;
    color: #737373;
    margin-bottom: 8px;

    @media (min-width: 768px){
      font-size: 16px;
      line-height: 20px;
    }
  }

  &__desc{
    font-size: 14px;
    line-height: 20px;

    @media (min-width: 768px){
      font-size: 20px;
      line-height: 24px;
    }

    &-wrapper{

      @media (min-width: 768px){
        position: absolute;
        left: 12px;
        top: 0;
        width: 160%;
      }
    }
  }
}
</style>
