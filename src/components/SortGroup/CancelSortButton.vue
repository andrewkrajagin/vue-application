<template>
  <button
    v-on:click="handleClick"
  >
    Отменить сортировку
  </button>
</template>

<script>
export default {
  name: 'CancelSortButton',
  methods: {
    handleClick() {
      this.$store.commit('cancelSort')
    }
  }
}
</script>

<style scoped>
button {
  font-size: 20px;
  cursor: pointer
}
</style>
