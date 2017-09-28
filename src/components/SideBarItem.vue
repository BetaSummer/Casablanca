<template>
  <router-link :to="`/members/${item.group}`" exact>
    <li class="sidebar-item">
      <i class="iconfont icon-people"></i>
      <span class="term">第 {{ item.group }} 届</span>
    </li>
  </router-link>
</template>

<script>
export default {
  props: ['item'],
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

a
  outline none
  text-decoration none
  color black

a.router-link-active
  .sidebar-item
    background #ededed
</style>
