<template>
  <div class="item">
    <ul class="item-list">
      <li>
        <strong class="item-list__title">Start point:</strong>
        <span class="item-list__subtitle">{{ request.startPoint }}</span>
      </li>
      <li>
        <strong class="item-list__title">End point:</strong>
        <span class="item-list__subtitle">{{ request.endPoint }}</span>
      </li>
      <li v-if="orderRequest && request.category">
        <strong class="item-list__title">Category:</strong>
        <span class="item-list__subtitle">{{ request.category ? request.category : '' }}</span>
      </li>
      <li>
        <strong class="item-list__title">Date of creation :</strong>
        <span class="item-list__subtitle">{{ request.creationDate && format(request.creationDate, 'dd-MM-yyyy') }}</span>
      </li>
      <li v-if="request.date">
        <strong class="item-list__title">Date of sending:</strong>
        <span class="item-list__subtitle">{{ request.date && format(request.date, 'dd-MM-yyyy') }}</span>
      </li>
      <li v-if="orderRequest && request.description">
        <strong class="item-list__title">Description:</strong>
        <span class="item-list__subtitle">{{ request.description }}</span>
      </li>
    </ul>
    <div class="item__btns">
      <slot></slot>
    </div>
  </div>
</template>

<script>

import { format } from 'date-fns';

export default {
  methods: { format },
  props: {
    request: {
      type: Object,
      required: true,
    }
  },
  data() {
    return {
      orderRequest: this.request.type === 'order',
    }
  }
}
</script>

<style lang="scss" scoped>
  .item {
    margin-top: 15px;
    padding: 15px;
    border: 2px solid teal;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &-list {
      &__title {
        margin-right: 5px;
      }

      &__subtitle {
        color: teal;
      }
    }

    &__btns {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
  }
</style>
