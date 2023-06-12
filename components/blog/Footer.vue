<template>
  <footer class="bg-sand px-4 fixed bottom-0 left-0 right-0">
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
        <p class="font-clash font-medium text-black">MindingmyMind Blog</p>
        <p>{{ year }}</p>
        <p>&copy;</p>
      </div>

      <div class="flex gap-1 items-center">
        <font-awesome-icon class="w-4 h-4" :icon="['fab', 'instagram']" />
        <font-awesome-icon class="w-5 h-4" :icon="['fab', 'twitter']" />
        <a
          class="text-xs lg:text-sm font-clash"
          href="https://twitter.com/sen_se___"
          target="_blank"
        >
          sen_se___
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "BlogFooter",

  data() {
    return {
      key: "value",
    };
  },

  computed: {
    year() {
      return new Date().getFullYear();
    },
    showPage() {
      return this.$route.name == "blog";
    },
  },
};
</script>

<style scoped></style>
