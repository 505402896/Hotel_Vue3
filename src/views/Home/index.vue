<template>
  <div class="container">
    <carousel />
    <navbar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import carousel from './module/carousel.vue'
import navbar from './module/navbar.vue'

export default defineComponent({
  name: 'Home',
  setup () {
    return {}
  },
  components: { carousel, navbar }
})
</script>

<style lang="scss" scoped>

</style>
