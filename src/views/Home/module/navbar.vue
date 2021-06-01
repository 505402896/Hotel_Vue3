<template>
  <div class="navbar">
    <el-breadcrumb separator=" ">
      <el-breadcrumb-item :to="{ path: '/Home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/Detail' }">预定</el-breadcrumb-item>
      <el-breadcrumb-item :to="{ path: '/' }">XXX</el-breadcrumb-item>
      <el-breadcrumb-item v-if="!isLogin" :to="{ path: '/Login' }">登录</el-breadcrumb-item>
      <el-breadcrumb-item v-else :to="{ path: '/User' }">个人中心</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  setup () {
    const isLogin = sessionStorage.getItem('username') === null ? ref<boolean>(false) : ref<boolean>(true)
    return {
      isLogin
    }
  }
})
</script>

<style lang="scss" scoped>
 .navbar{
   position: absolute;
   right: 100px;
   top: 10vh;
   /deep/.el-breadcrumb__inner{
     color: #fff;
     font-size: 16px;
     font-weight: bold;
     padding: 0 15px;
     cursor: pointer;
   }
 }
</style>
