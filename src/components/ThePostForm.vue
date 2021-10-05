<template>
  <form @click.prevent class="app-form">
    <h3>Create new post</h3>
    <div class="form-item">
      <label for="input-title">
        <input
          v-model="post.title"
          id="input-title"
          type="text"
          placeholder="Post title"
        />
      </label>
    </div>
    <div class="form-item">
      <label for="input-body">
        <input
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
import AppButton from "@/components/UI/AppButton";
export default {
  components: {
    AppButton,
  },
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

.app-form input {
  height: 48px;
  width: 100%;
  padding: 10px 15px;
  margin-bottom: 1rem;
  border: 1px solid rgb(99, 204, 181);
}

.app-form .btn {
  align-self: flex-end;
}
</style>
