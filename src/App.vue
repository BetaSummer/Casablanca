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

button
  color #fff
  text-align center
  line-height 1
  border-radius 4px
  border 1px solid #20a0ff
  background-color #20a0ff
  padding 10px 15px
  box-sizing border-box
  outline none

.hide
  display none

// modal style
.modal-mask
  position fixed
  z-index 9998
  top 0
  left 0
  width 100%
  height 100%
  background-color rgba(0, 0, 0, .5)
  display table
  transition opacity .3s ease

.modal-wrapper
  display table-cell
  vertical-align middle

.modal-enter
  opacity 0

.modal-leave-active
  opacity 0

.modal-enter .modal-container,
.modal-leave-active .modal-container
  -webkit-transform scale(1.1)
  transform scale(1.1)
</style>
