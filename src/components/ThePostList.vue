<template>
  <div>
    <h3>List</h3>
    <the-post-list-item :post="post" v-for="post in posts" :key="post.id" />
  </div>
</template>

<script>
import ThePostListItem from "./ThePostListItem.vue";
export default {
  components: {
    ThePostListItem,
  },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped></style>
