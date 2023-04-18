<template>
  <section class="container form">
    <h2 class="title">Остались вопросы? Есть пожелания?</h2>

    <form action="" @submit.prevent="submitHandler">
<!--      <div class="form__row" :class="{invalid: errors.fio}">-->
<!--        <input type="text" id="fio" placeholder="ФИО" v-model.trim="fio">-->
<!--        <small v-if="errors.fio">{{errors.fio}}</small>-->
<!--      </div>-->

      <app-input
        placeholder="ФИО"
        :error="errors.fio"
        v-model="fio">
      </app-input>
      <app-input
        placeholder="Телефон"
        :error="errors.phone"
        v-model="phone">
      </app-input>
      <app-input
        placeholder="Адрес электронной почты"
        :error="errors.email"
        v-model="email">
      </app-input>
<!--      <div class="form__row">-->
<!--        <input type="text" id="phone" placeholder="Телефон" v-model.number="phone">-->
<!--      </div>-->
<!--      <div class="form__row">-->
<!--        <input type="text" id="email" placeholder="Адрес электронной почты" v-model.trim="email">-->
<!--      </div>-->
      <div class="form__row">
        <textarea id="question" placeholder="Вопрос или пожелание" v-model.trim="question"/>
      </div>
      <div class="form__row">
        <label><input type="checkbox" id="confirm" v-model="confirm">Я согласен(на) на обработку персональных данных</label>
      </div>
      <input type="submit" value="Отправить">
    </form>
  </section>
</template>

<script>
import AppInput from '@/components/AppInput'
// import axios from 'axios'
export default {
  components: { AppInput },
  data () {
    return {
      fio: '',
      phone: '',
      email: '',
      question: '',
      confirm: false,
      errors: {
        fio: null,
        phone: null,
        email: null,
        question: null,
        confirm: null
      }
    }
  },
  methods: {
    formIsValid () {
      let isValid = true

      if (this.fio.length === 0) {
        this.errors.fio = 'Введите ФИО'
        isValid = false
      } else {
        this.errors.fio = null
      }
      if (this.phone.length === 0) {
        this.errors.phone = 'Введите номер телефона'
        isValid = false
      } else {
        this.errors.phone = null
      }
      if (this.email.length === 0) {
        this.errors.email = 'Введите свой email'
        isValid = false
      } else {
        this.errors.email = null
      }
      if (this.question.length === 0) {
        this.errors.question = 'Поле не должно быть пустым'
        isValid = false
      } else {
        this.errors.question = null
      }
      return isValid
    },
    submitHandler () {
      if (this.formIsValid()) {
        console.log('FIO', this.fio)
        console.log('phone', this.phone)
        console.log('email', this.email)
        console.log('question', this.question)
        console.log('Confirm', this.confirm)
      }
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
</style>
