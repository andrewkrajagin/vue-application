<template>
  <div class="form-group form-control">
    <label
      for="search"
      class="control-label col-md-2"
    >
Поиск...
    </label>
    <div class="col-md-10">
      <input
        type="text"
        placeholder="Поиск..."
        id="search"
        class="form-control"
        v-bind:value="value"
        v-on:input="handleChange"
      />
    </div>
  </div>
</template>

<script>

export default {
  name: 'SearchForm',
  computed: {
    value() {
      return this.$store.state.props.find;
    }
  },
  methods: {
    handleChange(e) {
      this.$store.commit(
        'find',
        {value: e.target.value}
      )
    }
  }
};

</script>

<style scope>

</style>