<template>
  <div class="container">
    <navbar />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Navbar from '../../components/NavBar/index.vue'

export default defineComponent({
  name: 'Detail',
  components: { Navbar },
  setup () {
    return {}
  }
})
</script>

<style lang="scss" scoped>
</style>
