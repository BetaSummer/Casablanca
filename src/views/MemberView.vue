<template>
  <div class="member-view">
    <tool-bar :generation="$route.params.generation"></tool-bar>
    <member-list
      :generation="$route.params.generation"
      :members="members">
    </member-list>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ToolBar from '../components/ToolBar';
import MemberList from '../components/MemberList';

let generation;

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
      generation = this.$route.params.generation;
      if (!this.fetchedGenerations.includes(generation)) {
        this.$store.dispatch('fetchMembers', {
          generation,
        });
      }
    },
  },
  computed: {
    members() {
      return this.$store.getters.activeMembers(Number(this.$route.params.generation));
    },
    ...mapState([
      'fetchedGenerations',
    ]),
  },
  created() {
    this.fetchMembers();
  },
};
</script>


<style scoped>

</style>
