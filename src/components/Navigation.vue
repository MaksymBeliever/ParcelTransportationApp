<template>
  <div class="nav__wrapper">
    <nav class="nav">
      <ul class="nav__links">
        <li>
          <router-link :to="{ name: PATHS.ORDER }">
            <custom-button
                color="teal"
                icon="mdi-arrow-up-bold-box-outline"
            >
              Order
            </custom-button>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: PATHS.DELIVER }">
            <custom-button
                color="teal"
                icon="mdi-call-split"
            >
              Deliver
            </custom-button>
          </router-link>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import PATHS from '@/constants/paths.js';
export default {
  data() {
    return {
      PATHS,
    }
  }
}
</script>

<style lang="scss" scoped>
  .nav {
    &__links {
      display: flex;
      gap: 10px;
    }

    &__wrapper {
      margin-top: 15px;
    }
  }
</style>
