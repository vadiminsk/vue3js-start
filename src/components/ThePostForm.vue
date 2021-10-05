<template>
  <form @click.prevent class="app-form">
    <h3>Create new post</h3>
    <div class="form-item">
      <label for="input-title">
        <app-input
          v-model="post.title"
          id="input-title"
          placeholder="Post title"
        />
      </label>
    </div>
    <div class="form-item">
      <label for="input-body">
        <app-input
          v-model="post.body"
          id="input-body"
          type="text"
          placeholder="Post body"
        />
      </label>
    </div>
    <app-button @click="createPost">Add post</app-button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = { title: "", body: "" };
    },
  },
};
</script>

<style scoped>
.app-form {
  display: flex;
  flex-direction: column;
}

.app-form h3 {
  margin-bottom: 2rem;
}

.app-form .btn {
  align-self: flex-end;
}
</style>
