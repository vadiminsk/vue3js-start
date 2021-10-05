<template>
  <input type="text" :value="modelValue" @input="updateInput" />
</template>

<script>
export default {
  name: "app-input",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
input {
  height: 48px;
  width: 100%;
  padding: 10px 15px;
  margin-bottom: 1rem;
  border: 1px solid rgb(99, 204, 181);
}
</style>
