import api from '../api';

export default {
  async fetchMembers({ commit }, { group }) {
    // commit('SET_MEMBERS');
    try {
      const { data } = await api.get(`/members?group=${group}`);
      commit('SET_MEMBERS_SUCCESS', { group, data });
    } catch (e) {
      commit('SET_MEMBERS_FAILUR', e);
    }
  },
  async fetchGroupCount({ commit }) {
    commit('SET_GENERATIONS');
    try {
      const { data } = await api.get('/groups');
      commit('SET_GENERATIONS_SUCCESS', data);
    } catch (e) {
      commit('SET_GENERATIONS_FAILURE', e);
    }
  },
  addGroup({ commit }, group) {
    commit('ADD_GENERATION', group);
  },
  async updateMember({ commit }, memberInfo) {
    const { name, group, major } = memberInfo;
    if (name.length === 0) {
      commit('POP_ERROR_MSG', '姓名不能为空');
    } else if (!Number(group)) {
      commit('POP_ERROR_MSG', '届数不合法');
    } else if (group.length === 0) {
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
