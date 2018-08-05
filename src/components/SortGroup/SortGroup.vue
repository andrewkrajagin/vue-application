<template>
   <div class="form-control form-group">
     <h3><label>Сортировка</label></h3>
       <div class="container row">
         <SortButton
           v-for="({label, sortType}, i) in types"
           v-bind:label="label"
           v-bind:sortType="sortType"
           v-bind:key="i"
           class="btn btn-outline-primary col-md-4"
         />
       </div>
     <CancelSortButton class="btn btn-secondary"/>
   </div>
</template>

<script>
import SortButton from './SortButton.vue';
import CancelSortButton from './CancelSortButton.vue';
import sortData from './sortData';

export default {
  name: 'SortGroupe',
  data() {
    return {
      types: sortData,
    }
  },
  components: {
    SortButton,
    CancelSortButton,
  },
}
</script>

<style scoped>
div {
  font-size: 20px;
}
</style>
