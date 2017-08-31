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
    const { name, generation, major } = memberInfo;
    if (name.length === 0) {
      commit('POP_ERROR_MSG', '姓名不能为空');
    } else if (!Number(generation)) {
      commit('POP_ERROR_MSG', '届数不合法');
    } else if (generation.length === 0) {
      commit('POP_ERROR_MSG', '届数不能为空');
    } else if (major.length === 0) {
      commit('', '专业不能为空');
    } else {
      try {
        await api.put('/member', memberInfo);
        commit('UPDATE_MEMBER_SUCCESS', memberInfo);
      } catch (e) {
        commit('UPDATE_MEMBER_FAILURE', e);
      }
    }
  },
};
