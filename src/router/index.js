import Vue from 'vue';
import Router from 'vue-router';
import MemberView from '@/components/MemberView';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'MemberView',
      component: MemberView,
    },
  ],
});
