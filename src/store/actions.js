import { fetchMembersByGeneration } from '../api';

export default {
  async FETCH_MEMBERS({ commit }, { generation }) {
    const members = await fetchMembersByGeneration(generation);
    commit('SET_MEMBERS', members);
  },
};
