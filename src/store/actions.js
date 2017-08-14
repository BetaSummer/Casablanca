import { fetchMembersByGeneration } from '../api';

export default {
  async FETCH_MEMBERS({ commit, state }, { generation }) {
    const members = await fetchMembersByGeneration(generation);
    commit('SET_MEMBERS', {
      generation,
      members,
    });
  },
};
