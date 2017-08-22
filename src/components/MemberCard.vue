<template>
  <div class="member-card">
    <div class="avatar">
      <img src="../assets/avatar.png" @click="showModal = true">
    </div>
    <div class="member-info">
      <span class="name">
        {{ member.name }}
      </span>
      <span class="identity">
        {{ member.major }}
      </span>
    </div>
    <div class="social-media">
      <a :href="member.github" v-show="member.github">
        <i class="iconfont icon-pinnedoctocat"></i>
      </a>
      <a :href="member.blog">
        <i class="iconfont icon-blog"></i>
      </a>
    </div>
    <member-detail
      v-if="showModal"
      :member="member"
      @close="showModal = false">
    </member-detail>
  </div>
</template>

<script>
import MemberDetail from './MemberDetail';

export default {
  props: [
    'member',
  ],
  data() {
    return {
      showModal: false,
    };
  },
  components: {
    MemberDetail,
  },
};
</script>

<style lang="stylus" scoped>
.member-card
  display flex
  flex-direction column
  align-items center
  justify-content space-around
  min-width 280px
  min-height 370px
  margin 15px
  border-radius 4px
  background-color white
  .member-info
    display flex
    flex-direction column
    align-items center
    span.name
      font-weight bold
      font-size 1.3rem
    span.identity
      color #828282
      font-size 0.9rem

.avatar
  img
    width 100px
    height 100px
    border-radius 50%
    cursor pointer

.social-media
  a
    color #fff
    text-decoration none
    outline none
  .iconfont
    color black
</style>
