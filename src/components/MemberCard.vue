<template>
  <div class="member-card">
    <div class="avatar">
      <img
        :src="imgSrc"
        @click="openEditModal(member)">
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
      <a :href="member.github" v-visible="!!member.github">
        <i class="iconfont icon-pinnedoctocat"></i>
      </a>
      <a :href="member.blog" v-visible="!!member.blog">
        <i class="iconfont icon-blog"></i>
      </a>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: [
    'member',
  ],
  computed: {
    imgSrc() {
      return this.member.avatarBase64 ? this.member.avatarBase64 : `/static/avatar/${this.member.photo}`;
    },
  },
  methods: {
    ...mapActions([
      'openEditModal',
    ]),
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
