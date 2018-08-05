<template>
  <div class="row">
    <label
      for="id"
      class="col-md-3"
    >
ИД
    </label>
    <input
      type="text"
      id="id"
      placeholder="ИД"
      class="form-control col-md-6"
      v-bind:value="id"
      disabled
    />
  </div>
</template>

<script>
export default {
  name: 'IDInput',
  computed: {
    id() {
      return this.$store.state.employee.id;
    }
  },
}
</script>

<style scoped>
input, label {
  font-size: 20px;
}
</style>
