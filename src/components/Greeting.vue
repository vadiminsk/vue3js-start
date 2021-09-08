<template>
  <p v-if="age > 25">
    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad rem dolore id.
    Corporis earum odio, totam hic provident nam, minus asperiores natus alias,
    laboriosam magni quidem. Fugiat itaque laboriosam perspiciatis!
  </p>
  <p v-else>{{ msg }}</p>
</template>

<script>
export default {
  name: 'Greeting',
  props: ['age'],
  data() {
    return {
      msg: 'Hello World',
    };
  },
};
</script>
