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
    },
    activeMember: {},
    fetchedGroups: [],
    groups: {
      data: [],
    },
    message: {
      content: null,
      type: '',
      isShown: false,
    },
    showEditModal: false,
    showNewModal: false,
    isSignedIn: !!localStorage.getItem('token'),
    pending: false,
    isEditing: false,
  },
  mutations,
  getters,
  actions,
});
