<template>
  <div>
    <div>
      <app-input
        placeholder="Search..."
        :model-value="searchQuery"
        @update:model-value="setSearchQuery"
      />
    </div>
    <div class="app__btns">
      <app-button @click="openDialog">Create post</app-button>
      <app-select
        :model-value="selectedSort"
        @update:model-value="setSelectedSort"
        :options="sortOptions"
      />
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
    <div v-intersection="loadMorePosts" class="observer"></div>
  </div>
</template>

<script>
import ThePostForm from "@/components/ThePostForm";
import ThePostList from "@/components/ThePostList";
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";

export default {
  components: {
    ThePostForm,
    ThePostList,
  },
  data() {
    return {
      dialogVisible: false,
    };
  },

  methods: {
    ...mapMutations({
      setPage: "post/setPage",
      setSearchQuery: "post/setSearchQuery",
      setSelectedSort: "post/setSelectedSort",
    }),
    ...mapActions({
      loadMorePosts: "post/loadMorePosts",
      fetchPosts: "post/fetchPosts",
    }),

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

  mounted() {
    this.fetchPosts();
  },
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      isPostLoading: (state) => state.post.isPostLoading,
      searchQuery: (state) => state.post.searchQuery,
      selectedSort: (state) => state.post.selectedSort,
      sortOptions: (state) => state.post.sortOptions,
      page: (state) => state.post.page,
      limit: (state) => state.post.limit,
      totalPages: (state) => state.post.totalPages,
    }),
    ...mapGetters({
      sortedPosts: "post/sortedPosts",
      sortedAndSearchedPosts: "post/sortedAndSearchedPosts",
    }),
  },
};
</script>

<style>
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
