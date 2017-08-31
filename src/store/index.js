import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    members: {
      data: [],
      loading: false,
      error: null,
    },
    fetchedGenerations: [],
    generations: {
      data: [],
      error: null,
    },
    message: {
      content: null,
      type: '',
    },
  },
  mutations,
  getters,
  actions,
});
