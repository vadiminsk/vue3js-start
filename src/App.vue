<template>
  <div class="root">
    <select v-model="componentName" name="selectpage" id="selectpage">
      <option value="Home">Home</option>
      <option value="About">About</option>
    </select>

    <keep-alive><component :is="componentName"></component></keep-alive>
  </div>
</template>

<script>
import About from './components/About.vue';
import Home from './components/Home.vue';

export default {
  name: 'App',
  components: {
    Home,
    About,
  },

  data() {
    return {
      componentName: 'Home',
    };
  },
};
</script>
