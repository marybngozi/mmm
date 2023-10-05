<template>
  <div class="h-auto min-h-[100vh] bg-black">
    <div class="page">
      <UserHeader />

      <main>
        <section class="text-white font-clash px-4 lg:px-14">
          <h3 class="font-bold text-3xl lg:text-5xl">John Okor</h3>
          <h6 class="text-xs lg:text-xl">Johnokor2016@gmail.com</h6>
        </section>

        <!-- INTERNAL NAVIGATION -->
        <section id="nav">
          <ul>
            <li>
              <nuxt-link to="/user/home"> Reading history </nuxt-link>
            </li>
            <li>
              <nuxt-link to="/user/home/cart-history">Cart history</nuxt-link>
            </li>
            <li>
              <nuxt-link to="/user/home/profile-details">
                Profile details
              </nuxt-link>
            </li>
          </ul>
        </section>

        <section id="body">
          <nuxt-child :foobar="123" />
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
  @apply pt-28;
}
#body,
#nav {
  @apply mt-0 lg:mt-8 px-4 lg:px-14;
}

#body {
  @apply mt-6 pb-14;
}

#nav {
  @apply bg-black pt-10 top-0;
  /* z-index: 100; */
}

#nav ul {
  @apply flex justify-between lg:justify-start border-b-2 border-gray-500;
}
#nav ul li {
  @apply w-1/3 lg:w-2/12;
  margin-bottom: -1.9px;
}
#nav ul li a {
  @apply block text-white font-clash text-xs lg:text-2xl border-b-2 border-gray-500 w-full py-2;
}
#nav ul li a.nuxt-link-exact-active {
  @apply font-semibold border-white;
}
</style>
