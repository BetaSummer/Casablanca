import api from '../api';

export default {
  async fetchMembers({ commit, state }, { generation }) {
    commit('SET_MEMBERS', { generation });
    try {
      const { data } = await api.get(`/members?generation=${generation}`);
      commit('SET_MEMBERS_SUCCESS', { generation, data });
    } catch (e) {
      commit('SET_MEMBERS_FAILUR', { generation, e });
    }
  },
};
