<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper" @click.self="$emit('close')">
        <div class="modal-container">
          <i class="iconfont icon-save" @click="addMember"></i>
          <Left>
            <label slot="name">
              姓名
              <input
                class="name"
                type="text"
                v-model="newMember.name"
                :size="newMember.name.length || 1"
                :maxlength="4">  
            </label>
            <a slot="github" :href="newMember.github" v-show="newMember.github">
              <i class="iconfont icon-pinnedoctocat"></i>
            </a>
            <a slot="blog" :href="newMember.blog">
              <i class="iconfont icon-blog"></i>
            </a>
          </Left>
          <div class="middle">
            <picture-input 
              ref="pictureInput" 
              @change="onImgChange" 
              width="512" 
              height="512" 
              accept="image/jpeg,image/png" 
              size="10"
              buttonClass="hide"
              :customStrings="{
                drag: '点击或拖拽图片至此以上传图片',
                fileSize: '图片过大'
              }">
          </picture-input>
          </div>
          <Right>
            <label slot="major">
              专业
              <input class="major" type="text" v-model="newMember.major" maxlength="7">  
            </label>
            <label slot="group">
              第
              {{ newMember.group }}
              届成员
            </label>
            <textarea slot="info" class="member-info" v-model="newMember.info" maxlength="170" rows="6"></textarea>
            <label slot="github">
              <i class="iconfont icon-pinnedoctocat"></i>
              <input type="text" v-model="newMember.github">
            </label>
            <label slot="blog">
              <i class="iconfont icon-blog"></i>
              <input type="text" v-model="newMember.blog">
            </label>
          </Right>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import PictureInput from 'vue-picture-input';
import Left from './Left';
import Right from './Right';

export default {
  props: [
    'group',
  ],
  data() {
    return {
      newMember: {
        name: '',
        major: '',
        avatarBase64: '',
        photo: '',
        group: this.group,
        info: '',
        github: '',
        blog: '',
      },
    };
  },
  components: {
    Left,
    Right,
    PictureInput,
  },
  methods: {
    addMember() {
      this.newMember.group = Number(this.newMember.group);
      this.$store.dispatch('addMember', this.newMember);
    },
    onImgChange() {
      const { image, fileName } = this.$refs.pictureInput;
      this.newMember.avatarBase64 = image;
      this.newMember.photo = `${new Date().getTime()}${fileName}`;
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
  height 512px
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
      height 100%
      object-fit cover
    > *
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
</style>
