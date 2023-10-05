<template>
  <div class="flex flex-col gap-6">
    <DeliveredOrder v-for="w in orders" :key="w" />
  </div>
</template>

<script>
import DeliveredOrder from "@/components/shop/DeliveredOrder";
export default {
  name: "DeliveredOrders",

  components: {
    DeliveredOrder,
  },

  data() {
    return {
      orders: [1, 2],
    };
  },
};
</script>

<style scoped></style>
