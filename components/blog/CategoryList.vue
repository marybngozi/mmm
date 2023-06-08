<template>
  <div class="flex gap-4">
    <div v-for="(cat, x) in categories" :key="x" class="category">
      {{ cat.name }}
    </div>
  </div>
</template>

<script>
export default {
  name: "CategoryList",

  data() {
    return {
      categories: [
        { name: "All", value: "all" },
        { name: "Opinion", value: "opinion" },
        { name: "Love", value: "love" },
        { name: "Philosophy", value: "philosophy" },
      ],
    };
  },
};
</script>

<style scoped>
.category {
  @apply font-raleway text-sm px-2.5 py-1.5 text-white border border-sand;
}
.active {
  @apply bg-camblue text-black;
}
</style>
