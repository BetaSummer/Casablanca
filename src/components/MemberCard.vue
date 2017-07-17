<template>
  <div class="member-card">
    <div class="avatar">
      <img src="../assets/avatar.png">
    </div>
    <div class="member-info">
      <span class="name">
        batman
      </span>
      <span class="identity">
        I am batman
      </span>
    </div>
    <div class="social-media">
      <a href="">
        <i class="iconfont icon-pinnedoctocat"></i>
      </a>
      <a href="">
        <i class="iconfont icon-blog"></i>
      </a>
    </div>
  </div>
</template>

<script>

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

.avatar
  img
    width 100px
    height 100px
    border-radius 50%

span.name
  font-weight bold
  font-size 1.3rem

span.identity
  color #828282
  font-size 0.9rem

.social-media
  a
    color #fff
    text-decoration none
    outline none
  .iconfont
    color black
</style>
