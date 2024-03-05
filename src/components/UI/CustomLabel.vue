<template>
  <span class="label">{{ label }}</span>
</template>

<script>
export default {
  name: 'custom-label',
  props: {
    label: {
      type: String,
      required: true,
    }
  },
}
</script>

<style lang="scss" scoped>
  .label {
    color: teal;
    font-weight: bold;
  }
</style>
