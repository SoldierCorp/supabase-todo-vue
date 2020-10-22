import Vue from 'vue';
import Router from 'vue-router';

import Login from '@/components/Auth/Login';
import Signup from '@/components/Auth/Signup';
import Home from '@/components/Home';

import NotFound from '@/components/NotFound';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    },
    { path: '*', component: NotFound }
  ],
});
