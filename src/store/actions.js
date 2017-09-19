import api from '../api';

export default {
  async signIn({ commit }, user) {
    try {
      const result = await api.post('/public/signin', user);
      localStorage.setItem('token', result);
    } catch (e) {
      commit('SIGN_IN_FAILURE');
    }
  },
  async logOut({ commit }) {
    localStorage.removeItem('token');
    commit('LOG_OUT');
  },
  async fetchMembers({ commit }, { group }) {
    commit('SET_MEMBERS');
    try {
      const { data } = await api.get(`/api/members?group=${group}`);
      commit('SET_MEMBERS_SUCCESS', { group, data });
    } catch (e) {
      commit('SET_MEMBERS_FAILURE', e);
    }
  },
  async fetchGroupCount({ commit }) {
    commit('SET_GROUPS');
    try {
      const { data } = await api.get('/api/groups');
      commit('SET_GROUPS_SUCCESS', data);
    } catch (e) {
      commit('SET_GROUPS_FAILURE', e);
    }
  },
  addGroup({ commit }, group) {
    commit('ADD_GROUP', group);
  },
  toggleEditing({ commit }) {
    commit('TOGGLE_EDITING');
  },
  async updateMember({ commit }, memberInfo) {
    const { name, group, major } = memberInfo;
    if (name.length === 0) {
      commit('POP_MSG', {
        content: '姓名不能为空',
        type: 'error',
      });
    } else if (!Number(group)) {
      commit('POP_MSG', {
        content: '届数不合法',
        type: 'error',
      });
    } else if (group.length === 0) {
      commit('POP_MSG', {
        content: '届数不能为空',
        type: 'error',
      });
    } else if (major.length === 0) {
      commit('POP_MSG', {
        content: '专业不能为空',
        type: 'error',
      });
    } else {
      try {
        await api.put('/api/member', memberInfo);
        commit('UPDATE_MEMBER_SUCCESS', memberInfo);
        commit('POP_MSG', {
          content: '修改成功',
          type: 'success',
        });
      } catch (e) {
        commit('UPDATE_MEMBER_FAILURE', e);
      }
    }
  },
};
