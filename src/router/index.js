import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Home2 from '../views/Home2.vue'
import Pokemon from '../views/Pokemon'
import Bitcoin from '../views/Bitcoin'
import Todo from '../views/Todo'
import CovidD from '../views/CovidD'
import UserData from '../views/UserData'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/home2',
    name: 'Home2',
    component: Home2
  },
  {
    path: '/pokemon/:pokemon',
    name: 'Pokemon',
    component: Pokemon
  },  
  {
    path:'/bitcoin',
    name:'Bitcoin',
    component:Bitcoin
  },
  {
    path:'/todo',
    name:'Todo',
    component:Todo
  },
  {
    path:'/covidd',
    name:'CovidD',
    component:CovidD
  },
  {
    path:'/userData',
    name:'UserData',
    component:UserData
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
