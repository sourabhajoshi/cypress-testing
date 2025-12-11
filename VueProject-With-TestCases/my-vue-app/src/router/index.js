import {createRouter, createWebHistory} from "vue-router";
import NavigationPage from "@/pages/NavigationPage.vue";
import HomePage from "@/pages/HomePage.vue";


const routes = [
  {path: "/", component: HomePage},
  {
    path: "/navigation", component: NavigationPage, children: [
      {path: "visit", component: import("@/components/Navigation/VisitCommand.vue")},
      {path: "url", component: import("@/components/Navigation/URLCommand.vue")}
    ]
  }
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
