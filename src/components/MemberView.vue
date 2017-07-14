<template>
  <div class="member-view">
    <tool-bar></tool-bar>
    <member-list></member-list>
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
};
</script>


<style scoped>

</style>
