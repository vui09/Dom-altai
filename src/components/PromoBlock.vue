<template>
  <section class="container">
    <div class="promo">
      <div class="promo__wrapper">
        <h1>Мастер-план природного парка «Каракольские озёра»</h1>
        <p class="promo__text">Нам важно узнать, каким вы видите развитие территории. Пожалуйста, пройдите опрос и оставьте ваши пожелания и предложения </p>
        <a class="promo__link btn btn-white" href="/">Пройти опрос</a>
        <a class="promo__link btn btn-transparent" href="/">Написать нам</a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'PromoBlock'
}
</script>

<style lang="scss">
  .promo{
    margin-top: 104px;
    &__wrapper{
      background: url("../assets/images/promo.jpg") no-repeat center;
      background-size: cover;
      padding: 148px 0 72px;
      max-height: 600px;
      color: #ffffff;
      text-align: center;
      margin: 12px 0 16px;
      @media (max-width: 768px) {
        padding: 32px 12px;
      }
    }
    h1{
      max-width: 750px;
      margin: 0 auto 32px;
      font-size: 48px;
      line-height: 52px;
      @media (max-width: 768px) {
        font-size: 28px;
        line-height: 32px;
        margin-bottom: 16px;
      }
    }
    &__text{
      max-width: 586px;
      margin: 0 auto 88px;
      font-family: Golos-Medium, sans-serif;
      @media (max-width: 768px) {
        font-size: 14px;
        line-height: 20px;
        margin-bottom: 32px;
      }
    }
    &__link{
      display: flex;
      max-width: 182px;
      justify-content: center;
      margin: 0 auto;
      &:last-of-type{
        margin-bottom: 0;
      }
      @media (max-width: 768px) {
        max-width: 100%;
      }
    }
  }
</style>
