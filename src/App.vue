<template>
  <div class="app">
    <the-post-form @create="createPost"></the-post-form>
    <the-post-list :posts="posts"></the-post-list>
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
    };
  },

  methods: {
    createPost(post) {
      this.posts.push(post);
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
