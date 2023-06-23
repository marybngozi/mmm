<template>
  <div class="flex gap-4 w-full flex-wrap">
    <nuxt-link
      :to="nav.link"
      v-for="(nav, x) in navs"
      :key="x"
      class="category"
    >
      {{ nav.title }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: "OrdersNav",

  props: {
    navs: {
      type: Array,
      default: () => [
        { title: "Ordered", link: "/user/home/cart-history" },
        {
          title: "Delivered orders",
          link: "/user/home/cart-history/delivered-orders",
        },
        { title: "Saved orders", link: "/user/home/cart-history/saved-orders" },
      ],
    },
  },

  data() {
    return {};
  },
};
</script>

<style scoped>
.category {
  @apply font-raleway text-sm px-2.5 lg:px-3.5 py-1.5 lg:py-2 text-white border border-sand;
}
.nuxt-link-exact-active {
  @apply bg-camblue text-black border-camblue;
}
</style>
