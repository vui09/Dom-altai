<template>
  <section class="container team" id="team">
    <h2 class="title">Команда проекта</h2>
    <div class="team__wrapper">
      <div class="team__block">
        <div class="team__img">
          <img src="../assets/images/team1.jpg" alt="Олег Хорохордин">
        </div>
        <div class="team__info">
          <div class="team__fio">Олег Хорохордин</div>
          <div class="team__post">Глава Республики Алтай, Председатель Правительства Республики Алтай</div>
        </div>
      </div>
      <div class="team__block">
        <div class="team__img">
          <img src="../assets/images/team2.jpg" alt="Антон Финогенов">
        </div>
        <div class="team__info">
          <div class="team__fio">Антон Финогенов</div>
          <div class="team__post">Заместитель генерального директора Фонда ДОМ.РФ</div>
        </div>
      </div>
    </div>
    <div class="team__wrapper">
      <div class="team__item">
        <div class="team__item-img">
          <img src="../assets/images/team3.jpg" alt="Айлан Сумачаков">
        </div>
        <div class="team__item-info">
          <div class="team__item-fio">
            Айлан Сумачаков
          </div>
          <div class="team__item-post">
            Министр природных ресурсов, экологии и туризма Республики Алтай
          </div>
        </div>
      </div>
      <div class="team__item">
        <div class="team__item-img">
          <img src="../assets/images/team4.jpg" alt="Михаил Грудинин">
        </div>
        <div class="team__item-info">
          <div class="team__item-fio">
            Михаил Грудинин
          </div>
          <div class="team__item-post">
            Руководитель НКО Центр развития Республики Алтай
          </div>
        </div>
      </div>
      <div class="team__item">
        <div class="team__item-img">
          <img src="../assets/images/team5.jpg" alt="Ксения Голубева">
        </div>
        <div class="team__item-info">
          <div class="team__item-fio">
            Ксения Голубева
          </div>
          <div class="team__item-post">
            Руководитель Проектного отдела Фонда ДОМ.РФ
          </div>
        </div>
      </div>
      <div class="team__item">
        <div class="team__item-img">
          <img src="../assets/images/team6.jpg" alt="Александр Сергеев">
        </div>
        <div class="team__item-info">
          <div class="team__item-fio">
            Александр Сергеев
          </div>
          <div class="team__item-post">
            Архитектор Проектного отдела Фонда ДОМ.РФ
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TeamBlock'
}
</script>

<style lang="scss">
.team{
  &__wrapper{
    display: flex;
    margin-bottom: 48px;
    justify-content: space-between;
    @media (max-width: 1400px) {
      flex-wrap: wrap;
      justify-content: normal;
    }
  }
  &__block{
    display: flex;
    background: #F5F5F7;
    width: 50%;
    @media (max-width: 1400px) {
      width: 100%;
      &:nth-of-type(2n){
        .team__info{
          order: 1;
          &::after {
            right: -22px;
            left: auto;
            border-left: 23px solid #F5F5F7;
            border-right: 0;
          }
        }
        .team__img{
          order: 2;
          @media (max-width: 1400px) {
            min-width: 352px;
            max-width: 352px;
          }
          @media (max-width: 767px) {
            min-width: 100%;
            max-width: 100%;
          }
        }
      }
    }
    @media (max-width: 767px){
      flex-wrap: wrap;
    }
    @media (max-width: 767px) {
      &:nth-of-type(2n){
        .team__info{
          order: 2;
        }
        .team__img{
          order: 1;
        }
      }
    }
  }
  &__img{
    width: 100%;
    @media (min-width: 767px){
      max-height: 320px;
      min-width: 384px;
      max-width: 384px;
    }
    img{
      width: 100%;
      height: auto;
      object-fit: contain;
    }
  }
  &__info{
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    padding: 0 32px;
    &::after {
      content: '';
      position: absolute;
      left: -45px;
      top: calc(50% - 23px);
      border: 23px solid transparent;
      border-right: 23px solid #F5F5F7;
      @media (max-width: 767px) {
        display: none;
      }
    }
    @media (max-width: 1400px) {
      flex-grow: 1;
    }
    @media (max-width: 767px) {
      padding: 16px 12px 32px;
    }
  }
  &__fio{
    font-size: 24px;
    line-height: 28px;
    margin-bottom: 12px;
  }
  &__post{
    font-size: 16px;
    line-height: 20px;
  }
  &__item{
    display: flex;
    margin-right: 20px;
    margin-bottom: 24px;
    width: 356px;
    @media (max-width: 1400px) {
      width: calc(50% - 20px);
    }
    @media (max-width: 767px) {
      width: 100%;
    }

    &:last-of-type{
      margin-right: 0;
    }
    &-img{
      max-width: 111px;
      max-height: 111px;
      min-width: 111px;
      min-height: 111px;
      border-radius: 50%;
      margin-right: 16px;
      @media (max-width: 767px) {
        max-width: 80px;
        max-height: 80px;
        min-width: 80px;
        min-height: 80px;
      }
      img{
        width: 100%;
        height: 100%;
      }
    }
    &-info{
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    &-fio{
      font-family: Gilroy-SemiBold;
      line-height: 20px;
    }
    &-post{
      font-family: Golos-Regular;
      font-size: 14px;
      line-height: 20px;
      color: #737373;
    }
  }
}
</style>
