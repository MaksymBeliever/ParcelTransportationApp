<template>
  <custom-header>
    <custom-button @click="$router.push('/')" icon="mdi-home">Home</custom-button>
    <custom-button @click="$router.push('/requests')" icon="mdi-menu">Requests</custom-button>
  </custom-header>
  <div class="title__wrapper">
    <custom-title :size="2">Create delivery request</custom-title>
  </div>
  <div>
    <delivery-form @create="createRequest" />
  </div>
</template>

<script>
import DeliveryForm from '@/components/DeliveryForm.vue';
import oderDeliveryMixin from '@/mixins/oderDeliveryMixin.js';

export default {
  components: { DeliveryForm },
  mixins: [ oderDeliveryMixin ],
}
</script>

<style lang="scss" scoped>
  .title__wrapper {
    margin-bottom: 20px;
  }
</style>
