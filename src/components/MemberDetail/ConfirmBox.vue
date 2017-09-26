<template>
  <div class="modal-mask confirm-box-mask">
    <div class="modal-wrapper confirm-box-wrapper" @click.self="$emit('close')">
        <div class="confirm-box-container">
          <div class="confirm-content">
            {{ message }}
          </div>
          <div class="confirm-buttons">
            <button @click="$emit('confirmed')">确定</button>
            <button @click="$emit('close')">取消</button>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [
    'message',
  ],
};
</script>

<style lang="stylus">
.confirm-box-mask
  z-index 9999

.confirm-box-container
  background-color #fff
  width 420px
  margin 0px auto
  background-color #fff
  border-radius 3px
  box-shadow 0 2px 8px rgba(0, 0, 0, .33)
  transition all .3s ease

.confirm-content
  padding 30px 20px
  color #48576a

.confirm-buttons
  padding 30px 20px 20px
  text-align right
</style>
