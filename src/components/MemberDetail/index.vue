<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper" @click.self="$emit('close')">
        <div class="modal-container">
          <transition name="fade" mode="out-in">
            <i class="iconfont icon-edit-copy" @click="isEditing = true" v-if="!isEditing" key="edit"></i>
            <i class="iconfont icon-save" @click="saveForm" v-else key="save"></i>
          </transition>
          <transition name="fade" mode="out-in">
            <Left v-if="!isEditing" key="view">
              <h1 slot="name">{{ member.name }}</h1>
              <a slot="github" :href="member.github" v-show="member.github">
                <i class="iconfont icon-pinnedoctocat"></i>
              </a>
              <a slot="blog" :href="member.blog">
                <i class="iconfont icon-blog"></i>
              </a>
            </Left>
            <Left v-else key="editing">
              <label slot="name">
                姓名
                <input class="name" type="text" v-model="form.name" :size="form.name.length">  
              </label>
              <a slot="github" :href="member.github" v-show="member.github">
                <i class="iconfont icon-pinnedoctocat"></i>
              </a>
              <a slot="blog" :href="member.blog">
                <i class="iconfont icon-blog"></i>
              </a>
            </Left>
          </transition>
          <div class="middle">
            <img src="../../assets/avatar.png" alt="avatar">
          </div>
          <transition name="fade" mode="out-in">
            <Right v-if="!isEditing" key="view">
              <span slot="major" class="major">{{ member.major }}</span>
              <span slot="generation" class="generation">
                第 {{ member.generation }} 届成员
              </span>
              <p slot="info" class="member-info">
                {{ member.info}}
              </p>
            </Right>
            <Right v-else key="editing">
              <label slot="major">
                专业
                <input class="major" type="text" v-model="form.major" :size="form.major.length">  
              </label>
              <label slot="generation">
                第
                <input class="generation" type="text" v-model="form.generation">
                届成员
              </label>
              <textarea slot="info" class="member-info" v-model="form.info" maxlength="170" rows="6"></textarea>
              <label slot="github">
                <i class="iconfont icon-pinnedoctocat"></i>
                <input type="text" v-model="form.github">
              </label>
              <label slot="blog">
                <i class="iconfont icon-blog"></i>
                <input type="text" v-model="form.blog">
              </label>
            </Right>
          </transition>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Left from './Left';
import Right from './Right';

export default {
  props: [
    'member',
  ],
  components: {
    Left,
    Right,
  },
  data() {
    return {
      isEditing: false,
      form: this.member,
    };
  },
  methods: {
    saveForm() {
      // TODO：validity
      this.$store.dispatch('updateMember', this.form);
      this.isEditing = false;
    },
  },
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
    flex 1
  > i
    position absolute
    top 20px
    right 20px
    cursor pointer
  .middle
    img
      width 512px

input
textarea
  border none
  border-bottom 1px solid black

.modal-enter
  opacity 0

.modal-leave-active
  opacity 0

.modal-enter .modal-container,
.modal-leave-active .modal-container
  -webkit-transform scale(1.1)
  transform scale(1.1)

// toggle editing
.fade-enter-active
  transition: all .3s ease;

.fade-leave-active 
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);

.fade-enter, .fade-leave-to
  transform: translateX(10px);
  opacity: 0;

</style>
