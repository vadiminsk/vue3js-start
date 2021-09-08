<template>
  <button type="button" @click="updateAge">Update the age</button>
  <p>The user is {{ age }} years old</p>
  <p>{{ ageDoubled }}</p>
</template>

<script>
export default {
  name: 'User',
  props: ['age'],
  emits: ['age-change'],
  computed: {
    ageDoubled() {
      return this.age * 2;
    },
  },
  methods: {
    updateAge() {
      this.$emit('age-change');
    },
  },
};
</script>

<style></style>
