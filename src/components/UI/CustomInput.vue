<template>
  <v-text-field
      :value="modelValue"
      @input="updateInput"
      :base-color="baseColor"
      :color="color"
      :item-color="itemColor"
      :type="type"
  >
  </v-text-field>
</template>

<script>
export default {
  name: 'custom-input',
  props: {
    modelValue: [String, Number],
    type: {
      type: String,
    },
    color: {
      type: String,
    },
    baseColor: {
      type: String,
    },
    itemColor: {
      type: String,
    },
  },
  methods: {
    updateInput(e) {
      this.$emit('update:modelValue', e.target.value);
    }
  }
}
</script>
