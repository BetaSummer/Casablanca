<template>
  <div class="pop-wrapper">
    <div class="pop-container">
      <slot name="content">
        This is a piece of message.
      </slot>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState([
      'message',
    ]),
  },
};
</script>

<style lang="stylus" scoped>
.pop-wrapper
  z-index 9999
  position fixed
  margin auto
  top 0.5rem
  left 0
  right 0
  border-radius 1px
  max-width 10rem
  padding 0.3rem 0
  background-color white
  > div
    text-align center
</style>
