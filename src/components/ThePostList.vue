<template>
  <div v-if="posts.length > 0">
    <h3>List</h3>
    <transition-group name="post-list">
      <the-post-list-item
        :post="post"
        v-for="post in posts"
        :key="post.id"
        @delete="deletePost(post)"
      />
    </transition-group>
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

<style scoped>
.list-item {
  display: inline-block;
  margin-right: 10px;
}

.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.4s ease;
}

.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(100px);
}

.post-list-move {
  transition: transform 0.4s ease;
}
</style>
