<template>
  <div class="p-10">
    <h2 class="font-bold text-4xl mb-10">Incoming <span>/ 2</span></h2>
    <div class="w-full gap-4" cellspacing="10">
      <incoming-item v-for="order in orders" :key="order.id" :order="order" />
    </div>
  </div>
</template>

<script>
import { orders } from "../data/orders.json";

export default {
  data() {
    return {
      orders: orders,
    };
  },
};
</script>

