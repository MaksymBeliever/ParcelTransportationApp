<template>
  <div
      class="dialog"
      v-if="show"
      @click.stop="hideModal"
  >
    <div @click.stop class="dialog__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'custom-modal',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hideModal() {
      this.$emit('update:show', false);
    }
  },
}
</script>

<style lang="scss" scoped>
  .dialog {
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0,0,0,0.5);
    position: fixed;
    display: flex;

    &__content {
      margin: auto;
      border-radius: 12px;
      min-height: 50px;
      min-width: 300px;
      padding: 30px;
      background-color: darkslategrey;
    }
  }
</style>
