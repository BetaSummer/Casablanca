<template>
  <div class="container wrapper">
    <pop></pop>
    <div class="signin-body wrapper">
      <span id="brand">🌺</span>
      <h1>Casablanca</h1>
      <p>β-house 成员管理</p>
      <form>
        <div class="field">
          <label for="email">
            <i class="iconfont icon-email"></i>
          </label>
          <input type="email" name="email" placeholder="email">
        </div>
        <div class="field">
          <label for="password">
            <i class="iconfont icon-password3"></i>
          </label>
          <input type="password" name="password" placeholder="password">
        </div>
        <button>登录</button>
      </form>
    </div>
  </div>
</template>

<script>
import Pop from '../components/Pop';

export default {
  name: 'SignInView',
  components: {
    Pop,
  },
};
</script>

<style lang="stylus" scoped>
input
button
  border 1px solid #dae1e3
  border-radius 3px
  font-size 1.1rem

button
  width 100%
  font-size 0.8rem
  padding 5px 0
  background #5ba4e5

#brand
  font-size 2rem

.wrapper
  display flex
  justify-content center
  align-items center
  flex-direction column
  
.container
  width 100%
  height 100%
  background url('../assets/background.jpg') no-repeat center center fixed
  background-size cover

.signin-body
  padding 50px
  background rgba(255, 255, 255, 0.8)
  border-radius 5px
  border 1px solid #dae1e3
  box-shadow 0 8px 17px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)
  max-width 400px
  form > * 
    margin 0.7rem 0
</style>
