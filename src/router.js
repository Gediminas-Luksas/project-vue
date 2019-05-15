import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home'
import PostsList from './views/PostsList'
import PostsShow from './views/PostsShow'
import PostsCreate from './views/PostsCreate'
import Login from './views/Login'
import Register from './views/Register'
import Profiles from './views/Profiles'
import Profile from './views/Profile'
import Dashboard from './views/Dashboard'
import NotFoundComponent from './views/NotFoundComponent'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/posts',
      name: 'posts-list',
      component: PostsList
    },
    {
      path: '/posts/:id',
      name: 'posts-show',
      component: PostsShow,
      props: true
    },
    {
      path: '/post/create',
      name: 'posts-create',
      component: PostsCreate
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/profiles',
      name: 'profiles',
      component: Profiles
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard
    },
    {
      path: '*',
      component: NotFoundComponent
    }
  ]
})
