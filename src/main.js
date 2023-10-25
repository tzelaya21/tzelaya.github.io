import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import './css/global.css'

const router = createRouter({
  history: createWebHistory(),
  // eslint-disable-next-line no-unused-vars
  scrollBehavior(to, from, savedPosition) {
    return { top: 0, behavior: 'smooth' }
  },
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import('./views/HomeView/HomeView.vue')
    },
    {
      path: '/biography',
      name: 'Biography',
      component: () => import('./views/BiographyView/BiographyView.vue')
    },
    {
      path: '/hobbies',
      name: 'Hobbies',
      component: () => import('./views/HobbiesView/HobbiesView.vue')
    },
    {
      path: '/projects',
      name: 'Projects',
      component: () => import('./views/ProjectsView/ProjectsView.vue')
    },
    {
      path: '/photography',
      name: 'Photography',
      component: () => import('./views/PhotographyView/PhotographyView.vue')
    },
    {
      path: '/contact',
      name: 'Contact',
      component: () => import('./views/ContactView/ContactView.vue')
    },
  ]
})

const app = createApp(App)

app.use(router)
app.mount('#app')
