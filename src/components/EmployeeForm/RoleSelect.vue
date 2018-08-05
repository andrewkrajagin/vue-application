<template>
  <div class="row">
    <label
      for="role"
      class="col-md-3"
    >Должность</label>
    <select
      class="custom-select col-md-6"
      v-bind:value="role"
      v-on:change="handleChange"
    >
      <option selected disabled>Должность</option>
      <option
        v-for="(role, i) in roles"
        v-bind:key="i"
        v-bind:value="role"
      >
        {{ i+1 }}. {{ role }}
      </option>
    </select>
  </div>
</template>

<script>
import rolesRu from '../../rolesRu';

export default {
  name: 'RoleSelect',
  data() {
    return {
      roles: Object.values(rolesRu),
    }
  },
  computed: {
    role() {
      return rolesRu[this.$store.state.employee.role];
    }
  },
  methods: {
    handleChange() {
      
    }
  }
}
</script>

<style scoped>
select, label {
  font-size: 20px;
}

</style>
