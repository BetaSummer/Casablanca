export default {
  SIGN_IN(state) {
    state.pending = true;
  },
  SIGN_IN_SUCCESS(state) {
    state.isSignedIn = true;
    state.pending = false;
  },
  SIGN_IN_FAILURE(state) {
    state.isSignedIn = false;
  },
  SIGN_OUT(state) {
    state.isSignedIn = false;
  },
  SET_MEMBERS(state) {
    const newMembers = {
      data: state.members.data,
      loading: true,
    };
    state.members = newMembers;
  },
  SET_MEMBERS_SUCCESS(state, { group, data }) {
    const newMembers = {
      data: data.concat(state.members.data),
      loading: false,
    };
    state.members = newMembers;
    state.fetchedGroups.push(group);
  },
  SET_MEMBERS_FAILURE(state) {
    const newMembers = {
      data: state.members.data,
      loading: false,
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

  ADD_MEMBER_SUCCESS(state, member) {
    const memberList = state.members.data.slice();
    memberList.push(member);
    state.members = {
      data: memberList,
      loading: false,
    };
    state.showNewModal = false;
  },

  SET_GROUPS(state) {
    state.groups = {
      data: [],
    };
  },
  SET_GROUPS_SUCCESS(state, groups) {
    state.groups = {
      data: groups,
    };
  },
  SET_GROUPS_FAILURE(state) {
    state.groups = {
      data: [],
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

  OPEN_EDIT_MODAL(state, activeMember) {
    state.activeMember = activeMember;
    state.showEditModal = true;
  },
  CLOSE_EDIT_MODAL(state) {
    state.showEditModal = false;
    state.activeMember = {};
  },
  OPEN_NEW_MODAL(state) {
    state.showNewModal = true;
  },
  CLOSE_NEW_MODAL(state) {
    state.showNewModal = false;
  },

  POPUP_MESSAGE(state, { content, type }) {
    state.message = {
      content,
      type,
      isShown: true,
    };
  },
  HIDE_MESSAGE(state, message) {
    state.message = {
      ...message,
      isShown: false,
    };
  },
};
