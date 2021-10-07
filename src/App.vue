<template>
  <div class="app">
    <h1 style="text-align: center; margin-bottom: 30px;">Posts list App</h1>
    <div>
      <app-input v-model="searchQuery" placeholder="Search..." />
    </div>
    <div class="app__btns">
      <app-button @click="openDialog">Create post</app-button>
      <app-select v-model="selectedSort" :options="sortOptions" />
    </div>
    <app-dialog v-model:show="dialogVisible">
      <the-post-form @create="createPost"></the-post-form>
    </app-dialog>
    <the-post-list
      :posts="sortedAndSearchedPosts"
      @delete="removePost"
      v-if="!isPostLoading"
    />
    <div v-else>Loading...</div>
    <div ref="observer"></div>
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
      searchQuery: "",
      selectedSort: "",
      sortOptions: [
        { value: "title", name: "By name" },
        { value: "body", name: "By body" },
      ],
      page: 1,
      limit: 10,
      totalPages: 0,
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
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.posts = response.data;
      } catch (error) {
        console.log(error);
      } finally {
        this.isPostLoading = false;
      }
    },

    async loadMorePosts() {
      this.page += 1;
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );

        this.posts = [...this.posts, ...response.data];
      } catch (error) {
        console.log(error);
      }
    },
  },

  mounted() {
    this.fetchPosts();
    const options = {
      rootMargin: "0px",
      threshold: 1.0,
    };
    const callback = (entries) => {
      if (entries[0].isIntersecting && this.page < this.totalPages) {
        this.loadMorePosts();
      }
    };
    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer);
  },
  computed: {
    sortedPosts() {
      return [...this.posts].sort((post1, post2) => {
        return post1[this.selectedSort]?.localeCompare(
          post2[this.selectedSort]
        );
      });
    },
    sortedAndSearchedPosts() {
      return this.sortedPosts.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  watch: {},
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

.page__wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 10px;
}

.page__wrapper .page {
  display: flex;
  justify-content: center;
  min-width: 30px;
  min-height: 30px;
  padding: 5px;
  border: 1px solid rgb(99, 204, 181);
  border-radius: 8px;
}

.page__wrapper .page:not(:last-child) {
  margin-right: 10px;
}

.page__wrapper .page a {
  color: currentColor;
  text-decoration: none;
}

.page.current-page {
  border-color: transparent;
  background-color: #eee;
}
</style>
