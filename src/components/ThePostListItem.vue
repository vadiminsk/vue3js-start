<template>
  <div class="post">
    <div>
      <strong>{{ post.title }}</strong>
      <p>{{ post.body }}</p>
    </div>
    <div class="post__btns">
      <app-button>Delete</app-button>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped>
.post {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 15px;
  margin: 1.5rem 0;
  border: 2px solid rgb(99, 204, 181);
  border-radius: 5px;
}
</style>
