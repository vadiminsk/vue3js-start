<template>
  <div class="app">
    <h1>Posts</h1>
    <app-button @click="openDialog" style="margin: 20px 0"
      >Create post</app-button
    >
    <app-dialog v-model:show="dialogVisible">
      <the-post-form @create="createPost"></the-post-form>
    </app-dialog>
    <the-post-list :posts="posts" @delete="removePost" v-if="!isPostLoading" />
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import ThePostForm from "@/components/ThePostForm";
import ThePostList from "@/components/ThePostList";
import axios from "axios";

export default {
  components: {
    ThePostForm,
    ThePostList,
  },
  data() {
    return {
      posts: [],
      dialogVisible: false,
      isPostLoading: false,
    };
  },

  methods: {
    createPost(post) {
      this.posts.push(post);
      this.dialogVisible = false;
    },

    openDialog() {
      this.dialogVisible = true;
    },

    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },

    async fetchPosts() {
      try {
        this.isPostLoading = true;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );
        this.posts = response.data;
      } catch (error) {
        console.log(error);
      } finally {
        this.isPostLoading = false;
      }
    },
  },

  mounted() {
    this.fetchPosts();
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
}
</style>
