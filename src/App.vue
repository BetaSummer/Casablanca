<template>
  <div id="app">
    <side-bar :generations="generations.data"></side-bar>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import SideBar from './components/SideBar';

export default {
  name: 'app',
  computed: {
    ...mapState({
      generations: 'generations',
    }),
  },
  components: {
    SideBar,
  },
  methods: {
    ...mapActions([
      'fetchGenerationCount',
    ]),
  },
  created() {
    this.fetchGenerationCount();
  },
};
</script>

<style lang="stylus">
html
body
  user-select none
  overflow: hidden;


body
  font-family 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif
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
