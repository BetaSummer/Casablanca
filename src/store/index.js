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
    fetchedGroups: [],
    groups: {
      data: [],
      error: null,
    },
    message: {
      content: null,
      type: '',
      isShown: false,
    },
    isSignedIn: !!localStorage.getItem('token'),
    isEditing: false,
  },
  mutations,
  getters,
  actions,
});
