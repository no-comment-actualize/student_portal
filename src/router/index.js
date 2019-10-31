import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import Logout from "../views/Logout.vue";
import StudentsShow from "../views/StudentsShow.vue";
import EducationsEdit from "../views/EducationsEdit.vue";
import ExperiencesEdit from "../views/ExperiencesEdit.vue";
import EducationsNew from "../views/EducationsNew.vue";
import ExperiencesNew from "../views/ExperiencesNew.vue";
import CapstonesNew from "../views/CapstonesNew.vue";
import SkillsNew from "../views/SkillsNew.vue";
import StudentsEdit from "../views/StudentsEdit.vue";
import CapstonesEdit from "../views/CapstonesEdit.vue";
import SkillsEdit from "../views/SkillsEdit.vue";

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
    path: "/experiences/new",
    name: "experiences-new",
    component: ExperiencesNew
  },
  {
    path: "/educations/new",
    name: "educations-new",
    component: EducationsNew
  },
  {
    path: "/capstones/new",
    name: "capstones-new",
    component: CapstonesNew
  },
  {
    path: "/skills/new",
    name: "skills-new",
    component: SkillsNew
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
  },
  {
    path: "/students/:id/edit",
    name: "students-edit",
    component: StudentsEdit
  },
  {
    path: "/capstones/:id/edit",
    name: "capstones-edit",
    component: CapstonesEdit
  },
  {
    path: "/skills/:id/edit",
    name: "skills-edit",
    component: SkillsEdit
  },
  {
    path: "/skills/new",
    name: "skills-new",
    component: SkillsNew
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
