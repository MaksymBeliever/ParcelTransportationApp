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
      Create
    </custom-button>
  </v-form>
</template>

<script>
import { format } from 'date-fns';
import { mapState } from 'vuex';
import validationCreateMixin from '@/mixins/validationCreateMixin.js';
export default {
  mixins: [ validationCreateMixin ],
  data() {
    return {
      request: {
        startPoint: this.currentRequest && this.currentRequest.startPoint,
        endPoint: this.currentRequest && this.currentRequest.endPoint,
        category: this.currentRequest && this.currentRequest.category,
        description: this.currentRequest && this.currentRequest.description,
        creationDate: this.currentRequest && this.currentRequest.creationDate,
        date: this.currentRequest && format(this.currentRequest?.date, 'yyyy-MM-dd'),
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

      this.createRequest();
    },
    createRequest() {
      this.id = Date.now();
      const { creationDate, date, ...rest } = this.request;

      const preparedRequest = {
        id: this.id,
        creationDate: new Date(),
        date: date && new Date(date),
        type: 'order',
        ...rest,
      };

      this.$emit('create', preparedRequest);
      this.request = {
        startPoint: '',
        endPoint: '',
        category: '',
        description: '',
        creationDate: '',
        date: '',
        type: '',
      };

      this.saveToStorage('requests', preparedRequest);
      this.router.push('/requests');
    },
  },
}
</script>
