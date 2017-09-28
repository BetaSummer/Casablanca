<template>
  <div class="left">
    <slot name="name"></slot>
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
.left
  display flex
  flex-direction column
  align-items center
  justify-content space-between
  min-width 15%
  h1
  input.name
    font-size 2.5rem
    align-self stretch
    font-weight 300
    color #2c3e50
    writing-mode vertical-rl
    margin-top 6rem
  input.name
    align-self center
  .social-media
    color black
    margin-bottom 40px
</style>
