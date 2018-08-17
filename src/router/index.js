import Vue from 'vue'
import Router from 'vue-router'

const _import = require('./_import_' + process.env.NODE_ENV)

Vue.use(Router)

const list={
    routes: [
      { path: '/', redirect: '/index/index'},
      { path: '/404', component: _import('errorPage/404')},
      { path: '/401', component: _import('errorPage/401')},
      { path: '/login',name: 'login', component: _import('login/index')},
      {
        path: '/index',
        component: _import('index'),
        radius:true,
        redirect: '/index/index',
        icon: 'shouye',
        children: [{path: 'index',name:'首页',radius:true,component: _import('home/homepage')}]
      },
      {
        path: '/meun',
        name: 'meun4',
        radius:true,
        component: _import('index'),
        icon: 'el-icon-location',
        redirect: '/meun/meun4_1',
        children: [
          {path: 'meun4_1',name: 'meun4_1',component: _import('menu4/menu4'),meta: { index: '4' },radius:true,},
          {path: 'meun4_2',name: 'meun4_2',component: _import('menu4/menu4'),meta: { index: '4' },radius:true,},
          {path: 'meun4_3',name: 'meun4_3',component: _import('menu4/menu4'),meta: { index: '4' },radius:true,},
        ]
      },

      {path:'*',redirect:'/404'}

    ]
  }

export const route=new Router(list)

export const routerlist=list
