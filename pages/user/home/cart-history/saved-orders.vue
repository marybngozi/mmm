<template>
  <div class="flex flex-col gap-6">
    <SavedOrder v-for="w in orders" :key="w" />
  </div>
</template>

<script>
import SavedOrder from "@/components/shop/SavedOrder";
export default {
  name: "SavedOrders",

  components: {
    SavedOrder,
  },

  data() {
    return {
      orders: [1, 2],
    };
  },
};
</script>

<style scoped></style>
