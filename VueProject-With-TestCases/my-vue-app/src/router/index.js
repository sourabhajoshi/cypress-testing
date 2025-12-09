import {createRouter, createWebHistory} from "vue-router";

import HomePage from "../pages/HomePage.vue";
import AboutPage from "../pages/AboutPage.vue";
import ContactPage from "../pages/ContactPage.vue";
import ProductPage from "../pages/ProductPage.vue";
import ProductDetails from "../pages/ProductDetails.vue";

const routes = [
  {path: "/", component: HomePage},
  {path: "/about", component: AboutPage},
  {path: "/contact", component: ContactPage},
  {path: "/product", component: ProductPage},         // /product?id=10
  {path: "/product/:id", component: ProductDetails},  // /product/10
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
