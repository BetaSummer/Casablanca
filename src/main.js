// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import store from './store';
import router from './router';

Vue.config.productionTip = false;

Vue.directive('visible', {
  inserted(el, binding) {
    el.style.visibility = binding.value === true ? 'visible' : 'hidden';
  },
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
});
