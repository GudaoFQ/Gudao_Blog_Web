import Vue from 'vue'
import Router from 'vue-router'
import WelcomePage from '../components/page/WelcomePage'
import HomePage from '../components/page/HomePage'
import PersonalInfo from '../components/page/PersonalInfo'

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
    },
    {
      path: '/info',
      name: 'PersonalInfo',
      component: PersonalInfo
    }
  ]
})
