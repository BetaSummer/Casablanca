<template>
  <div id="app">
    <side-bar :terms="terms"></side-bar>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SideBar from './components/SideBar';

export default {
  name: 'app',
  data() {
    return {
      terms: [
        1, 2, 3, 4, 5, 6,
      ],
    };
  },
  components: {
    SideBar,
  },
};
</script>

<style lang="stylus">
html
body
  user-select none
  overflow: hidden;


body
  font-family "Helvetica Neue", Helvetica, STHeiTi, sans-serif
  margin 0

#app
  display flex
  height 100%

.main
  flex 1
  display flex
  flex-direction column
  background #EEEEEE
  
.iconfont
  font-size 1.4rem
  color #2979FF
</style>
