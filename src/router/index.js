import Vue from 'vue';
import Router from 'vue-router';
import auth from '../util/auth';
import store from '../store';
import MemberView from '../views/MemberView';
import SignInView from '../views/SignInView';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/members/:group',
      name: 'MemberView',
      component: MemberView,
    },
    {
      path: '/',
      name: 'SignInView',
      component: SignInView,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token');
  if (to.path !== '/' && (!store.state.isSignedIn || auth.isTokenExpired(token))) {
    next('/');
  } else if (to.path === '/' && (store.state.isSignedIn && !auth.isTokenExpired(token))) {
    next('/members/1');
  }
  next();
});

export default router;
