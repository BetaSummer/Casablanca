<template>
  <div class="right">
    <div class="member-identity">
      <slot name="major"></slot>
      <slot name="generation"></slot>
    </div>
    <slot name="info"></slot>
    <div class="social-media">
      <slot name="github"></slot>
      <slot name="blog"></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'member',
  ],
};
</script>

<style lang="stylus" scoped>
.right
  display flex
  flex-direction column
  align-items center
  justify-content space-between
  min-width 25%
  padding 50px 30px 0 30px
  .member-identity
    color gray
    display flex
    flex-direction column
    align-items center
    input
      font-weight 300
      color #2c3e50
      font-size 1.5rem
    input.generation
      width 1rem
  .member-info
    word-wrap: break-word
    line-height 2rem
  textarea.member-info
    resize none
    width 100%
  .social-media
    display flex
    flex-direction column
    margin-bottom 40px
</style>
