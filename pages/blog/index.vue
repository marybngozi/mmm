<template>
  <div class="body">
    <div class="page">
      <BlogHeader />

      <main class="flex flex-col justify-end h-[80vh]">
        <h1 class="text-white font-mikela text-5xl w-full lg:w-[353px]">
          So I've sought to understand why we yearn for Companionship...
        </h1>

        <div
          class="flex text-white items-center justify-between font-clash text-sm lg:text-2xl mt-4 w-full lg:w-[574px]"
        >
          <div class="flex items-center gap-2">
            <img
              src="@/assets/images/author.png"
              alt="author pics"
              class="h-7 w-7 lg:h-12 lg:w-12"
            />
            <p class="font-semibold">senSE</p>
          </div>

          <div class="font-medium">13th.Feb.2021</div>

          <div class="font-medium">8 min read</div>
        </div>
      </main>
    </div>
    <BlogFooter />
  </div>
</template>

<script>
import BlogHeader from "@/components/blog/Header.vue";
import BlogFooter from "@/components/blog/Footer.vue";
export default {
  name: "Blog",

  components: {
    BlogHeader,
    BlogFooter,
  },
};
</script>

<style scoped>
.page {
  @apply w-full px-5 lg:px-18 pt-5;
}
.body {
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(
      179.56deg,
      #797371 -5.84%,
      rgba(121, 115, 113, 0.24) 38.36%,
      #797371 89.84%
    ),
    url("../../assets/images/posts.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: scroll;
  background-position: center;
  background-origin: content-box;
}
</style>
