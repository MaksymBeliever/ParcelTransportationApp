<template>
  <h1
      v-if="size === 1"
      class="title"
      :style="{ 'color': color }"
  >
    <slot></slot>
  </h1>
  <h2
      v-else-if="size === 2"
      class="title"
      :style="{ 'color': color }"
  >
    <slot></slot>
  </h2>
  <h3
      v-else-if="size === 3"
      class="title"
      :style="{ 'color': color }"
  >
    <slot></slot>
  </h3>
  <h4
      v-else-if="size === 4"
      class="title"
      :style="{ 'color': color }"
  >
    <slot></slot>
  </h4>
  <h5
      v-else-if="size === 5"
      class="title"
      :style="{ 'color': color }"
  >
    <slot></slot>
  </h5>
  <h6
      v-else
      class="title"
      :style="{ 'color': color }"
  >
    <slot></slot>
  </h6>
</template>

<script>
export default {
  name: 'custom-title',
  props: {
    size: {
      type: Number,
      required: true,
    },
    color: {
      type: String,
    },
  },
}
</script>

<style lang="scss" scoped>
  .title {
    text-align: center;
  }
</style>
