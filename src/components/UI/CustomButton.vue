<template>
  <v-btn
      :prepend-icon="icon"
      :color="color"
      :class="className"
  >
    <slot></slot>
  </v-btn>
</template>

<script>
export default {
  name: 'custom-button',
  props: {
    color: {
      type: String,
    },
    icon: {
      type: String,
    },
    className: {
      type: String,
    },
  },
}
</script>

<style lang="scss" scoped>
  .w-full {
    width: 100%;
  }
</style>
