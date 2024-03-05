<template>
  <main class="main">
    <div class="main__content">
      <router-view />
    </div>
  </main>
</template>

<script>
import { RouterView } from 'vue-router'
export default {

}
</script>

<style lang="scss" scoped>
  .main {
    width: 700px;
  }
</style>
