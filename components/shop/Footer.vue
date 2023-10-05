<template>
  <footer style="z-index: 3" class="bg-sand px-4 fixed bottom-0 left-0 right-0">
    <div
      v-if="showPage"
      class="flex justify-between items-center divide-x divide-black"
    >
      <button class="py-4 w-1/5">
        <font-awesome-icon class="w-4 h-4" icon="arrow-left" />
      </button>

      <div class="w-1/5 h-14 bg-sand"></div>
      <div class="w-1/5 h-14 bg-camblue"></div>
      <div class="w-1/5 h-14 bg-sand"></div>

      <button class="py-4 w-1/5">
        <font-awesome-icon class="w-4 h-4" icon="arrow-right" />
      </button>
    </div>

    <div v-else class="flex justify-between items-center py-3">
      <div class="flex gap-1 text-xs lg:text-sm">
        <p class="font-clash font-medium text-[#797371]">
          Mind Store and all its trademarks belong to John Okor
        </p>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "ShopFooter",

  data() {
    return {
      key: "value",
    };
  },

  computed: {
    showPage() {
      return this.$route.name == "blog";
    },
  },
};
</script>

<style scoped></style>
