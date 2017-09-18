import Vue from 'vue';
import Router from 'vue-router';
import MemberView from '../views/MemberView';
import IndexView from '../views/IndexView';

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
      name: 'IndexView',
      component: IndexView,
    },
    {
      path: '*',
      redirect: '/',
    },
  ],
});

export default router;
