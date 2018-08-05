<template>
  <div>
    <label>
      {{label}}
    </label>
    <input
      type="checkbox"
      v-on:change="handleChange"
    />
  </div>
</template>

<script>
export default {
  name: 'Input',
  props: {
    label: String,
  },
  methods: {
    handleChange(e) {
      console.log(e.target.checked)
    }
  }
}
</script>

<style scoped>

</style>
