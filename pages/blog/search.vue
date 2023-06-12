<template>
  <div class="h-screen">
    <div class="page">
      <BlogHeader />

      <main class="mt-5 lg:pt-14">
        <section>
          <CategoryList />

          <hr class="border-t border-gray-500 my-3" />

          <div
            class="mt-5 text-gray-400 font-clash font-medium text-sm lg:text-xl"
          >
            Before you make your search, you can easily have a taste of any of
            our popular wines
          </div>
        </section>

        <section class="mt-4 lg:mt-10 grid gap-4 grid-cols-1 lg:grid-cols-3">
          <SmallCard v-for="d in 10" :key="d" class="w-full h-auto" />
        </section>
      </main>
    </div>
    <BlogFooter />
  </div>
</template>

<script>
import BlogHeader from "@/components/blog/BlogHeader.vue";
import BlogFooter from "@/components/blog/BlogFooter.vue";
import SmallCard from "@/components/blog/SmallCard.vue";
import CategoryList from "@/components/blog/CategoryList.vue";
export default {
  name: "BlogSearch",

  components: {
    BlogHeader,
    BlogFooter,
    SmallCard,
    CategoryList,
  },

  data() {
    return {
      menuClicked: false,
    };
  },
};
</script>
<style scoped>
.page {
  @apply bg-black w-full px-5 lg:px-18 py-16;
}
main {
  width: 100%;
  min-height: calc(100vh - 120px);
  background-image: linear-gradient(
      0deg,
      rgba(15, 4, 11, 0.3),
      rgba(15, 4, 11, 0.37)
    ),
    url("../../assets/images/hero.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: right top;
}
.texts {
  @apply font-clash text-xs lg:text-2xl lg:font-medium text-white;
}
</style>
