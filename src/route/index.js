import Vue from 'vue'
import VueRouter from 'vue-router'
import Loading from '../components/loading/Loading'
import Index from '../components/index/Index'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:'/loading'
  },
  {
    path: '/loading',
    name: 'loading',
    component: Loading
  },
  {
    path: '/index',
    name: 'index',
    component: Index
  }
]

//获取原型对象上的push函数
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}
const router = new VueRouter({
  routes,
  mode:'history',
  scrollBehavior(to, from, saveTop){
    if (saveTop) {
      return saveTop;
    } else {
      return {x: 0, y: 0}
    }
  },
})
export default router
