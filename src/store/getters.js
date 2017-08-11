export default {
  allMembers(state) {
    return state.members;
  },
  activeMembers(state) {
    return generation => state.members[generation];
  },
};
