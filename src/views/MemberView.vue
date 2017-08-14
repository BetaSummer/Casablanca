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
import { mapGetters } from 'vuex';
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
      if (!this.allMembers[generation]) {
        this.$store.dispatch('fetchMembers', {
          generation,
        });
      }
    },
  },
  computed: {
    members() {
      return this.allMembers[this.$route.params.generation];
    },
    ...mapGetters([
      'allMembers',
    ]),
  },
  created() {
    this.fetchMembers();
  },
};
</script>


<style scoped>

</style>
