export default {
  activeMembers({ members }) {
    return group => members.data.filter(member => member.group === group);
  },
};
