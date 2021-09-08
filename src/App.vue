<template>
  <div class="wrapper">
    <h3>Hey!</h3>
    <greeting :age="age"></greeting>
    <user :age="age" @age-change="age++"></user>
  </div>
</template>

<script>
import Greeting from './components/Greeting.vue';
import User from './components/User.vue';

export default {
  name: 'App',
  components: {
    Greeting,
    User,
  },

  data() {
    return {
      age: 20,
    };
  },
};
</script>
