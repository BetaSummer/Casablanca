<template>
  <transition name="pop">
    <div class="pop-wrapper" v-show="message.isShown">
      <div class="pop-container">
        {{ message.content }}
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

// transition part   
.pop-enter-active
.pop-leave-active 
  transition: opacity .5s

.pop-enter
.pop-leave-to
  opacity: 0
</style>
