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

  UPDATE_MEMBER_SUCCESS(state, member) {
    const memberList = state.members.data;
    for (let i = 0; i < memberList.length; i += 1) {
      if (memberList[i].id === member.id) {
        memberList[i] = member;
        break;
      }
    }
    state.isEditing = false;
  },
  // UPDATE_MEMBER_FAILURE({ members }, e) {
  //
  // },

  SET_GROUPS(state) {
    state.groups = {
      data: [],
      error: null,
    };
  },
  SET_GROUPS_SUCCESS(state, groups) {
    state.groups = {
      data: groups,
      error: null,
    };
  },
  SET_GROUPS_FAILURE(state, error) {
    state.groups = {
      data: [],
      error,
    };
  },

  ADD_GROUP({ groups }, group) {
    const newGroup = {
      group,
    };
    groups.data.push(newGroup);
  },
  SET_LOADING(state, { group }) {
    state.members[group].loading = true;
  },

  TOGGLE_EDITING(state) {
    state.isEditing = true;
  },

  POP_MSG(state, { content, type }) {
    state.message = {
      content,
      type,
      isShown: true,
    };
    setTimeout(() => {
      state.message = {
        content,
        type,
        isShown: false,
      };
    }, 2500);
  },
};
