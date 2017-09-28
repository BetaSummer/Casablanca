import api from '../api';
import auth from '../util/auth';

export default {
  async signIn({ commit, dispatch }, user) {
    try {
      const { data } = await api.post('/public/signin', user);
      localStorage.setItem('token', data);
      commit('SIGN_IN_SUCCESS');
      return data;
    } catch (e) {
      dispatch('alertMessage', {
        content: '账号或密码错误',
        type: 'error',
      });
      commit('SIGN_IN_FAILURE', e);
      throw e;
    }
  },
  async signOut({ commit }) {
    localStorage.removeItem('token');
    commit('SIGN_OUT');
  },
  async fetchMembers({ commit, dispatch }, { group }) {
    commit('SET_MEMBERS');
    try {
      const { data } = await api.get(`/api/members?group=${group}`, {
        headers: auth.getAuthHeader(),
      });
      commit('SET_MEMBERS_SUCCESS', { group, data });
    } catch (e) {
      dispatch('alertMessage', {
        content: '获取成员信息失败，请重试',
        type: 'error',
      });
      commit('SET_MEMBERS_FAILURE', e);
    }
  },
  async fetchGroupCount({ commit, dispatch }) {
    commit('SET_GROUPS');
    try {
      const { data } = await api.get('/api/groups', {
        headers: auth.getAuthHeader(),
      });
      commit('SET_GROUPS_SUCCESS', data);
    } catch (e) {
      dispatch('alertMessage', {
        content: '获取届数失败',
        type: 'error',
      });
      commit('SET_GROUPS_FAILURE', e);
    }
  },
  addGroup({ commit }, group) {
    commit('ADD_GROUP', group);
  },
  toggleEditing({ commit }) {
    commit('TOGGLE_EDITING');
  },
  async updateMember({ commit, dispatch }, memberInfo) {
    const { name, group, major } = memberInfo;
    if (name.length === 0) {
      dispatch('alertMessage', {
        content: '姓名不能为空',
        type: 'error',
      });
    } else if (!Number(group)) {
      dispatch('alertMessage', {
        content: '届数不合法',
        type: 'error',
      });
    } else if (group.length === 0) {
      dispatch('alertMessage', {
        content: '届数不能为空',
        type: 'error',
      });
    } else if (major.length === 0) {
      dispatch('alertMessage', {
        content: '专业不能为空',
        type: 'error',
      });
    } else {
      try {
        const { data } = await api.put('/api/member', memberInfo, {
          headers: auth.getAuthHeader(),
        });
        dispatch('alertMessage', {
          content: '修改成功',
          type: 'success',
        });
        commit('UPDATE_MEMBER_SUCCESS', data);
      } catch (e) {
        dispatch('alertMessage', {
          content: '修改失败，请重试',
          type: 'error',
        });
      }
    }
  },
  async deleteMember({ commit, dispatch }, id) {
    try {
      await api.delete(`/api/member?id=${id}`, {
        headers: auth.getAuthHeader(),
      });
      dispatch('alertMessage', {
        content: '删除成功',
        type: 'success',
      });
      commit('DELETE_MEMBER_SUCCESS', id);
    } catch (e) {
      dispatch('alertMessage', {
        content: '删除失败￣へ￣',
        type: 'error',
      });
    }
  },
  async addMember({ commit, dispatch }, memberInfo) {
    const { name, group, major } = memberInfo;
    if (name.length === 0) {
      dispatch('alertMessage', {
        content: '姓名不能为空',
        type: 'error',
      });
    } else if (!Number(group)) {
      dispatch('alertMessage', {
        content: '届数不合法',
        type: 'error',
      });
    } else if (group.length === 0) {
      dispatch('alertMessage', {
        content: '届数不能为空',
        type: 'error',
      });
    } else if (major.length === 0) {
      dispatch('alertMessage', {
        content: '专业不能为空',
        type: 'error',
      });
    } else {
      try {
        const { data } = await api.post('/api/member', memberInfo, {
          headers: auth.getAuthHeader(),
        });
        dispatch('alertMessage', {
          content: '添加成员成功',
          type: 'success',
        });
        commit('ADD_MEMBER_SUCCESS', data);
      } catch (e) {
        dispatch('alertMessage', {
          content: '添加失败，请重试',
          type: 'error',
        });
      }
    }
  },

  openEditModal({ commit }, activeMember) {
    commit('OPEN_EDIT_MODAL', activeMember);
  },
  closeEditModal({ commit }) {
    commit('CLOSE_EDIT_MODAL');
  },

  openNewModal({ commit }) {
    commit('OPEN_NEW_MODAL');
  },
  closeNewModal({ commit }) {
    commit('CLOSE_NEW_MODAL');
  },

  alertMessage({ commit, dispatch }, message) {
    dispatch('popupMessage', message);
    setTimeout(() => {
      dispatch('hideMessage', message);
    }, 2500);
  },
  popupMessage({ commit }, message) {
    commit('POPUP_MESSAGE', message);
  },
  hideMessage({ commit }, message) {
    commit('HIDE_MESSAGE', message);
  },
};
