<template>
  <div class="form-control form-group">
    <h3><label>Фильтрация</label></h3>
    <div class="container row">
      <label class="control-label col-md-4">По должности</label>
      <div class="row col-md-8">
        <RoleButton
          v-for="role in roles"
          v-bind:label="role"
          v-bind:key="role"
          class="btn btn-outline-primary col-md-4"
        />
      </div>
    </div>
    <div  class="container row">
      <label class="control-label col-md-4">По статусу</label>
      <div class="row col-md-8">
        <IsArchiveButton
          v-for="([status, label]) in statuses"
          v-bind:label="label"
          v-bind:status="status"
          v-bind:key="status"
          class="btn btn-outline-primary col-md-6"
        />
      </div>
    </div>
    <CancelFilterButton class="btn btn-secondary" />
  </div>
</template>

<script>
import RoleButton from './RoleButton.vue';
import IsArchiveButton from './IsArchiveButton.vue';
import CancelFilterButton from './CancelFilterButton.vue';
import rolesRu from '../../rolesRu';
import isArchiveRu from '../../isArchiveRu';

export default {
  name: 'FilterGroupe',
  data() {
    return {
      roles: Object.values(rolesRu),
      statuses: Object.entries(isArchiveRu),
    }
  },
  components: {
    RoleButton,
    IsArchiveButton,
    CancelFilterButton,
  },
}
</script>

<style scoped>
div {
  font-size: 20px;
}
</style>
