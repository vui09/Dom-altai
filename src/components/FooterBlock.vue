<template>
  <footer>
    <div class="container footer">
      <div class="footer__wrapper">
        <div class="footer__column">
          <div class="footer__info">
            <div class="footer__caption">
              Телефон компании
            </div>
            <a class="footer__tel" href="tel:+88007751122">8 (800) 775-11-22</a>
          </div>
          <a href="/" class="footer__link">дом.рф</a>
        </div>
        <div class="footer__column">
          <div class="footer__top">
            <div class="footer__wrap">
              <div class="footer__caption">
                Email
              </div>
              <a href="" class="footer__text">mailbox@ahml.ru</a>
            </div>
            <div class="footer__wrap">
              <div class="footer__caption">
                Адрес
              </div>
              <address>Москва, Воздвиженка, 10</address>
            </div>
          </div>
          <div class="footer__bottom">
            <a href="/" class="footer__link footer__link-mobile">дом.рф</a>
            <p>Вступите в чат для прямой связи с разработчиками проекта</p>
          </div>
        </div>
        <div class="footer__column footer__column-social">
          <a href="https://t.me/domrf_life" class="footer__social footer__social-tg social-item" title="Телеграм">
          </a>
          <a href="https://vk.com/domrf" class="footer__social footer__social-vk social-item" title="Вконтакте">
          </a>
          <a href="https://www.youtube.com/channel/UCgUs7ebuhG19V4yxDNe_2GQ" class="footer__social footer__social-youtube social-item" title="Youtube">
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'FooterBlock'
}
</script>

<style lang="scss">
footer{
  background: #1E1B1B;
}
.footer{
  &__wrapper{
    padding: 24px 0 20px;
    color: #FFFFFF;
    font-family: Golos-Regular;

    @media(min-width: 768px){
      display: flex;
      justify-content: space-between;
    }

    @media(min-width: 1024px){
      padding: 40px 0 64px;
    }
   }

  &__info{
    margin-bottom: 24px;
    @media(min-width: 768px){
      margin-bottom: 32px;
    }

    .footer__caption{
      padding-bottom: 8px;
    }
  }

  &__caption{
    color: #737373;
  }
  &__tel{
    font-family: Gilroy-Regular;
    font-size: 32px;
    line-height: 36px;
    color: #FFFFFF;
    text-decoration: none;
  }

  &__link{
    position: relative;
    padding-left: 26px;
    color: #FFFFFF;
    text-decoration: none;
    display: none;

    @media(min-width: 768px){
      display: block;
    }

    &-mobile{
      display: block;
      display: block;
      margin-bottom: 16px;
      @media(min-width: 768px){
        display: none;
      }
    }

    &:before{
      content: '';
      position: absolute;
      top: 3px;
      left: 0;
      width: 12px;
      height: 12px;
      border-top: 1px solid #8bc540;
      border-right: 1px solid #8bc540;
    }
    &:after{
      content: '';
      position: absolute;
      top: 9px;
      left: -2px;
      width: 17px;
      height: 1px;
      background-color: #8bc540;
      transform: rotate(-45deg);
    }
  }

  &__text{
    color: #FFFFFF;
    text-decoration: none;
  }

  &__wrap{
    margin-bottom: 16px;
  }

  &__top{
    margin-bottom: 40px;

    @media(min-width: 768px) and (max-width: 1024px){
      display: none;
    }
    @media(min-width: 1024px){
      display: flex;
      justify-content: space-between;
    }
  }
  &__bottom{
    margin-bottom: 24px;
    font-size: 14px;
    line-height: 20px;
    @media(min-width: 768px){
      max-width: 230px;
      margin-top: 27px;
    }
    @media(min-width: 1024px){
      font-size: 16px;
      max-width: none;
      margin-bottom: 0;
    }
  }

  &__social{
    //display: inline-block;
    //width: 48px;
    //height: 48px;
    //border-radius: 50%;
    background-color: #FFFFFF;
    margin-right: 16px;

    &-tg{
      background: #FFFFFF url("../assets/images/social-tg.svg") no-repeat center center;
    }

    &-vk{
      background: #FFFFFF url("../assets/images/social-vk.svg") no-repeat center center;
    }

    &-youtube{
      background: #FFFFFF url("../assets/images/social-youtube.svg") no-repeat center center;
    }
  }

  &__column{
    &-social{
      @media(min-width: 768px) and (max-width: 1024px){
        display: flex;
        align-items: flex-end;
      }
    }
  }
}
</style>
