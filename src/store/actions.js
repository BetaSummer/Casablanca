import api from '../api';

export default {
  async fetchMembers({ commit }, { generation }) {
    commit('SET_MEMBERS', { generation });
    try {
      const { data } = await api.get(`/members?generation=${generation}`);
      commit('SET_MEMBERS_SUCCESS', { generation, data });
    } catch (e) {
      commit('SET_MEMBERS_FAILUR', { generation, e });
    }
  },
  async fetchGenerationCount({ commit }) {
    commit('SET_GENERATIONS');
    try {
      const { data } = await api.get('/generations');
      commit('SET_GENERATIONS_SUCCESS', data);
    } catch (e) {
      commit('SET_GENERATIONS_FAILURE', e);
    }
  },
};
