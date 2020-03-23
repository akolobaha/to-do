import Vue from 'vue'
import VueRouter from 'vue-router'
import TasksList from '../components/tasks/do-tasks-list'
import FinishedTask from '../components/tasks/do-task-finished'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'All',
    title: 'Все задачи',
    component: TasksList
  },
  
  {
    path: '/finished',
    name: 'Finished',
    title: 'Завершенные задачи',
    component: FinishedTask
  },
  // {
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
