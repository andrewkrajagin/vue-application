<template>
  <div class="row">
    <label
      for="birthday"
      class="col-md-3"
    >
Дата рождения
    </label>
    <input
      type="text"
      id="birthday"
      placeholder="Дата"
      class="form-control col-md-6"
      v-bind:value="birthday"
      v-on:input="handleChange"
      required
    />
  </div>
</template>

<script>
export default {
  name: 'BirthdayInput',
  computed: {
    birthday() {
      return this.$store.state.employee.birthday;
    }
  },
  methods: {
    handleChange(e) {
      const value = [];
      e.target.value.split('').forEach((s) => {
        value.push((s !== ' ') ? ((!Number.isNaN(s * 1)) ? s : '') : ' ');
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
