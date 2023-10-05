import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Languages from '@/views/Languages.vue'
import contact from '@/views/contact.vue'
import poker from '@/views/poker.vue'
import jarvis from '@/views/jarvis.vue'
import calculator from '@/views/calculator.vue'
import library from '@/views/library.vue'
import FlutterBuild from '@/views/FlutterBuild.vue'
import webs from '@/views/webs.vue'
import Anything from '@/views/Anything.vue'
import Error from '@/views/Error.vue'
const routes = [
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
    path: '/:catchAll(.*)',
    name: 'Error',
    component: Error
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
