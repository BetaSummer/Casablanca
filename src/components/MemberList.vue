<template>
  <div class="member-list">
    <member-card
      v-for="member in members"
      :key="member.id"
      :member="member">
    </member-card>
  </div>
</template>

<script>
import MemberCard from './MemberCard';

export default {
  props: [
    'members',
  ],
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
