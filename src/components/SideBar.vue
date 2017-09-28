<template>
  <div class="sidebar">
    <confirm-box
      v-if="showConfirm"
      message="确定要登出吗"
      @close="showConfirm = false"
      @confirmed="signOut">
    </confirm-box>
    <header class="sidebar-header">
        <div class="greeting">
          <i class="iconfont icon-heart" aria-hidden="true"></i>
          <span>Hello, betahouse!</span>
        </div>
        <i class="iconfont icon-signout" @click="showConfirm = true"></i>
    </header>
    <div class="sidebar-content">
      <ul class="term-lists">
        <side-bar-item
          v-for="(item, index) in groups"
          :key="index"
          :item="item">
        </side-bar-item>
      </ul>
      <div class="addlist sidebar-item" @click="addGroup">
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
import ConfirmBox from './ConfirmBox';

export default {
  props: ['groups'],
  components: {
    SideBarItem,
    ConfirmBox,
  },
  data() {
    return {
      showConfirm: false,
    };
  },
  methods: {
    addGroup() {
      const newGroup = this.groups.length + 1;
      this.$store.dispatch('addGroup', newGroup);
      this.$router.push({ path: `/members/${newGroup}` });
    },
    signOut() {
      this.showConfirm = false;
      this.$store.dispatch('signOut').then(() => this.$router.push('/'));
    },
  },
};
</script>

<style lang="stylus">
$sidebar-fontsize = 1.1rem

.sidebar
  display flex
  flex-direction column
  min-width 270px
  height 100vh
  .sidebar-header
    display flex
    align-items center
    font-size $sidebar-fontsize
    justify-content space-between
    box-sizing border-box
    height 40px
    box-shadow: 0 1px 0 rgba(0,0,0,.1);
    padding 6px
    i.icon-signout
      cursor pointer
    
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
