<template>
  <button
    v-on:click="handleClick"
  >
    {{label}}
  </button>
</template>

<script>
export default {
  name: 'SortButton',
  props: {
    label: String,
    sortType: String
  },
  methods: {
    handleClick() {
      this.$store.commit('sort', {type: this.sortType})
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
