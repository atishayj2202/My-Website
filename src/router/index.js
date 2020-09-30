import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home'
import Languages from '../components/Languages'
import Error from '../components/Error'
import contact from '../components/contact'
import poker from '../components/poker'
import jarvis from '../components/jarvis'
import calculator from '../components/calculator'
import library from '../components/library'
import FlutterBuild from '../components/FlutterBuild'
import webs from '../components/webs'
import Anything from '../components/Anything'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/langs',
      name: 'Languages',
      component: Languages
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    },
    {
      path: '/projects/poker',
      name: 'poker',
      component: poker
    },
    {
      path: '/projects/jarvis',
      name: 'jarvis',
      component: jarvis
    },
    {
      path: '/projects/calculator',
      name: 'calculator',
      component: calculator
    },
    {
      path: '/projects/library',
      name: 'library',
      component: library
    },
    {
      path: '/projects/flutter-builder',
      name: 'FlutterBuild',
      component: FlutterBuild
    },
    {
      path: '/projects/pwebsite',
      name: 'webs',
      component: webs
    },
    {
      path: '/anything',
      name: 'anything',
      component: Anything
    },
    {
      path: '*',
      name: 'Error',
      component: Error
    }
  ],
  mode: 'history'
})
