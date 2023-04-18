<template>
  <section class="container form">
    <h2 class="title">Остались вопросы? Есть пожелания?</h2>

    <form action="" id="formSubmit">
      <div class="form__row" :class="{'text-error': showInpError('FIO')}">
        <input type="text" name="form[FIO]" placeholder="ФИО" v-model.trim="form.FIO">
        <span v-show="showInpError('FIO')">{{ validErrorTxt }}</span>
      </div>
      <div class="form__row" :class="{'text-error': showInpError('PHONE')}">
        <input type="text" name="form[PHONE]" placeholder="Телефон" v-model.trim="form.PHONE">
        <span v-show="showInpError('PHONE')">{{ validErrorTxt }}</span>
      </div>
      <div class="form__row" :class="{'text-error': showInpError('EMAIL')}">
        <input type="email" name="form[EMAIL]" placeholder="EMAIL" v-model.trim="form.EMAIL">
        <span v-show="showInpError('EMAIL')">{{ emailErrorTxt }}</span>
      </div>
      <div class="form__row" :class="{'text-error': showInpError('QUESTION')}">
        <textarea  name="form[QUESTION]" placeholder="Вопрос или пожелание" v-model.trim="form.QUESTION"/>
        <span v-show="showInpError('QUESTION')">{{ validErrorTxt }}</span>
      </div>
      <div class="form__row">
        <label><input type="checkbox" id="confirm" v-model="form.isCheck">Я согласен(на) на обработку персональных данных</label>
        <!--        <span v-show="showAgreeError('QUESTION')">{{ agreementError }}</span>-->
      </div>
      <input type="submit" value="Отправить" @click.prevent="handlerSendForm()">
    </form>
  </section>
</template>

<script>

import axios from 'axios'
export default {
  data () {
    return {
      form: {
        FIO: '',
        PHONE: '',
        EMAIL: '',
        QUESTION: '',
        isCheck: true
      },
      showValidationError: false,
      // emailRegex: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/,
      emailRegex: /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i,
      emailErrorTxt: 'Введите корректный email',
      validErrorTxt: 'Это поле обязательно к заполнению',
      agreementError: 'Подтвердите согласие'
    }
  },
  methods: {
    isValidInp (payload) {
      if (payload === 'EMAIl') {
        this.form.EMAIL = this.form.EMAIL.trim()
        return (this.form.EMAIL !== '') ? this.emailRegex.test(this.form.EMAIL) : false
      } else {
        return this.form[payload].length >= 2
      }
    },
    showInpError (payload) {
      return this.showValidationError && !this.isValidInp(payload)
    },
    handlerSendForm () {
      this.showValidationError = true
      if (this.isValidInp('FIO') && this.isValidInp('EMAIL')) {
        console.log('FIO', this.form.FIO)
        console.log('PHONE', this.form.PHONE)
        console.log('EMAIL', this.form.EMAIL)
        console.log('QUESTION', this.form.QUESTION)
      }
      grecaptcha.ready(() => {// eslint-disable-line
        grecaptcha.execute(conf.reCAPTCHA_site_key, { action: 'submit' }).then((token) => {// eslint-disable-line
          const formSubmit = document.querySelector('#formSubmit')
          let formData = new FormData(formSubmit)// eslint-disable-line
          formData.append('googleTokenV3', token)// eslint-disable-line
          axios({
            method: 'post',
            url: 'localhost',
            data: formData
          }).then(response => {

          })
            .catch(error => {// eslint-disable-line

            })
        })
      }).catch((error => {}))

    }
  }
}
</script>

<style lang="scss">
.form__row.invalid {
  input {
    border-color: red;
  }
}

.text-error{
  color: red;

  input {
    border-color: red;
  }
}
</style>
