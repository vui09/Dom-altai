<template>
  <section class="container" id="contacts">
    <div class="form">
      <div class="form__wrapper">
        <h2 class="title">Остались вопросы? Есть пожелания?</h2>

        <form action="" id="formSubmit" @submit.prevent="sendForm">
          <div class="form__row">
            <input
              class="form__input"
              type="text"
              name="form[FIO]"
              id="fio"
              placeholder="ФИО"
              v-model="fio.value"
              @input="delError('fio'); showClear('fio')"
              autocomplete="off">
            <button
              v-if="fio.clear"
              class="inp-btn-clear"
              aria-label="Очистить поле"
              tabindex="-1"
              @click.prevent="clearField('fio')"></button>
            <ul class="errors" v-if="errors.fio">
              <li class="error" v-html="errors.fio"></li>
            </ul>
          </div>
          <div class="form__row">
            <input type="text"
                   class="form__input"
                   name="form[EMAIL]"
                   id="email"
                   placeholder="Email"
                   v-model="email.value"
                   @input="delError('email'); showClear('email')"
                   autocomplete="off">
            <button
              v-if="email.clear"
              class="inp-btn-clear"
              aria-label="Очистить поле"
              tabindex="-1"
              @click.prevent="clearField('email')"></button>
            <ul class="errors" v-if="errors.email">
              <li class="error" v-html="errors.email"></li>
            </ul>
          </div>
          <div class="form__row">
            <input type="tel"
                   class="form__input js--phone-mask"
                   name="form[PHONE]"
                   id="phone"
                   placeholder="Телефон"
                   maxlength="17"
                   v-model="phone.value"
                   @input="delError('phone'); showClear('phone')"
                   autocomplete="off">
            <button
              v-if="phone.clear"
              class="inp-btn-clear"
              aria-label="Очистить поле"
              tabindex="-1"
              @click.prevent="clearField('phone')"></button>
            <ul class="errors" v-if="errors.phone">
              <li class="error" v-html="errors.phone"></li>
            </ul>
          </div>
          <div class="form__row textarea_wrap">
            <textarea
              class="form__textarea"
              placeholder="Вопрос или пожелание"
              name="form[QUESTION]"
              maxlength="300"
              v-model="question.value"
              @input="delError('question'); showClear('question')"></textarea>
                <button
                  v-if="question.clear"
                  class="inp-btn-clear"
                  aria-label="Очистить поле"
                  tabindex="-1"
                  @click.prevent="clearField('question')"></button>
                <ul class="errors" v-if="errors.question">
                  <li class="error" v-html="errors.question"></li>
                </ul>
          </div>
          <div class="form__row">
            <label for="agreement">
              <input
              type="checkbox"
              name="agreement"
              id="agreement"
              :value="term ? 1 : 0"
              checked
              @change="term = !term; delError('term')" />
              <span class="check-label">Я согласен(на) на обработку персональных данных</span></label>
              <ul class="errors" v-if="errors.term">
                <li class="error" v-html="errors.term"></li>
              </ul>
          </div>
          <input class="form__btn-submit" type="submit" value="Отправить">
        </form>
      </div>
    </div>
  </section>
</template>

<script>

import axios from 'axios'
import phoneMask from '@/modules/phone-mask'
export default {
  data () {
    return {
      fio: {
        value: '',
        clear: false
      },
      email: {
        value: '',
        clear: false
      },
      phone: {
        value: '',
        clear: false
      },
      question: {
        value: '',
        clear: false
      },
      term: true,
      errors: {},
      errorRecapcha: {
        error: false,
        text: 'Пожалуйста повторите отправку.'
      },
      errorResponse: {
        error: false,
        text: 'При отправке произошла ошибка. Пожалуйста, перезагрузите страницу и повторите отправку.'
      }
    }
  },
  methods: {
    showClear (field) {
      this[field].value.length !== 0 ? this[field].clear = true : this[field].clear = false
    },
    clearField (field) {
      this[field].value = ''    // eslint-disable-line
      this[field].clear = false   // eslint-disable-line
    },
    delError (field) {
      console.log(this.errors, field)
      this.errors[field] = undefined
    },
    validateFields (fieldValue) {
      const pattern = /^[s]+$/
      if (fieldValue.length === 0 || pattern.test(fieldValue)) {
        return false
      }
      return true
    },
    validEmail (email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/ // eslint-disable-line
      return re.test(email)
    },

    resetForm() {
      this.fio.value = ''
      this.fio.clear = false
      this.email.value = ''
      this.email.clear = false
      this.phone.value = ''
      this.phone.clear = false
      this.question.value = ''
      this.question.clear = false
    },

    checkForm () {
      this.errors = {}
      if (!this.validateFields(this.fio.value)) {
        this.errors.fio = 'Обязательное поле'
      }
      if (!this.validateFields(this.email.value)) {
        this.errors.email = "Обязательное поле" // eslint-disable-line
      } else if (!this.validEmail(this.email.value)) {
        this.errors.email = "Укажите корректный адрес электронной почты" // eslint-disable-line
      }

      if (!this.validateFields(this.phone.value)) {
        this.errors.phone = 'Обязательное поле'
      } else if (this.phone.value.length !== 17) {
        this.errors.phone = 'Введите корректный номер телефона'
      }

      if (!this.validateFields(this.question.value)) {
        this.errors.question = 'Обязательное поле'
      }

      if (!this.term) {
        this.errors.term = 'Примите условия'
      }

      if (Object.keys(this.errors).length === 0) {
        return true;
      }
    },

    sendForm () {
      this.errorResponse.error = false
      this.errorRecapcha.error = false

      if (this.checkForm()) {
        const formSubmit = document.querySelector('#formSubmit')
        const formData = new FormData(formSubmit)

        axios({
          method: 'post',
          url: '127.0.0.1',
          data: formData
        }).then(response => {// eslint-disable-line
          console.log('Форма отправлена')// eslint-disable-line

          this.resetForm()

        })// eslint-disable-line
          .catch(error => {// eslint-disable-line
            console.log('Форма не отправлена')// eslint-disable-line
          })// eslint-disable-line
      }
    }
  },
  mounted () {
    phoneMask(this.$el.querySelectorAll('.js--phone-mask'));
  },
  unmounted () {
    phoneMask(this.$el.querySelectorAll('.js--phone-mask'));
  }
}
</script>

<style lang="scss">

.form{
  background: #F5F5F7;
  padding: 32px 16px;
  margin-top: 64px;

  @media(min-width: 768px){
    margin-top: 0;
  }

  .title{
    text-align: center;
    margin-bottom: 24px;

    @media(min-width: 768px){
      text-align: left;
    }

    @media(min-width: 1024px){
      font-size: 32px;
      line-height: 36px;
    }
  }

  &__wrapper{
    max-width: 565px;
    margin: 0 auto;
  }
  &__row{
    position: relative;
    margin-bottom: 15px;

    .inp-btn-clear{
      position: absolute;
      right: 10px;
      top: 17px;
      width: 15px;
      height: 15px;
      border: 0;
      background: transparent;
      cursor: pointer;

      &:before{
        background-color: #999;
        content: "";
        height: 1px;
        left: 50%;
        position: absolute;
        top: 50%;
        width: 100%;
        transform: translate(-50%,-50%) rotate(45deg);
      }

      &:after{
        background-color: #999;
        content: "";
        height: 1px;
        left: 50%;
        position: absolute;
        top: 50%;
        width: 100%;
        transform: translate(-50%,-50%) rotate(-45deg);
      }
    }
    input[type=checkbox]{
      display: none;

      &:checked+.check-label::after{
        display: block;
        opacity: 1;
        transform: scale(.7);
      }
    }

    .check-label{
      padding-left: 35px;
      cursor: pointer;

      &::before{
        content: '';
        width: 20px;
        height: 20px;
        position: absolute;
        top: 0;
        left: 0;
        border: 1px solid #dedede;
      }

      &::after{
        content: "";
        width: 20px;
        height: 20px;
        position: absolute;
        top: 1px;
        left: 1px;
        background-color: #8bc540;
        display: none;
      }
    }
  }

  .textarea_wrap{
    .inp-btn-clear{
      top: 10px;
    }
  }

  &__input{
    width: 100%;
    font-family: Gilroy-Medium;
    border: 1px solid #DEDEDE;
    border-radius: 100px;
    color: #737373;
    padding: 15px 16px 13px 24px;
    font-size: 16px;
    line-height: 20px;
  }
  &__textarea{
    width: 100%;
    min-height: 124px;
    font-family: Gilroy-Medium;
    border: 1px solid #DEDEDE;
    border-radius: 16px;
    color: #737373;
    padding: 15px 16px 13px 24px;
    font-size: 16px;
    line-height: 20px;
  }
  &__btn-submit{
    width: 100%;
    display: block;
    background: #000000;
    color: #FFFFFF;
    padding: 15px 24px;
    margin-top: 24px;
    font-size: 14px;
    line-height: 16px;
    border-radius: 24px;
    border: 0;
    cursor: pointer;

    @media (min-width: 768px) {
      max-width: 130px;
      margin: 24px auto 0;
    }
  }
  .errors{
    list-style: none;

    .error{
      color: red;
      font-size: 14px;
    }
  }
}


</style>
