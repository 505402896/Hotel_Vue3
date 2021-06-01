<template>
  <div class="carousel">
    <el-carousel :interval="3000" arrow="always">
      <el-carousel-item v-for="item in 4" :key="item">
        <h3>{{ item }}</h3>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  setup () {
    const imgURL :Array<string> = [
      'http://pic1.win4000.com/wallpaper/2018-12-15/5c14c7917d2bd.jpg',
      'http://pic1.win4000.com/wallpaper/2018-12-15/5c14c794529d6.jpg',
      'http://pic1.win4000.com/wallpaper/2018-12-15/5c14c79744653.jpg'
    ]
    return {
      imgURL
    }
  }
})
</script>

<style lang="scss" scoped>
  .carousel, /deep/.el-carousel__item, /deep/.el-image__inner{
    position: absolute;
    left: 0;
    top: 0;
    width: 50vw;
    height: 50vh;
    // overflow: hidden;
  }

  /deep/.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  /deep/.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>
