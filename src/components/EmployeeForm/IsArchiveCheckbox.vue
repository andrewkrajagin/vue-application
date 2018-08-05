<template>
  <div class="row">
    <label
      class="col-md-3"
      for="checkbox"
    >
      В архиве
    </label>
    <input
      type="checkbox"
      id="checkbox"
      class="col-md-1"
      v-bind:checked="isArchive"
    />
  </div>
</template>

<script>
export default {
  name: 'IsArchiveCheckbox',
  computed: {
    isArchive() {
      return this.$store.state.employee.isArchive;
    }
  },
}
</script>

<style scoped>
label{
  font-size: 20px;
}
input[type="checkbox"] {
  width: 30px;
  height: 30px;
}
</style>
