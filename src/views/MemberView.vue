<template>
  <div class="member-view">
    <side-bar :groups="groups.data"></side-bar>
    <div class="main">
      <tool-bar :group="$route.params.group"></tool-bar>
      <member-list
        :members="members">
      </member-list>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import SideBar from '../components/SideBar';
import ToolBar from '../components/ToolBar';
import MemberList from '../components/MemberList';

let group;

export default {
  name: 'MemberView',
  components: {
    ToolBar,
    MemberList,
    SideBar,
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
    ...mapActions([
      'fetchGroupCount',
    ]),
  },
  computed: {
    members() {
      return this.$store.getters.activeMembers(Number(this.$route.params.group));
    },
    ...mapState([
      'groups',
      'fetchedGroups',
    ]),
  },
  created() {
    this.fetchGroupCount();
    this.fetchMembers();
  },
};
</script>


<style lang="stylus" scoped>
.member-view
  display flex
  height 100%

.main
  flex 1
  display flex
  flex-direction column
  background #EEEEEE
</style>
