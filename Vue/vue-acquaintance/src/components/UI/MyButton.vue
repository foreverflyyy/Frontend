<template>
  <button
    class="btn"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style scoped>

.btn {
  height: 30px;
  max-width: 100px;
}

</style>