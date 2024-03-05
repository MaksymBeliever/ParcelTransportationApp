<template>
  <div v-if="requests.length > 0">
    <transition-group name="list">
      <list-item
          v-for="request in requests"
          :key="request.id"
          :request="request"
      >
        <custom-button
            :color="COLORS.TEAL"
            icon="mdi-inbox-arrow-down"
            @click="$router.push(`/${PATHS.REQUESTS}/${request.id}`,request)"
        >
          Open
        </custom-button>
        <custom-button
            :color="COLORS.TEAL"
            icon="mdi-delete"
            @click="$emit('remove', request)"
        >
          Remove
        </custom-button>
      </list-item>
    </transition-group>
  </div>

  <div v-else class="warning__wrapper">
    <custom-title
        :size="2"
        :color="COLORS.RED"
    >
      List of requests is empty
    </custom-title>
  </div>
</template>

<script>
import ListItem from '@/components/ListItem.vue';
import COLORS from '@/constants/colors.js';
import PATHS from '@/constants/paths.js';
export default {
  components: {
    ListItem,
  },
  props: {
    requests: {
      type: Array,
      required: true,
    }
  },
  data() {
    return {
      COLORS,
      PATHS,
    }
  }
}
</script>

<style lang="scss" scoped>
  .list {
    &-move,
    &-enter-active,
    &-leave-active {
      transition: all 0.3s ease;
    }

    &-move,
    &-enter-active,
    &-leave-active {
      transition: all 0.3s ease;
    }

    &-enter-from,
    &-leave-to {
      opacity: 0;
      transform: translateX(30px);
    }

    &-leave-active {
      position: absolute;
    }
  }

  .warning__wrapper {
    margin-top: 20px;
  }
</style>
