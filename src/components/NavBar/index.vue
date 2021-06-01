<template>
  <div class="navbar">
    <div class="navbar__logo">
      <img src="" alt="">
    </div>
    <div class="navbar__user">
      <template v-if="isLogin">
        <el-avatar :size="size" :src="circleUrl"></el-avatar>
        <span>username</span>
      </template>
      <template v-else>
        <span @click="toLogin">登录</span>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup () {
    const circleUrl = ref<string>('https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png')

    const router: any = useRouter()
    const toLogin = () => {
      router.replace('/Login')
    }
    return {
      circleUrl,
      toLogin
    }
  }
})
</script>

<style lang="scss">
  .navbar{
    position: relative;
    height: 50px;
    &__logo{
      height: 100%;
      width: 150px;
    }
    &__user{
      width: 150px;
      height: 100%;
      line-height: 50px;
      position: absolute;
      right: 0;
      top: 0;
    }
  }
</style>
