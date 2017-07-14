<template>
  <div class="sidebar">
    <header class="sidebar-header">
        <span>
          <i class="iconfont icon-heart" aria-hidden="true"></i>
        </span>
        <span>Hello, betahouse!</span>
    </header>
    <div class="sidebar-content">
      <ul class="term-lists">
        <side-bar-item v-for="(term, index) in terms" :key="index" :term="term"></side-bar-item>
      </ul>
      <div class="addlist sidebar-item">
        <span>
          <i class="iconfont icon-add"></i>
        </span>
        <span class="addlist-label">
          新的一届
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import SideBarItem from './SideBarItem';

export default {
  props: ['terms'],
  components: {
    SideBarItem,
  },
};
</script>

<style lang="stylus">
$sidebar-fontsize = 1.1rem

.sidebar
  display flex
  flex-direction column
  width 270px
  height 100vh
  .sidebar-header
    display flex
    align-items center
    font-size $sidebar-fontsize
    flex-shrink 0
    box-sizing border-box
    height 40px
    box-shadow: 0 1px 0 rgba(0,0,0,.1);
    padding 4px
  .sidebar-content
    flex 1
    padding 6px 0
    .term-lists
      display flex
      flex-direction column
      margin 0
      padding 0 0.5rem
      list-style-type none
    .addlist
      padding 0 0.5rem
      
.addlist-label 
  color #2979FF
  margin 0 0.8rem
  font-size 1.1rem
</style>
