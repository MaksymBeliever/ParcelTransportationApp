<template>
  <v-form
      v-model="valid"
      @submit.prevent="handleSubmit"
      ref="form"
  >
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
          :color="COLORS.TEAL"
          :item-color="COLORS.TEAL"
          :rules="endRequiredRule"
          item-title="name"
          label="Choose city"
          required
      />
    </div>

    <div>
      <custom-label label="Date of dispatch" />
      <v-text-field
          ref="select"
          v-model="request.date"
          :color="COLORS.TEAL"
          :base-color="COLORS.TEAL"
          :item-color="COLORS.TEAL"
          label="Date"
          type="date"
      >
      </v-text-field>
    </div>

    <custom-button
        :color="COLORS.TEAL"
        class="w-full"
        icon="mdi-checkbox-marked-circle"
        type="submit"
    >
      Create
    </custom-button>
  </v-form>
</template>

<script>
import { format } from 'date-fns';
import validationCreateMixin from '@/mixins/validationCreateMixin.js';

export default {
  mixins: [ validationCreateMixin ],
  data() {
    return {
      request: {
        startPoint: this.currentRequest && this.currentRequest.startPoint,
        endPoint: this.currentRequest && this.currentRequest.endPoint,
        creationDate: this.currentRequest?.creationDate && format(this.currentRequest.creationDate, "yyyy-MM-dd"),
        date: this.currentRequest?.date && format(this.currentRequest.date, 'yyyy-MM-dd'),
      },
    }
  },
  methods: {
    handleSubmit() {
      this.$refs.form.validate();
      if (!this.valid) {
        return;
      }

      this.createRequest();
    },
    createRequest() {
      this.id = Date.now();
      const { creationDate, date, ...rest } = this.request;

      const preparedRequest = {
        id: this.id,
        creationDate: new Date(),
        date: date && new Date(date),
        type: 'deliver',
        ...rest,
      };

      this.$emit('create', preparedRequest);
      this.request = {
        startPoint: '',
        endPoint: '',
        creationDate: '',
        date: '',
        type: ''
      };

      this.saveToStorage('requests', preparedRequest);
      this.router.push('/requests');
    },
  },
}
</script>

<style lang="scss" scoped>
  .errorMessage {
    margin-top: 5px;
    color: red;
  }
</style>
