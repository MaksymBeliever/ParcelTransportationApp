<template>
  <div class="home">
    <custom-header>
      <custom-button @click="$router.push('/requests')" icon="mdi-menu">Requests</custom-button>
    </custom-header>
    <div class="home__content">
      <custom-title :size="2">
        Create a request for the transportation of your parcel
        <br>
        or deliver another user's package
      </custom-title>

      <navigation />
    </div>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue'
export default {
  components: { Navigation },
}
</script>

<style lang="scss" scoped>
  .home {
    height: 100vh;

    &__content {
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
</style>
