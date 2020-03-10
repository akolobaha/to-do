import Vue from 'vue'
import VueRouter from 'vue-router'
import TasksList from '../components/do-tasks-list'
import CreateTask from '../components/do-create-task'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: TasksList
  },
  {
    path: '/add',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    name: 'Add',
    component: CreateTask
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
