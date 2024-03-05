<template>
  <v-form
      v-model="valid"
      @submit.prevent="handleSubmit"
      ref="form">
  <div>
    <custom-label label="The city from which the parcel is sent" />
    <v-select
        v-model="request.startPoint"
        :items="cities"
        :color="COLORS.TEAL"
        :item-color="COLORS.TEAL"
        :rules="startRequiredRule"
        item-title="name"
        label="Choose city"
        required
    />
  </div>

  <div>
    <custom-label label="The city to which the parcel is sent" />
    <v-select
        v-model="request.endPoint"
        :items="cities"
        :rules="endRequiredRule"
        :color="COLORS.TEAL"
        :item-color="COLORS.TEAL"
        item-title="name"
        label="Choose city"
        required
    />
  </div>

  <div>
    <custom-label label="Type of parcel" />
    <v-select
        v-model="request.category"
        :items="categories"
        :color="COLORS.TEAL"
        :item-color="COLORS.TEAL"
        item-title="name"
        label="Choose type"
    />
  </div>

  <div>
    <custom-label label="Date of dispatch" />
    <v-text-field
        v-model="request.date"
        :color="COLORS.TEAL"
        :base-color="COLORS.TEAL"
        :item-color="COLORS.TEAL"
        type="date"
    >
    </v-text-field>
  </div>

  <div>
    <custom-label label="Parcel description" />
    <v-text-field
        v-model.trim="request.description"
        :color="COLORS.TEAL"
        :base-color="COLORS.TEAL"
        :item-color="COLORS.TEAL"
        label="Description"
    >
    </v-text-field>
  </div>

  <custom-button
      :color="COLORS.TEAL"
      class="w-full"
      icon="mdi-checkbox-marked-circle"
      type="submit"
  >
    Save
  </custom-button>
</v-form>
</template>

<script>
import { format } from 'date-fns';
import { mapState } from 'vuex';
import validationMixin from '@/mixins/validationEditMixin.js';

export default {
  mixins: [ validationMixin ],
  data() {
    return {
      request: {
        startPoint: this.currentRequest.startPoint && this.currentRequest.startPoint,
        endPoint: this.currentRequest.endPoint && this.currentRequest.endPoint,
        category: this.currentRequest.category && this.currentRequest.category,
        description: this.currentRequest.description && this.currentRequest.description,
        creationDate: this.currentRequest.creationDate && format(this.currentRequest?.creationDate, "yyyy-MM-dd"),
        date: this.currentRequest.date && format(this.currentRequest?.date, 'yyyy-MM-dd'),
      },
    }
  },
  computed: {
    ...mapState({
      categories: state => state.categories,
    }),
  },
  methods: {
    handleSubmit() {
      this.$refs.form.validate();
      if (!this.valid) {
        return;
      }

      this.editRequest();
    },
    editRequest() {
      const { creationDate, date, ...rest } = this.request;

      const preparedRequest = {
        id: this.currentRequest.id,
        creationDate: this.currentRequest.creationDate,
        date: date && new Date(date),
        type: 'order',
        ...rest,
      };

      this.$emit('edit', preparedRequest);

      const requestsFromStorage = this.parseData(this.getFromLocalStorage('requests'));
      const index = requestsFromStorage.findIndex(request => request.id === preparedRequest.id);

      requestsFromStorage[index] = Object.assign({}, requestsFromStorage[index], preparedRequest);
      this.setParsedToLocalStorage('requests', requestsFromStorage);
      this.editStoreRequest(requestsFromStorage);
    },
  },
}
</script>
