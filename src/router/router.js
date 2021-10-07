import Main from "@/pages/Main";
import PostsPage from "@/pages/PostsPage";
import About from "@/pages/About";
import PostPageItem from "@/pages/PostPageItem";
import PostsPageStore from "@/pages/PostsPageStore";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: Main,
  },
  {
    path: "/posts",
    component: PostsPage,
  },
  {
    path: "/about",
    component: About,
  },
  {
    path: "/posts/:id",
    component: PostPageItem,
  },
  {
    path: "/store",
    component: PostsPageStore,
  },
];

const router = createRouter({
  routes,
  history: createWebHistory(),
});

export default router;
