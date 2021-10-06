<template>
  <div class="app">
    <h1>Posts</h1>
    <app-button @click="openDialog">Create post</app-button>
    <app-dialog v-model:show="dialogVisible">
      <the-post-form @create="createPost"></the-post-form>
    </app-dialog>
    <the-post-list :posts="posts" @delete="removePost"></the-post-list>
  </div>
</template>

<script>
import ThePostForm from "@/components/ThePostForm";
import ThePostList from "@/components/ThePostList";

export default {
  components: {
    ThePostForm,
    ThePostList,
  },
  data() {
    return {
      posts: [
        {
          id: 1,
          title: "JavaScript",
          body: "Learn basic Javascript",
        },
        {
          id: 2,
          title: "VueJS",
          body: "Learn VueJs and create app",
        },
        {
          id: 3,
          title: "NuxtJS",
          body: "NuxtJS with new functionallity",
        },
      ],
      dialogVisible: false,
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
