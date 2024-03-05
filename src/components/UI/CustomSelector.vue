<template>
  <select
      class="select"
      :style="{ 'border-color': color }"
      :value="modelValue"
      @change="changeOption"
  >
    <option
        :style="{ 'border': `1px solid ${color}` }"
        v-for="option in options"
        :key="option.value"
        :value="option.value"
    >
      {{ option.name }}
    </option>
  </select>
</template>
<script>
export default {
  name: 'custom-selector',
  props: {
    modelValue: {
      type: String,
    },
    options: {
      type: Array,
      default: () => []
    },
    color: {
      type: String,
    },
  },
  methods: {
    changeOption(e) {
      this.$emit('update:modelValue', e.target.value);
    }
  }
}
</script>

<style lang="scss" scoped>
  .select {
    width: 100%;
    padding: 16px;
    border: 0.5px solid #fff;
    border-radius: 4px;
    outline: none;
    -webkit-appearance: auto;
    transition: 0.15s opacity cubic-bezier(0.4, 0, 0.2, 1);
  }
</style>
