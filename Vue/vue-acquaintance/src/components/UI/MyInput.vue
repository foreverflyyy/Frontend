<template>
  <input
      class="input"
      :value="value"
      @input="updateInput"
  >
</template>

<script>
export default {
  name: 'my-input',
  props: {
    value: [String, Number]
  },
  methods: {
    updateInput(event){
      this.$emit('update:value', event.target.value)
    }
  }
}
</script>

<style scoped>

.input {
  margin-bottom: 7px;
  min-height: 30px;
  max-width: 300px;
}

</style>