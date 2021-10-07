<template>
  <div class="dialog" v-if="show" @click="hideDialog">
    <div @click.stop class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import toggleMixin from "@/mixins/toggleMixin";

export default {
  name: "app-dialog",
  mixins: [toggleMixin],
};
</script>

<style scoped>
.dialog {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  background-color: rgba(0, 0, 0, 0.5);
}

.dialog__content {
  min-height: 50px;
  min-width: 300px;
  margin: auto;
  padding: 40px 25px;
  background: #fff;
  border-radius: 10px;
}
</style>
