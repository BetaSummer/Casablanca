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

.iconfont
  font-size 1.4rem
  color #2979FF
</style>
