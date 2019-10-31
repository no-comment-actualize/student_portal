import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import StudentsShow from "../views/StudentsShow.vue";
import EducationsEdit from "../views/EducationsEdit.vue";
import ExperiencesEdit from "../views/ExperiencesEdit.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
  },

  {
    path: "/login",
    name: "login",
    component: Login
  },
  {
    path: "/logout",
    name: "logout",
    component: Logout
  },
  {
    path: "/experiences/:id/edit",
    name: "experiences-edit",
    component: ExperiencesEdit
  },
  {
    path: "/educations/:id/edit",
    name: "educations-edit",
    component: EducationsEdit
  },
  {
    path: "/students/:id",
    name: "students-show",
    component: StudentsShow
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
