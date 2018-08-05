<template>
  <select
    v-on:change="handleChange"
  >
    <option
      v-bind:key=i
      v-for="(option, i) in options"
      v-bind:value="option"
    >
      {{i+1}}. {{ option }}
    </option>
  </select>
</template>

<script>
export default {
  name: 'Select',
  props: {
    options: Array
  },
  methods: {
    handleChange(e) {
      console.log(e.target.value)
    }
  }
}
</script>

<style scoped>

</style>
