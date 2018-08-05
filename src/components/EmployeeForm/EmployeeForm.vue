<template>
  <div class="form-control form-group was-validated">
    <h3><label>Данные сотрудника</label></h3>
    <IDInput />
    <NameInput />
    <PhoneInput />
    <BirthdayInput />
    <RoleSelect />
    <IsArchiveCheckbox />
  </div>
</template>

<script>
import IDInput from './IDInput';
import NameInput from './NameInput.vue';
import PhoneInput from './PhoneInput';
import BirthdayInput from './BirthdayInput';
import RoleSelect from './RoleSelect.vue';
import IsArchiveCheckbox from './IsArchiveCheckbox.vue';

export default {
  name: 'EmployeeForm',
  components: {
    IDInput,
    NameInput,
    PhoneInput,
    BirthdayInput,
    RoleSelect,
    IsArchiveCheckbox
  }
}
</script>

<style scope>

</style>