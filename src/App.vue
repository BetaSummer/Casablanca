<template>
  <router-view></router-view>
</template>

<script>
export default {
  name: 'app',
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
