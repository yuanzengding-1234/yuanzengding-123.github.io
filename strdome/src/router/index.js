import Vue from 'vue'
import Router from 'vue-router'
import sy from '@/components/sy'
import lb from '@/components/lb'
import gwc from '@/components/gwc'
import gr from '@/components/gr'
import xq from '@/components/xq'
import login from '@/components/login'
import register from '@/components/register'
import wangji from '@/components/wangji'
import xiaoxi from '@/components/xiaoxi'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: sy},
    {path: '/sy',component: sy},
    {path: '/lb',component: lb},
    {path: '/gwc',component: gwc},
    {path: '/gr',component: gr},
    {path: '/xq',component: xq},
    {path: '/login',component: login},
    {path: '/register',component: register},
    {path: '/wangji',component: wangji},
    {path: '/xiaoxi',component: xiaoxi}
  ]
})
