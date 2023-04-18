<template>
  <section class="container questions">
    <div class="questions__wrapper">
      <div class="questions__item"
           :class="{ active: item.isActive }"
           v-for="(item, idx) in questions"
           :key="idx">
        <div class="questions__name"
             @click="showActive(item)">
          {{ item.title}}
        </div>
        <Transition name="bounce">
          <div class="questions__text" v-if="item.isActive">
            {{ item.text }}
          </div>
        </Transition>

      </div>

    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      // activeIndex: -1,
      questions: [
        { title: 'Основы', isActive: false, text: 'В блоке вы познакомитесь со всеми основами Vue.modules на практике. На протяжении блока мы напишем реактивное приложение, в процессе разработки которого разберем вся базу фреймворка.' },
        { title: 'Компоненты', isActive: false, text: 'Один из самых важных блоков в курсе, где вы узнаете все о компонентах. В блоке мы напишем 2 разных приложения и создадим более 5 различных UI компонентов как в реальной разработке. Блок расскажет про абсолютно все составляющие, которые есть в компонентах: взаимодействие, slots, асинхронные и динамические компоненты и тонна примеров.' },
        { title: 'Роутер', isActive: false, text: 'В данном блоке вы узнаете все о том, как работает мультиязычность во Vue. Мы создадим миниклон Gmail в данном блоке, где вы на практике увидите как работать с динамическим роутером.' },
        { title: 'Vuex', isActive: false, text: 'В блоке вы узнаете абсолютно все про Vuex. Вы узнаете как работать с данными, какие есть лучшие практики по их программированию и структурированию. Все на практике.' },
        { title: 'Composition', isActive: false, text: 'Одним из наиболее важных обновлений в Vue 3 является появление альтернативного синтаксиса Composition API. В этом блоке вы узнаете все, чтобы полностью пользоваться данными синтаксисом на практических примерах. Помимо этого вы узнаете как работать совместно с Vue Router и Vuex.' }
      ]
    }
  },
  methods: {
    showActive (item) {
      // вариант на modules вторгаясь в сам дом
      // let target = event.target
      // if (!target.classList.contains('.questions__item')) {
      //   target = target.closest('.questions__item')
      // }
      if (item.isActive) {
        item.isActive = false
        // target.querySelector('.questions__text').style.maxHeight = '0'
      } else {
        item.isActive = true
        // target.querySelector('.questions__text').style.maxHeight = `${target.scrollHeight}px`
      }
    }
  }
}
</script>

<style lang="scss">
.questions{
  &__wrapper{
    max-width: 752px;
    margin: 0 auto 104px;
  }
  &__item{
    border-bottom: 1px solid #999999;
    padding: 24px 0;
  }
  &__name{
    font-size: 24px;
    line-height: 28px;
    position: relative;
    &:after, &:before{
      content: '';
      width: 24px;
      height: 2px;
      background: #000000;
      position: absolute;
      top: 50%;
      right: 0;
      transition: .3s;
    }
    &:before{
      transform: rotate(90deg);
    }
    &::marker{
      content: "";
    }
    &:hover{
      cursor: pointer;
    }
  }
  &__text{
    padding-top: 24px;
    //display: none;
    //max-height: 0;
    overflow: hidden;
    transition: .3s;
  }

  .active{
    .questions__name{
      &:before{
        transform: rotate(0deg);
      }
    }

  }
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}
@keyframes bounce-in {
  0% {
    max-height: 0;
  }
  100% {
    max-height: 100px;
  }
}
</style>
