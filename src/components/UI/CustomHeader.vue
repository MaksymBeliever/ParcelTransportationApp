<template>
  <header class="header">
    <slot></slot>
  </header>
</template>

<script>

export default {
  name: 'custom-header',
}
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    background-color: teal;
    padding: 10px;
  }
</style>
