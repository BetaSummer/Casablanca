<template>
  <li class="sidebar-item">
    <i class="iconfont icon-people"></i>
    <span class="term">第 {{ term }} 届</span>
  </li>
</template>

<script>
export default {
  props: ['term'],
};
</script>

<style lang="stylus">
.sidebar-item
  height 40px
  box-sizing border-box
  display flex
  align-items center
  cursor pointer
  border-radius 4px
  .term
    margin 0 0.8rem
    font-size 1.1rem;

.sidebar-item:hover
  background #f5f5f5
  
.sidebar-item.active
  background #ededed
</style>
