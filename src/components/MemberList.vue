<template>
  <div class="member-list">
    <member-card v-for="item in [1,2,3,4,5,6,7,8,9,10]" :key="item"></member-card>
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
  align-items center
  flex-wrap wrap
  justify-content center
  height calc(100vh - 100px - 2rem)
  overflow-y scroll
</style>
