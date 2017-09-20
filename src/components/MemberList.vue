<template>
  <div class="member-list">
    <member-card
      v-for="member in members"
      :key="member.id"
      :member="member">
    </member-card>
    <member-detail
      v-if="showModal"
      :member="activeMember"
      @close="closeModal">
    </member-detail>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import MemberCard from './MemberCard';
import MemberDetail from './MemberDetail';

export default {
  props: [
    'members',
  ],
  components: {
    MemberCard,
    MemberDetail,
  },
  computed: {
    ...mapState([
      'showModal',
      'activeMember',
    ]),
  },
  methods: {
    ...mapActions([
      'closeModal',
    ]),
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
