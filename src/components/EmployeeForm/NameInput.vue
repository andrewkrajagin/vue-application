<template>
  <div class="row">
    <label
      for="name"
      class="col-md-3"
    >
Имя
    </label>
    <input
      type="text"
      id="name"
      placeholder="Имя"
      class="form-control col-md-6"
      v-bind:value="name"
      v-on:input="handleChange"
      required
    />
  </div>
</template>

<script>
export default {
  name: 'NameInput',
  computed: {
    name() {
      return this.$store.state.employee.name;
    }
  },
  methods: {
    handleChange(e) {
      const value = [];
      e.target.value.split('').forEach((s) => {
        value.push((s !== ' ') ? ((Number.isNaN(s * 1)) ? s : '') : ' ');
      });
      if (e.target.value === '') {
        e.target.style.border = '1px solid red';
        console.error('Имя - обязательное поле');
      } else e.target.style.border = '1px solid #ced4da';
      e.target.value = value.join('');
    }
  }
}
</script>

<style scoped>
input, label {
  font-size: 20px;
}
</style>
