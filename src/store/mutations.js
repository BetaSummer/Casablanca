export default {
  SET_MEMBERS(state, { generation, members }) {
    state.members[generation] = members;
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
};
