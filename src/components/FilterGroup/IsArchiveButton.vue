<template>
  <button
    v-on:click="handleClick"
  >
    {{label}}
  </button>
</template>

<script>
export default {
  name: 'IsArchiveButton',
  props: {
    label: String,
    status: String,
  },
  methods: {
    handleClick() {
      this.$store.commit(
        'filter',
        {
          key: 'isArchive',
          value: (this.status === 'true'),
        }
      )
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
