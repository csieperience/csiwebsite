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
  scrollBehavior(to) {
    if (to.hash) {
      return {
        el: to.hash,   // scroll to element with matching id
        behavior: 'smooth',
      }
    }
    return { top: 0 }
  },
});

export default router;
