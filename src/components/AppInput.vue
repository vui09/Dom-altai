<template>
  <div class="form__row" :class="{invalid: error}">
    <input
      type="text"
      :id="id"
      :placeholder="placeholder"
      value="modelValue"
      @input="change"
      >
    <small v-if="error">{{error}}</small>
  </div>
</template>

<script>
export default {
  emits: ['updateModelValue'],
  props: {
    modelValue: String,
    placeholder: String,
    error: String
  },
  methods: {
    change (event) {
      this.$emit('updateModelValue', event.target.value)
    }
  },
  data () {
    return {
      id: 'input-' + Math.random()
    }
  }
}
</script>

<style scoped>

</style>
