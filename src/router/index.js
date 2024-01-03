import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../views/Home.vue";
import Products from "../views/products/Products.vue";
import Distributors from "../views/distributors/Distributors.vue";
import SearchProduct from "../views/products/SearchProduct.vue";
import SearchDistributor from "../views/distributors/SearchDistributor.vue";
import CreateProduct from "../views/products/CreateProduct.vue";
import EditProduct from "../views/products/EditProduct.vue";
import CreateDistributor from "../views/distributors/CreateDistributor.vue";
import EditDistributor from "../views/distributors/EditDistributor.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/products", component: Products },
  { path: "/distributors", component: Distributors },
  { path: "/products/search", component: SearchProduct },
  { path: "/distributors/search", component: SearchDistributor },
  { path: "/products/create", component: CreateProduct },
  { path: "/products/put", component: EditProduct },
  { path: "/distributors/create", component: CreateDistributor },
  { path: "/distributors/put", component: EditDistributor },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
