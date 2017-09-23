<template>
  <router-view></router-view>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'app',
  computed: {
    ...mapState([
      'isSignedIn',
    ]),
  },
  created() {
    if (!this.isSignedIn && this.$route.path !== '/') {
      this.$router.push('/');
    }
    if (this.isSignedIn && this.$route.path === '/') {
      this.$router.push('/members/1');
    }
  },
};
</script>

<style lang="stylus">
html
body
  user-select none
  overflow: hidden
  height 100%

body
  font-family 'Source Sans Pro', 'Helvetica Neue', Arial, sans-serif
  margin 0

h1
  font-size 2.5rem
  font-weight 300
  color #2c3e50

.iconfont
  font-size 1.4rem
  color #2979FF

a
  text-decoration none

.hide
  display none
</style>
