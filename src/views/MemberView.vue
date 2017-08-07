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
      this.$store.dispatch('FETCH_MEMBERS', {
        generation: this.$route.params.generation,
      });
    },
  },
};
</script>


<style scoped>

</style>
