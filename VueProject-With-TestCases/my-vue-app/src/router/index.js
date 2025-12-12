import {createRouter, createWebHistory} from "vue-router";
import NavigationPage from "@/pages/NavigationPage.vue";
import HomePage from "@/pages/HomePage.vue";
import LocationPage from "@/pages/LocationPage.vue";
import ActionsPage from "@/pages/ActionsPage.vue";


const routes = [
  {path: "/", component: HomePage},
  {
    path: "/navigation", component: NavigationPage, children: [
      {path: "visit", component: import("@/components/Navigation/VisitCommand.vue")},
      {path: "url", component: import("@/components/Navigation/URLCommand.vue")}
    ]
  },
  {
    path: "/locating", component: LocationPage, children: [
      {path: "basic", component: import("@/components/LocatingElement/BasicElement.vue")},
      {path: "mid", component: import("@/components/LocatingElement/MidElement.vue")},
      {path: "advance", component: import("@/components/LocatingElement/AdvancedElement.vue")}
    ]
  },
  {
    path: "/action", component: ActionsPage, children: [
      {path: "basic", component: import("@/components/ActionElement/BasicElement.vue")},
      {path: "mid", component: import("@/components/ActionElement/MidElement.vue")},
      {path: "advance", component: import("@/components/ActionElement/AdvancedElement.vue")}
    ]
  }
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
