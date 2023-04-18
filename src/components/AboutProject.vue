<template>
  <section class="container about" id="about">
    <div class="about__wrapper">
      <div class="about__img">
        <img src="../assets/images/about-project.jpg" alt="">
      </div>
      <div class="about__info">
        <h2>О проекте</h2>
        <p>В Республике Алтай разрабатывается Мастер-план природного парка «Каракольские озёра»</p>
        <p>Рассматриваемая территория — на карте справа. В Мастер-плане будут определены общие принципы и направления развития территории. На этой же карте вы можете увидеть предполагаемые границы территорий, на которых планируются изменения. Наибольший радиус (2) - природный парк для активного туризма. Наименьший радиус (1) занимает охранная зона Каракольских озёр, территория на которой требуется максимально деликатное внедрение инфраструктуры.</p>
        <p>Этот сайт — краудсорсинговая платформа, созданная командой разработчиков проекта для сбора мнений и идей, анонса мероприятий и обратной связи.</p>
        <p>Мы приглашаем в разработку Мастер-плана представителей всех заинтересованных сторон и стремимся сделать процесс максимально открытым.</p>
        <div class="about__logo">
          <div class="logo__item"
               v-for="(item, idx) in tooltip"
               :key="idx">
            <picture>
              <source :srcset="require(`../assets/images/${item.img}.webp`)">
              <img :src="require(`../assets/images/${item.img}.png`)" :alt="item.text">
            </picture>
            <div class="logo__text">
              {{ item.text }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data () {
    return {
      tooltip: [
        {
          text: 'Администрация Чемальского района',
          isActive: false,
          img: 'project-logo1'
        },
        {
          text: 'Правительство Республики Алтай',
          isActive: false,
          img: 'project-logo2'
        },
        {
          text: 'Центр развития Республики Алтай',
          isActive: false,
          img: 'project-logo3'
        },
        {
          text: 'Фонд Дом.рф',
          isActive: false,
          img: 'project-logo4'
        }
      ]
    }
  }
}

</script>

<style lang="scss">
.about{
  &__wrapper{
    margin-bottom: 104px;
    display: flex;

    @media (max-width: 1025px){
      flex-wrap: wrap;
      margin-bottom: 32px;
    }

  }
  &__img{
    @media (min-width: 1200px) {
      max-height: 603px;
    }
    @media (max-width: 1200px) {
      min-width: 40%;

    }
    @media (max-width: 1025px) {
      order: 2;
    }
    img{
      max-width: 624px;
      @media (max-width: 1200px) {
        max-width: 100%;
        height: auto;
      }
    }
  }
  &__info{
    background: #F5F5F7;
    padding: 40px;
    margin-left: 12px;
    @media (max-width: 1025px) {
      padding: 32px 24px;
    }
    h2{
      font-size: 32px;
      line-height: 36px;
      margin-bottom: 24px;
    }
    p{
      margin-bottom: 16px;
    }
    @media (max-width: 1025px) {
      order: 1;
      margin-left: 0;
      margin-bottom: 16px;
    }
  }
  &__logo{
    display: flex;
    margin-top: 40px;
    align-items: center;
    @media (max-width: 1025px) {
      display: none;
    }
    .logo__item{
      margin-right: 20px;
      position: relative;
      cursor: pointer;
    }
    .logo__text{
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      pointer-events: none;
      white-space: nowrap;
      z-index: 100;
      opacity: 0;
      font-size: 14px;
      line-height: 20px;
      font-family: Golos-Regular;
      padding: 8px;
      background: #FFFFFF;
      transition: all .3s cubic-bezier(.68,-.55,.265,1.55);
      box-shadow: 0 0 10px rgb(0 0 0 / 16%);
      border-radius: 4px;

      &::after {
        content: '';
        position: absolute;
        left: -15px;
        top: calc(50% - 8px);
        border: 7px solid transparent;
        border-right: 8px solid #FFFFFF;
      }
    }
    .logo__item{
      &:hover{
        .logo__text{
          left: 111%;
          opacity: 1;
          pointer-events: auto;
        }
      }
    }
  }
}
</style>
