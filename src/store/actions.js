import api from '../api';

export default {
  async fetchMembers({ commit }, { generation }) {
    // commit('SET_MEMBERS');
    try {
      const { data } = await api.get(`/members?generation=${generation}`);
      commit('SET_MEMBERS_SUCCESS', { generation, data });
    } catch (e) {
      commit('SET_MEMBERS_FAILUR', e);
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
  addGeneration({ commit }, generation) {
    commit('ADD_GENERATION', generation);
  },
  async updateMember({ commit }, memberInfo) {
    try {
      await api.put('/member', memberInfo);
      commit('UPDATE_MEMBER_SUCCESS', memberInfo);
    } catch (e) {
      commit('UPDATE_MEMBER_FAILURE', e);
    }
  },
};
