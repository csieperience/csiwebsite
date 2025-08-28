import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/views/HomePage.vue";
import ContactPage from "@/views/ContactPage.vue";
// import Privacy from "@/views/Privacy.vue";
// import Terms from "@/views/Terms.vue";
const routes = [
  {
    path: "/",
    component: HomePage,
  },
  {
    path: "/contact",
    component: ContactPage,
  },
//   {
//     path: "/privacy-policy",
//     component: Privacy,
//   },
//   {
//     path: "/terms-and-conditions",
//     component: Terms,
//   },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
