import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/evaluacion',
    name: 'evaluacionn',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/EvaluacionView.vue')
    }
  },
  {
    path: '/evaluacion/tipodeevaluacion',
    name: 'tipodeevaluacion',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/TipoDeEvaluacionView.vue')
    }
  },
  {
    path: '/evaluacion/tipodeevaluacion/opcionmultiple',
    name: 'opcionmultiple',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/OpcionMultipleView.vue')
    }
  },
  {
    path: '/evaluacion/tipodeevaluacion/falsoyverdadero',
    name: 'falsoyverdadero',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/FalsoYVerdaderoView.vue')
    }
  },
  {
    path: '/evaluacion/tipodeevaluacion/completarenunciado',
    name: 'completarenunciado',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/CompletarEnunciadoView.vue')
    }
  },
  {
    path: '/evaluacion/tipodeevaluacion/unirconlineas',
    name: 'unirconlineas',
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/UnirConLineasView.vue')
    }
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
