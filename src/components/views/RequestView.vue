<template>
  <custom-header>
    <custom-button @click="$router.push('/')" icon="mdi-home">Home</custom-button>
    <custom-button @click="$router.push('/requests')" icon="mdi-menu">Requests</custom-button>
  </custom-header>

  <div class="title__wrapper">
    <custom-title :size="2">
      Page of {{ request.type === 'order' ? 'order' : 'delivery' }} request: {{ $route.params.id }}
    </custom-title>
  </div>

  <list-item :request="getCurrentRequest()">
    <custom-button
        @click="showModal"
        :color="COLORS.TEAL"
        icon="mdi-pencil"
    >
      Edit
    </custom-button>
  </list-item>

  <custom-modal v-model:show="modalVisible">
    <edit-order-form
        v-if="request.type === 'order'"
        @edit="editRequest"
        :currentRequest="request"
    />

    <edit-delivery-form
        v-else
        @edit="editRequest"
        :currentRequest="request"
    />
  </custom-modal>
</template>

<script>
import { useRoute } from 'vue-router';
import { mapMutations } from 'vuex';
import ListItem from '@/components/ListItem.vue';
import EditOrderForm from '@/components/EditOrderForm.vue';
import EditDeliveryForm from '@/components/EditDeliveryForm.vue';
import requestsViewMixin from '@/mixins/requestsViewMixin.js';

export default {
  components: { ListItem, EditOrderForm, EditDeliveryForm },
  mixins: [ requestsViewMixin ],
  props: { id: Object },
  data() {
    return {
      route: useRoute(),
      request: {},
      modalVisible: false,
    }
  },
  methods: {
    ...mapMutations({
      setRequests: 'request/setRequests',
    }),
    showModal() {
      this.modalVisible = !this.modalVisible;
    },
    editRequest(request) {
      this.setRequests(request);
      this.modalVisible = false;
    },
    getCurrentRequest() {
      const currentRequest = this.requests.filter(req => req.id === +this.route.params.id);
      this.request = Object.assign({}, currentRequest[0]);
      return Object.assign({}, currentRequest[0]);
    },
  },
  mounted() {
    this.request = this.getCurrentRequest();
  },
}
</script>

<style lang="scss" scoped>
  .title__wrapper {
    margin-bottom: 20px;
  }
</style>
