<template>
  <div class="app">
    <h1>Posts</h1>
    <div class="app__btns">
      <app-button @click="openDialog">Create post</app-button>
      <app-select v-model="selectedSort" :options="sortOptions" />
    </div>
    <app-dialog v-model:show="dialogVisible">
      <the-post-form @create="createPost"></the-post-form>
    </app-dialog>
    <the-post-list
      :posts="sortedPosts"
      @delete="removePost"
      v-if="!isPostLoading"
    />
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
      selectedSort: "",
      sortOptions: [
        { value: "title", name: "By name" },
        { value: "body", name: "By body" },
      ],
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
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => {
        return post1[this.selectedSort]?.localeCompare(
          post2[this.selectedSort]
        );
      });
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
  overflow: hidden;
}

.app__btns {
  display: flex;
  justify-content: space-between;
  padding: 15px 0;
}
</style>
