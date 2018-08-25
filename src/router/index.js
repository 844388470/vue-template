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
        children: [{path: 'index',name:'首页',radius:true,component: _import('home/homepage'),meta: { keep:'homepage' }}]
      },
      {path:'*',redirect:'/404'}

    ]
  }

export const route=new Router(list)

export const routerlist=list
