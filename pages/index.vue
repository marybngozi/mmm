<template>
  <div class="page">
    <PageHeader />
  </div>
</template>

<script>
export default {
  name: "IndexPage",

  data() {
    return {
      menuClicked: false,
    };
  },
};
</script>
<style scoped>
.page {
  @apply bg-black h-screen w-full px-5 pt-5;
}
</style>
