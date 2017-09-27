<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper" @click.self="$emit('close')">
        <div class="modal-container">
          <confirm-box
            v-if="showConfirm"
            message="你确定要删除此成员？"
            @close="showConfirm = false"
            @confirmed="deleteMember"
            >
          </confirm-box>
          <transition name="fade" mode="out-in">
            <div class="action-button" v-if="!isEditing" key="edit">
              <i class="iconfont icon-delete8e" @click="showConfirm = true"></i>
              <i class="iconfont icon-edit-copy" @click="toggleEditing"></i>
            </div>
            <i class="iconfont icon-save action-button" @click="saveForm" v-else key="save"></i>
          </transition>
          <transition name="fade" mode="out-in">
            <Left v-if="!isEditing" key="view">
              <h1 slot="name">{{ member.name }}</h1>
              <a slot="github" :href="member.github" v-visible="!!member.github">
                <i class="iconfont icon-pinnedoctocat"></i>
              </a>
              <a slot="blog" :href="member.blog" v-visible="!!member.github">
                <i class="iconfont icon-blog"></i>
              </a>
            </Left>
            <Left v-else key="editing">
              <label slot="name">
                姓名
                <input
                  class="name"
                  type="text"
                  v-model="form.name"
                  :size="form.name.length || 1"
                  :maxlength="4">  
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
            <transition name="fade" mode="out-in">
              <img
                v-if="!isEditing"
                key="view"
                :src="`/static/avatar/${member.photo}`"
                alt="avatar">
              <picture-input 
                v-else
                key="editing"
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
            </transition>
          </div>
          <transition name="fade" mode="out-in">
            <Right v-if="!isEditing" key="view">
              <span slot="major" class="major">{{ member.major }}</span>
              <span slot="group" class="group">
                第 {{ member.group }} 届成员
              </span>
              <p slot="info" class="member-info">
                {{ member.info}}
              </p>
            </Right>
            <Right v-else key="editing">
              <label slot="major">
                专业
                <input class="major" type="text" v-model="form.major" maxlength="7">  
              </label>
              <label slot="group">
                第
                <input class="group" type="text" v-model="form.group">
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
import { mapState, mapActions } from 'vuex';
import PictureInput from 'vue-picture-input';
import ConfirmBox from './ConfirmBox';
import Left from './Left';
import Right from './Right';

export default {
  props: [
    'member',
  ],
  components: {
    Left,
    Right,
    PictureInput,
    ConfirmBox,
  },
  data() {
    return {
      form: {
        ...this.member,
        avatarBase64: '',
      },
      showConfirm: false,
    };
  },
  computed: {
    ...mapState([
      'isEditing',
    ]),
  },
  methods: {
    ...mapActions([
      'toggleEditing',
    ]),
    deleteMember() {
      this.showConfirm = false;
      this.$store.dispatch('deleteMember', this.member.id);
    },
    saveForm() {
      this.form.group = Number(this.form.group);
      this.$store.dispatch('updateMember', this.form);
    },
    onImgChange() {
      const { image, fileName } = this.$refs.pictureInput;
      this.form.avatarBase64 = image;
      this.form.photo = `${new Date().getTime()}${fileName}`;
    },
  },
};
</script>

<style lang="stylus" scoped>
.modal-container
  display flex
  position relative
  width 70rem
  max-height 512px
  margin 0px auto
  background-color #fff
  border-radius 2px
  box-shadow 0 2px 8px rgba(0, 0, 0, .33)
  transition all .3s ease
  > div
    flex 1
  .action-button
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

// toggle editing
.fade-enter-active
  transition: all .3s ease;

.fade-leave-active 
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);

.fade-enter, .fade-leave-to
  transform: translateX(10px);
  opacity: 0;

</style>
