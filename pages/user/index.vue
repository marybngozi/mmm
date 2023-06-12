<template>
  <div class="h-screen bg-black">
    <div class="page">
      <UserHeader />

      <main>
        <section class="text-white font-clash px-4">
          <h3 class="font-bold text-3xl">John Okor</h3>
          <h6 class="text-xs">Johnokor2016@gmail.com</h6>
        </section>
      </main>
    </div>
    <BlogFooter />
  </div>
</template>

<script>
import UserHeader from "@/components/user/Header.vue";
import BlogFooter from "@/components/blog/Footer.vue";
export default {
  name: "UserHome",

  components: {
    UserHeader,
    BlogFooter,
  },
};
</script>

<style scoped>
main {
  @apply pt-20;
}
</style>
