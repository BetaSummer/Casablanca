<template>
  <div class="member-view">
    <tool-bar :generation="$route.params.generation"></tool-bar>
    <member-list :generation="$route.params.generation"></member-list>
  </div>
</template>

<script>
import ToolBar from '../components/ToolBar';
import MemberList from '../components/MemberList';

export default {
  name: 'MemberView',
  components: {
    ToolBar,
    MemberList,
  },
  watch: {
    $route: 'fetchMembers',
  },
  methods: {
    fetchMembers() {
      const generation = this.$route.params.generation;
      if (!this.members[generation]) {
        this.$store.dispatch('FETCH_MEMBERS', {
          generation: this.$route.params.generation,
        });
      }
    },
  },
  computed: {
    members() {
      return this.$store.state.members;
    },
  },
};
</script>


<style scoped>

</style>
