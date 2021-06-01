import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/Home',
    component: () => import('@/views/Home/index.vue'),
    meta: {
      title: '主页'
    }
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('@/views/Login/index.vue'),
    meta: {
      title: '登录'
    }
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import('@/views/Home/index.vue'),
    meta: {
      title: '主页'
    }
  },
  {
    path: '/Detail',
    name: 'Detail',
    component: () => import('@/views/Detail/index.vue'),
    meta: {
      title: '详细'
    }
  },
  {
    path: '/User',
    name: 'User',
    component: () => import('@/views/User/index.vue'),
    meta: {
      title: '个人中心'
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach((to, from, next) => {
  console.log(to.path)
  next()
})

export default router
