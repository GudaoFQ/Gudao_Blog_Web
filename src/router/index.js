import Vue from 'vue'
import Router from 'vue-router'
import WelcomePage from '../components/page/WelcomePage'
import HomePage from '../components/page/HomePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'WelcomePage',
      component: WelcomePage
    },
    {
      path: '/home',
      name: 'HomePage',
      component: HomePage
    }
  ]
})
