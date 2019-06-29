import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

export default new Router({
  mode: 'hash',  //history   hash
  base: process.env.BASE_URL,
  routes: [{
      path: '/help',
      name: 'secrecy',
      component: () => import('@/views/help.vue')
    },
		{
			path: '/helpc/:id?',
			name: 'helpc',
			component: () => import('@/views/helpc.vue')
		},
		{
      path: '/storcount',
      name: 'storcount',
      component: () => import('@/views/storeCount.vue')
    },{
      path: '/longlist',
      name: 'longlist',
      component: () => import('@/views/longList.vue')
    },
		{
      path: '/editor',
      name: 'editor',
      component: () => import('@/views/QuillEditor.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
    },
		{
      path: '/video',
      name: 'video',
      component: () => import('@/views/video.vue')
    }
  ]
})
