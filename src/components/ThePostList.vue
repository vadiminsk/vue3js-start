<template>
  <div v-if="posts.length > 0">
    <h3>List</h3>
    <the-post-list-item
      :post="post"
      v-for="post in posts"
      :key="post.id"
      @delete="deletePost(post)"
    />
  </div>
  <div v-else>
    Nothing todo
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

  methods: {
    deletePost(post) {
      this.$emit("delete", post);
    },
  },
};
</script>

<style scoped></style>
