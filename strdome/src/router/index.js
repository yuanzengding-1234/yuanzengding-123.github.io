import Vue from 'vue'
import Router from 'vue-router'
import sy from '@/components/sy'
import lb from '@/components/lb'
import gwc from '@/components/gwc'
import gr from '@/components/gr'
import xq from '@/components/xq'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/',component: sy},
    {path: '/sy',component: sy},
    {path: '/lb',component: lb},
    {path: '/gwc',component: gwc},
    {path: '/gr',component: gr},
    {path: '/xq',component: xq},
  ]
})
