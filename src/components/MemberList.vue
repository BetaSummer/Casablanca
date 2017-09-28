<template>
  <div class="member-list">
    <member-card
      v-for="member in members"
      :key="member.id"
      :member="member">
    </member-card>
    <member-detail
      v-if="showEditModal"
      :member="activeMember"
      @close="closeEditModal">
    </member-detail>
    <new-member
      v-if="showNewModal"
      :group="$route.params.group"
      @close="closeNewModal">
    </new-member>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import MemberCard from './MemberCard';
import MemberDetail from './MemberDetail';
import NewMember from './NewMember';

export default {
  props: [
    'members',
  ],
  components: {
    MemberCard,
    MemberDetail,
    NewMember,
  },
  computed: {
    ...mapState([
      'showEditModal',
      'showNewModal',
      'activeMember',
    ]),
  },
  methods: {
    ...mapActions([
      'closeEditModal',
      'closeNewModal',
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
