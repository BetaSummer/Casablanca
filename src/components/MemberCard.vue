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
      <i class="iconfont icon-pinnedoctocat"></i>
      <i class="iconfont icon-blog"></i>
    </div>
  </div>
</template>

<script>

</script>

<style lang="stylus">
.member-card
  display flex
  flex-direction column
  align-items center
  min-width 300px
  min-height 350px
  border 1px solid black
  img
    width 50px
    height 50px
    border-radius 50%
</style>
