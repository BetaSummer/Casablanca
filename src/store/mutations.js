export default {
  SET_MEMBERS(state, { generation }) {
    const newMembers = {
      data: [],
      loading: true,
      error: null,
    };
    state.members = { ...state.members, [generation]: newMembers };
  },
  SET_MEMBERS_SUCCESS(state, { generation, data }) {
    const newMembers = {
      data,
      loading: false,
      error: null,
    };
    state.members = { ...state.members, [generation]: newMembers };
  },
  SET_MEMBERS_FAILURE(state, { generation, error }) {
    const newMembers = {
      data: [],
      loading: false,
      error,
    };
    state.members = { ...state.members, [generation]: newMembers };
  },
  SET_ACTIVE_GENERATION(state, { generation }) {
    state.activeGeneration = generation;
  },
  ADD_GENERATION(state) {
    const newGeneration = {
      generation: state.generations.length + 1,
    };
    state.generations.push(newGeneration);
  },
  SET_LOADING(state, { generation }) {
    state.members[generation].loading = true;
  },
};
