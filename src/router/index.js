import Vue from 'vue';
import Router from 'vue-router';
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

export default router;
