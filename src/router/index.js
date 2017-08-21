import Vue from 'vue';
import Router from 'vue-router';
import Index from '@/views/Index';
import Home from '@/views/Home';
import ConnectUs from '@/views/ConnectUs';
import ProductS from '@/views/ProductS';
import ProductT from '@/views/ProductT';
import ProductP from '@/views/ProductP';
import S_tel from '@/views/S_tel';
import S_pc from '@/views/S_pc';
import T_web from '@/views/T_web';
import T_weixin from '@/views/T_weixin';
import P_weixin from '@/views/P_weixin';

Vue.use(Router);

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      }
    }  
  },
  routes: [
    {
      path: '/',
      component: Index,
      children: [
        {
          path: '/',
          name: 'Home',
          component: Home,
        },
        {
          path: '/ConnectUs',
          name: 'ConnectUs',
          component: ConnectUs
        },
        {
          path: '/ProductS',
          name: 'ProductS',
          component: ProductS
        },
        {
          path: '/ProductT',
          name: 'ProductT',
          component: ProductT
        },
        {
          path: '/ProductP',
          name: 'ProductP',
          component: ProductP
        },
        {
          path: '/Guide_S_tel',
          name: 'Guide_S_tel',
          component: S_tel
        },
        {
          path: '/Guide_S_pc',
          name: 'Guide_S_pc',
          component: S_pc
        },
        {
          path: '/Guide_T_web',
          name: 'Guide_T_web',
          component: T_web
        },
        {
          path: '/Guide_T_weixin',
          name: 'Guide_T_weixin',
          component: T_weixin
        },
        {
          path: '/Guide_P_weixin',
          name: 'Guide_P_weixin',
          component: P_weixin
        }
      ]
    },
    
  ]
})
