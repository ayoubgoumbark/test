/* eslint-disable no-unused-vars */
import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: () =>
      import(/* webpackChunkName: "Main" */ "../components/Main/Main.vue"),
  }
 
];

const router = new VueRouter({
  mode: "history" /* abstract */,
  base: process.env.BASE_URL,
  routes,
});


export default router;
