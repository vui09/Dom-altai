<template>
  <header>
    <div class="container">
      <div class="header">
        <a href="/" class="logo">
          <img alt="Vue logo" src="../assets/images/logo.svg">
        </a>
        <div class="header__menu">
          <a href="#about" class="header__menu-link">О проекте</a>
          <a href="#team" class="header__menu-link">Команда проекта</a>
          <a href="#progress" class="header__menu-link">Ход проекта</a>
          <a href="#events" class="header__menu-link">Расписание мероприятий</a>
          <a href="/" class="header__menu-link">Карта</a>
          <a href="#result" class="header__menu-link">Результаты работ</a>
          <a href="#contacts" class="header__menu-link">Контакты</a>
        </div>
        <div
          class="header__burger"
          :class="{'header__burger-active' : isOpen}"
          @click="toggleMenu"></div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'HeaderBlock',
  props: {
    activeMobileMenu: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen
      this.$emit('toggleMenu', this.isOpen)
    }
  }
}
</script>

<style scoped lang="scss">
header{
  position: fixed;
  top: 0;
  z-index: 101;
  background: #FFFFFF;
  width: 100%;
}
.header{
  display: flex;
  align-items: center;
  padding: 26px 0;
  width: 100%;
  max-width: 1600px;
  margin: 0 auto;
  justify-content: space-between;
  @media(min-width: 1024px){
    justify-content: flex-start;
  }
  .logo{
    width: 88px;
    height: 48px;
  }
  &__menu{
    display: none;
    margin: 0 auto;

    @media(min-width: 1024px){
      display: block;
    }

    &-link{
      color: #000000;
      text-decoration: none;
      font-weight: 600;
      font-size: 14px;
      line-height: 20px;
      margin-left: 27px;
      &:hover{
        color: #8bc540;
      }
      @media(min-width: 1200px){
        font-size: 16px;
        margin-left: 40px;
      }
    }
  }

  &__burger{
    position: relative;

    @media(min-width: 1024px){
      display: none;
    }
    &:before{
      content: '';
      position: absolute;
      top: 0;
      right: 0;
      width: 48px;
      height: 2px;
      background-color: #000000;
      transition: transform .6s cubic-bezier(.165,.84,.44,1),opacity .3s cubic-bezier(.165,.84,.44,1),background-color .6s cubic-bezier(.165,.84,.44,1);
    }
    &:after{
      content: '';
      position: absolute;
      top: 8px;
      right: 0;
      width: 48px;
      height: 2px;
      background-color: #000000;
      transition: transform .6s cubic-bezier(.165,.84,.44,1),opacity .3s cubic-bezier(.165,.84,.44,1),background-color .6s cubic-bezier(.165,.84,.44,1);
    }

    &-active{
      &:before{
        transform: rotate(-45deg);
      }
      &:after{
        top: 0;
        transform: rotate(45deg);
      }
    }
  }
}
</style>
