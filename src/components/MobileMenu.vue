<template>
<!--  :class="{'mobileMenu-open' : activeMobileMenu}"-->
<div class="mobileMenu" :class="{'mobileMenu-open' : activeMobileMenu}">
  <div class="mobileMenu__wrapper">
    <div class="mobileMenu__top">
      <div class="mobileMenu__list">
        <a href="#about" class="mobileMenu__list-item">О проекте</a>
        <a href="#team" class="mobileMenu__list-item">Команда проекта</a>
        <a href="#progress" class="mobileMenu__list-item">Ход проекта</a>
        <a href="#events" class="mobileMenu__list-item">Расписание мероприятий</a>
        <a href="/" class="mobileMenu__list-item">Карта</a>
        <a href="#result" class="mobileMenu__list-item">Результаты работ</a>
        <a href="#contacts" class="mobileMenu__list-item">Контакты</a>
      </div>
    </div>
    <div class="mobileMenu__bottom">
      <div class="mobileMenu-info">
        <div class="mobileMenu__phone">
          <div class="mobileMenu__caption">
            Телефон компании
          </div>
          <a class="mobileMenu__tel" href="tel:+88007751122">8 (800) 775-11-22</a>
        </div>
        <div class="mobileMenu__caption">
          Email
        </div>
        <a href="" class="mobileMenu__email">mailbox@ahml.ru</a>
        <div class="mobileMenu__caption">
          Адрес
        </div>
        <adress>Москва, Воздвиженка, 10</adress>
      </div>
      <div class="mobileMenu__social">
        <a href="/" class="mobileMenu__social-item footer__social-tg social-item"  title="Телеграм">
        </a>
        <a href="/" class="mobileMenu__social-item footer__social-vk social-item" title="Вконтакте">
        </a>
        <a href="/" class="mobileMenu__social-item footer__social-youtube social-item" title="Youtube">
        </a>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'MobileMenu',
  props: {
    activeMobileMenu: {
      type: Boolean,
      default: false
    }
  },
}
</script>

<style lang="scss">
.mobileMenu{
  position: fixed;
  z-index: 100;
  top: 0;
  left: 0;
  background-color: #FFFFFF;
  width: 100%;
  padding: 100px 16px 0;
  max-height: 100vh;
  height: 100%;
  overflow: scroll;
  transform: translateX(100vw);
  transition: all .3s ease;

  &-open{
    transform: translateX(0);
  }

  &__wrapper{
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  &__top{
    margin-bottom: 50px;
  }

  &__list{

    &-item{
      font-family: Gilroy-Regular;
      color: #000000;
      font-size: 32px;
      line-height: 36px;
      padding: 16px 0;
      border-bottom: 1px solid #DEDEDE;
      text-decoration: none;
      display: block;
    }
  }

  &__bottom{
    margin-top: auto;
    padding-bottom: 32px;

    @media(min-width: 768px){
      display: flex;
      justify-content: space-between;
    }
  }

  &__caption{
    color: #737373;
    font-family: Golos-Regular;
  }

  &__phone{
    .mobileMenu__caption{
      margin-bottom: 8px;
    }
  }

  &__tel{
    display: block;
    font-family: Gilroy-Regular;
    font-size: 32px;
    line-height: 36px;
    color: #000000;
    text-decoration: none;
    margin-bottom: 24px;
  }

  &__email{
    display: block;
    font-family: Gilroy-Regular;
    color: #000000;
    text-decoration: none;
    margin-bottom: 24px;
  }

  &__social{
    margin-top: 16px;
    @media(min-width: 768px){
      margin-top: auto;
    }

    &-item{
      //display: inline-block;
      //width: 48px;
      //height: 48px;
      background-color: #F5F5F7;
      border-radius: 50%;
      margin-right: 8px;
    }
  }
  //.mobileMenu__social-item{
  //  width: 48px;
  //  height: 48px;
  //  background-color: #F5F5F7;
  //  border-radius: 50%;
  //}
}
</style>
