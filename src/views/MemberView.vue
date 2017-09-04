<template>
  <div class="member-view">
    <tool-bar :group="$route.params.group"></tool-bar>
    <member-list
      :group="$route.params.group"
      :members="members">
    </member-list>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import ToolBar from '../components/ToolBar';
import MemberList from '../components/MemberList';

let group;

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
      group = this.$route.params.group;
      if (!this.fetchedGroups.includes(group)) {
        this.$store.dispatch('fetchMembers', {
          group,
        });
      }
    },
  },
  computed: {
    members() {
      return this.$store.getters.activeMembers(Number(this.$route.params.group));
    },
    ...mapState([
      'fetchedGroups',
    ]),
  },
  created() {
    this.fetchMembers();
  },
};
</script>


<style scoped>

</style>
