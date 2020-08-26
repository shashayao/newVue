import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home'
import Category from '@/views/category/Category'
import Cart from '@/views/cart/Cart'
import Me from '@/views/me/Me'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      redirect: '/home'
    },
    {
      path: '/home',
      // 指定的组件
      component:Home
    },
    {
      path: '/category',
      component:Category
    },
    {
      path: '/cart',
      component:Cart
    },
    {
      path: '/me',
      component:Me
    }
  ]
})
