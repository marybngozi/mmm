<template>
  <footer class="bg-sand px-4 py-3 fixed bottom-0 left-0 right-0">
    <div class="flex justify-between items-center">
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
  name: "PageFooter",

  computed: {
    year() {
      return new Date().getFullYear();
    },
  },
};
</script>

<style scoped></style>
