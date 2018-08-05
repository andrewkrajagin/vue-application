<template>
  <table class="table table-bordered table-hover">
    <thead class="tableHeader">
      <tr>
        <th
          v-for="({label, title}, i) in headerData"
          v-bind:key="i"
          v-bind:title="title"
        >
          {{label}}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr
        v-for="(employee, i) in employees"
        v-bind:key="i"
        v-on:click="() => handleClick(employee)"
      >
        <td
          v-for="([key, value]) in Object.entries(employee)"
          v-bind:key="key"
        >
          {{setValue(key, value)}}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import rolesRu from '../../rolesRu';
import isArchiveRu from '../../isArchiveRu';
import setData from '../../constants/setData/setData';
import headerData from './headerData';

export default {
  name: 'EmployeeTable',
  data() {
    return {
      headerData
    }
  },
  computed: {
    employees() {
      return setData(
        this.$store.state.employees,
        this.$store.state.props,
        {
          role: rolesRu,
          isArchive: isArchiveRu
        }
      )
    }
  },
  methods: {
    setValue(key, value) {
      let item;
      if (key === 'isArchive') item = isArchiveRu[value]
      else if (key === 'role') item = rolesRu[value]
      else item = value;
      return item;
    },
    handleClick(obj) {
      this.$store.commit('setEmployee', {...obj});
    }
  }
}
</script>

<style scoped>
div {
  width: 800px;
  height: 400px;
  //overflow: scroll;
}
table{
  text-align: center;
  width: max-content;
}
thead, tr:hover {
  background: rgb(245, 245, 245);
}
td, th {
  border: 1px solid;
}
</style>
