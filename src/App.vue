<template>
  <div class="app">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  components: {
    Navbar,
  },
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.app {
  padding: 15px;
  overflow: hidden;
}

.app__btns {
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
}
</style>
