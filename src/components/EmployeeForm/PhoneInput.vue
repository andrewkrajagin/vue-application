<template>
  <div class="row">
    <label
      for="phone"
      class="col-md-3"
    >
Телефон
    </label>
    <input
      type="text"
      id="phone"
      placeholder="Телефон"
      class="form-control col-md-6"
      v-bind:value="phone"
      v-on:input="handleChange"
      required
    />
  </div>
</template>

<script>
export default {
  name: 'PhoneInput',
  computed: {
    phone() {
      return this.$store.state.employee.phone;
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
        console.error('Телефон - обязательное поле');
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
