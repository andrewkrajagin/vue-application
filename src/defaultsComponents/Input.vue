<template>
  <input type="text" v-on:input="handleChange" />
</template>

<script>
export default {
  name: 'Input',
  methods: {
    handleChange(e) {
      console.log(e.target.value)
    }
  }
}
</script>

<style scoped>

</style>
