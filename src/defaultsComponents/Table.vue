<template>
  <table>
    <thead>
      <tr>
        <th v-bind:key=j v-for="(th, j) in dataHeader">
          {{th}}
        </th>
      </tr>
    </thead>
  </table>
    <tbody>
      <tr v-bind:key=i v-for="(tr, i) in data">
        <td v-bind:key=j v-for="(td, j) in tr">
          {{td}}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>

export default {
  name: 'Table',
  props: {
    dataHeader: Array,
    data: Array,
  }
}
</script>

<style scoped>

</style>
