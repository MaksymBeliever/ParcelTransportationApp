<template>
  <div>
    <custom-header>
      <custom-button @click="$router.push('/')" icon="mdi-home">Home</custom-button>
    </custom-header>
    <div class="request-list__header">
      <custom-title :size="2">List of all requests</custom-title>
      <navigation />
    </div>

    <div class="secondary__header">
      <custom-header>
        <custom-title :size="4">Sort by:</custom-title>
        <div class="selector__wrapper">
          <custom-selector
              @update:model-value="setSelectedSort"
              :model-value="selectedSort"
              :options="sortOptions"
              :color="COLORS.WHITE"
          />
        </div>
      </custom-header>
    </div>

    <request-list
        v-if="requests"
        :requests="sortedRequests"
        @remove="removeRequest"
    />
    <div v-else>Requests are loading...</div>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations } from 'vuex';
import RequestList from '@/components/RequestList.vue';
import Navigation from '@/components/Navigation.vue';
import requestsViewMixin from '@/mixins/requestsViewMixin.js';
import { setParsedToLocalStorage } from '@/utils';
export default {
  components: {
    Navigation,
    RequestList,
  },
  mixins: [ requestsViewMixin ],
  computed: {
    ...mapState({
      sortOptions: state => state.sortOptions,
      selectedSort: state => state.request.selectedSort,
    }),
    ...mapGetters({
      sortedRequests: 'request/sortedRequests',
    }),
  },
  methods: {
    ...mapMutations({
      setSelectedSort: 'request/setSelectedSort',
      removeStoreRequest: 'request/removeStoreRequest',
    }),
    removeRequest(request) {
      this.removeStoreRequest(request);
      const updatedArray = [...this.requests.filter(req => req.id !== request.id)];
      setParsedToLocalStorage('requests', updatedArray);
    },
  },
}
</script>

<style lang="scss">
  .request-list__header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .secondary__header {
    margin: 15px 0;
  }

  .selector__wrapper {
    width: 30%;
  }
</style>
