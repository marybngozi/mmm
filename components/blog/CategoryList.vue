<template>
  <div class="flex gap-4 w-full flex-wrap">
    <button
      v-for="(cat, x) in categories"
      :key="x"
      :class="`category ${cat.active ? 'active' : ''}`"
    >
      {{ cat.name }}
    </button>
  </div>
</template>

<script>
export default {
  name: "CategoryList",

  props: {
    mode: {
      type: String,
      default: "multiple",
      // values: "multiple" | "single",
    },
    categories: {
      type: Array,
      default: () => [
        { name: "All", active: true, value: "all" },
        { name: "Opinion", active: false, value: "opinion" },
        { name: "Love", active: false, value: "love" },
        { name: "Philosophy", active: false, value: "philosophy" },
        { name: "Poetry", active: false, value: "poetry" },
        { name: "Governance", active: false, value: "governance" },
        { name: "Design", active: false, value: "design" },
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
.active {
  @apply bg-camblue text-black border-camblue;
}
</style>
