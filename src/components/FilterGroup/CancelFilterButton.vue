<template>
  <button
    v-on:click="handleClick"
  >
    Отменить фильтр
  </button>
</template>

<script>
export default {
  name: 'CancelFilterButton',
  methods: {
    handleClick() {
      this.$store.commit('cancelFilter')
    }
  }
}
</script>

<style scoped>
button {
  font-size: 20px;
  cursor: pointer;
}
</style>
