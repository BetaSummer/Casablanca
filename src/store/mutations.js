export default {
  SET_MEMBERS(state) {
    const newMembers = {
      data: state.members.data,
      loading: true,
      error: null,
    };
    state.members = newMembers;
  },
  SET_MEMBERS_SUCCESS(state, { group, data }) {
    const newMembers = {
      data: data.concat(state.members.data),
      loading: false,
      error: null,
    };
    state.members = newMembers;
    state.fetchedGroups.push(group);
  },
  SET_MEMBERS_FAILURE(state, error) {
    const newMembers = {
      data: state.members.data,
      loading: false,
      error,
    };
    state.members = newMembers;
  },

  UPDATE_MEMBER_SUCCESS({ members }, member) {
    members = {
      ...members,
      [member.group]: {
        ...members[member.group],
        member,
      },
    };
  },
  // UPDATE_MEMBER_FAILURE({ members }, e) {
  //
  // },

  SET_GENERATIONS(state) {
    state.groups = {
      data: [],
      error: null,
    };
  },
  SET_GENERATIONS_SUCCESS(state, groups) {
    state.groups = {
      data: groups,
      error: null,
    };
  },
  SET_GENERATIONS_FAILURE(state, error) {
    state.groups = {
      data: [],
      error,
    };
  },

  ADD_GENERATION({ groups }, group) {
    const newGroup = {
      group,
    };
    groups.data.push(newGroup);
  },
  SET_LOADING(state, { group }) {
    state.members[group].loading = true;
  },

  POP_ERROR_MSG(state, message) {
    state.message = {
      content: message,
      type: 'error',
    };
  },
};
