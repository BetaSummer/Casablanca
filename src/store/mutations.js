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

  UPDATE_MEMBER_SUCCESS({ members }, member) {
    members = {
      ...members,
      [member.generation]: {
        ...members[member.generation],
        member,
      },
    };
  },
  // UPDATE_MEMBER_FAILURE({ members }, e) {
  //
  // },

  SET_GENERATIONS(state) {
    state.generations = {
      data: [],
      error: null,
    };
  },
  SET_GENERATIONS_SUCCESS(state, generations) {
    state.generations = {
      data: generations,
      error: null,
    };
  },
  SET_GENERATIONS_FAILURE(state, error) {
    state.generations = {
      data: [],
      error,
    };
  },

  ADD_GENERATION({ generations }, generation) {
    const newGeneration = {
      generation,
    };
    generations.data.push(newGeneration);
  },
  SET_LOADING(state, { generation }) {
    state.members[generation].loading = true;
  },
};
