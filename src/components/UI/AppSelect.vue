<template>
  <select
    name="app-select"
    id="app_select"
    :value="modelValue"
    @change="changeOption"
  >
    <option value="" disabled>Select option</option>
    <option
      v-for="option in options"
      :key="option.value"
      :value="option.value"
      >{{ option.name }}</option
    >
  </select>
</template>

<script>
export default {
  name: "app-select",
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    changeOption(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style></style>
