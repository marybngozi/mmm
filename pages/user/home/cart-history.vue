<template>
  <div class="font-clash">
    <section class="mt-6">
      <OrdersNav :navs="navs" />
    </section>

    <section class="mt-6">
      <nuxt-child :foobar="123" />
    </section>
  </div>
</template>

<script>
import OrdersNav from "@/components/user/OrdersNav";

export default {
  name: "CartHistory",

  components: {
    OrdersNav,
  },

  data() {
    return {
      navs: [
        { title: "Ordered", link: "/user/home/cart-history" },
        {
          title: "Delivered orders",
          link: "/user/home/cart-history/delivered-orders",
        },
        { title: "Saved orders", link: "/user/home/cart-history/saved-orders" },
      ],
    };
  },
};
</script>

<style scoped></style>
