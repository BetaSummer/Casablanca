<template>
  <div class="member-list">
    <member-card v-for="item in [1,2,3,4,5]" :key="item"></member-card>
  </div>
</template>

<script>
import MemberCard from './MemberCard';

export default {
  components: {
    MemberCard,
  },
};
</script>

<style lang="stylus">
.member-list
  flex 1
  display flex
  flex-wrap wrap
  height calc(100vh - 100px - 2rem)
  overflow-y scroll
</style>
