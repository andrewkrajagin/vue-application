<template>
  <button
    v-on:click="handleClick"
  >
    {{label}}
  </button>
</template>

<script>
import rolesEng from '../../rolesEng';

export default {
  name: 'RoleButton',
  props: {
    label: String,
  },
  methods: {
    handleClick() {
      this.$store.commit(
        'filter',
        {
          key: 'role',
          value: rolesEng[this.label.toLowerCase()]
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
