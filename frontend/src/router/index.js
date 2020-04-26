import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import DashMed from '../views/DashMed'
import DashPaciente from '../views/DashPaciente'
import AgendaMed from '../views/AgendaMed'
import AgendaPaciente from '../views/AgendaPaciente'
import Adm from '../views/Adm'

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/dashmed',
    name: 'DashMed',
    component: DashMed
  },
  {
    path: '/dashpaciente',
    name: 'DashPaciente',
    component: DashPaciente
  },
  {
    path: '/agendamed',
    name: 'AgendaMed',
    component: AgendaMed
  },
  {
    path: '/agendapaciente',
    name: 'AgendaPaciente',
    component: AgendaPaciente
  },
  {
    path: '/adm',
    name: 'Adm',
    component: Adm
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Register.vue")
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue")
  },
  {
    path: "/room/:id",
    name: "Room",
    component: () => import("../views/Room.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
