<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper" @click.self="$emit('close')">
        <div class="modal-container">
          <i class="iconfont icon-edit-copy"></i>
          <div class="left">
            <h1>
              {{ member.name}}
            </h1>
            <div class="social-media">
              <a :href="member.github" v-show="member.github">
                <i class="iconfont icon-pinnedoctocat"></i>
              </a>
              <a :href="member.blog">
                <i class="iconfont icon-blog"></i>
              </a>
            </div>
          </div>
          <div class="middle">
            <img src="../assets/avatar.png" alt="avatar">
          </div>
          <div class="right">
            <div class="member-identity">
              <span class="major">{{ member.major }}</span>
              <span class="generation">第 {{ member.generation }} 届成员</span>
            </div>
            <p class="member-info">
              {{ member.info}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: [
    'member',
  ],
};
</script>

<style lang="stylus" scoped>
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

.modal-container
  display flex
  position relative
  width 70rem
  margin 0px auto
  background-color #fff
  border-radius 2px
  box-shadow 0 2px 8px rgba(0, 0, 0, .33)
  transition all .3s ease
  > div
    flex 1 0 1
  > i
    position absolute
    top 20px
    right 20px
  .left
    display flex
    flex-direction column
    align-items center
    justify-content space-between
    min-width 15%
    h1
      align-self stretch 
      font-weight 300
      color #2c3e50
      writing-mode vertical-rl
      margin-right 1.5rem
      margin-top 6rem
    .social-media
      color black
      margin-bottom 40px
  .middle
    img
      width 100%
  .right
    display flex
    flex-direction column
    align-items center
    width 30%
    padding 70px 30px 0 30px
    .member-identity
      color gray
      .generation
        margin-left 20px
    .member-info
      margin-top 50px
      word-wrap: break-word
      line-height 2rem

.modal-enter
  opacity 0

.modal-leave-active
  opacity 0

.modal-enter .modal-container,
.modal-leave-active .modal-container
  -webkit-transform scale(1.1)
  transform scale(1.1)
</style>
