// import Vue from 'vue';

export default {
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
