<template>
  <div id="app" class="container-fluid row">
    <div class="col-md-6">
      <EmployeeTable />
    </div>
    <div class="col-md-4">
      <SearchForm />
      <FilterGroup />
      <SortGroup />
      <EmployeeForm />
    </div>
  </div>
</template>

<script>
import EmployeeTable from './components/EmployeeTable/EmployeeTable';
import FilterGroup from './components/FilterGroup/FilterGroup';
import SortGroup from './components/SortGroup/SortGroup';
import SearchForm from './components/SearchForm/SearchForm.vue';
import EmployeeForm from './components/EmployeeForm/EmployeeForm';
export default {
  name: 'App',
  components: {
    EmployeeTable,
    FilterGroup,
    SortGroup,
    SearchForm,
    EmployeeForm
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 20px;
  display: flex;
}
</style>
