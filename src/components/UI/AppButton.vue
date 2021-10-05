<template>
  <button class="btn">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "app-button",
};
</script>

<style scoped>
.btn {
  height: 36px;
  padding: 5px 10px;
  border: 1px solid rgb(99, 204, 181);
  border-radius: 5px;
  background: transparent;
  font-size: 1rem;
  cursor: pointer;
}
</style>
