<template>
  <custom-header>
    <custom-button @click="$router.push('/')" icon="mdi-home">Home</custom-button>
    <custom-button @click="$router.push('/requests')" icon="mdi-menu">Requests</custom-button>
  </custom-header>
  <div class="title__wrapper">
    <custom-title :size="2">Create order request</custom-title>
  </div>
  <div>
    <order-form @create="createRequest" />
  </div>
</template>

<script>
import OrderForm from '@/components/OrderForm.vue';
import oderDeliveryMixin from '@/mixins/oderDeliveryMixin.js';
export default {
  components: { OrderForm },
  mixins: [ oderDeliveryMixin ],
}
</script>

<style lang="scss" scoped>
  .title__wrapper {
    margin-bottom: 20px;
  }
</style>
