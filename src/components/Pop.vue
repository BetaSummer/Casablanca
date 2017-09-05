<template>
  <transition name="pop">
    <div class="pop-wrapper">
      <div class="pop-container">
        hello
      </div>
    </div>
  </transition>
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
  position fixed
  margin auto
  top 0.5rem
  left 0
  right 0
  border-radius 2px
  max-width 100px
  background-color white
</style>
