<template>
  <div class="toolbar" :style="bgPosition">
    <div class="toolbar-headline">
      <h1>
        第{{ generation || 1 }}届
      </h1>
    </div>
    <div class="toolbar-actions">
      <button class="toolbar-button">
        <i class="iconfont icon-add1"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bgPosition: {
        backgroundPosition: `0 ${this.generation * (-150)}px`,
      },
    };
  },
  props: ['generation'],
};
</script>

<style lang="stylus">
.toolbar
  min-height 100px
  padding 1rem
  display flex
  justify-content space-between
  align-items flex-end
  border-left 1px solid rgba(0,0,0,.1)
  background url('../assets/toolbar-bg.jpg') no-repeat
  // 根据不同届更改 position
  background-position 0 0
  .toolbar-headline
    align-self flex-end
    h1
      color white
  .toolbar-button
    padding 9px 12px
    line-height 1.4rem
    cursor pointer
    border none
    border-radius 3px
    box-shadow none
    background #3e69e4
    .iconfont
      color white
  .toolbar-button:hover
    background #3459c1
</style>
