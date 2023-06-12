<template>
  <header>
    <div class="top">
      <div class="flex w-11/12 lg:w-11/12 justify-between">
        <span v-if="showSearch" class="flex w-full">
          <button class="px-5" @click="$router.go(-1)">
            <img src="@/assets/images/icons/long_right.svg" alt="arrow icon" />
          </button>

          <form @submit.prevent="searchBlog" class="w-full h-full">
            <input
              placeholder="Type in your search"
              type="text"
              name="pageSearch"
              id="pageSearch"
              v-model="pageSearch"
              maxlength="300"
              autofocus
            />
          </form>
        </span>

        <span v-else>
          <nuxt-link
            class="flex justify-center items-center h-14 w-14 lg:h-18 lg:w-18"
            to="/"
          >
            <img
              src="@/assets/images/logo.svg"
              alt="MMM Logo"
              class="w-18 h-8"
            />
          </nuxt-link>
        </span>
      </div>

      <div class="flex justify-end">
        <span>
          <button v-if="open" class="px-4 border-l-2 border-sand">
            <span class="icon icon-bookmark"></span>
          </button>

          <nuxt-link
            v-else
            @click.native="searchBlog"
            to="/blog/search"
            :class="`px-4 block button border-l-2 border-sand ${
              showSearch ? 'bg-white' : 'bg-transparent'
            }`"
          >
            <span class="icon icon-search"></span>
          </nuxt-link>
        </span>

        <span>
          <button
            v-if="showClose"
            @click="close"
            class="px-5 border-l-2 border-sand"
          >
            <span class="icon icon-close"></span>
          </button>

          <button
            v-else
            @click="showNav = true"
            class="px-5 border-l-2 border-sand"
          >
            <span class="icon icon-dashboard"></span>
          </button>
        </span>
      </div>
    </div>

    <nav v-if="showNav" class="nav-small">
      <div class="nav-top">
        <ul>
          <li>
            <nuxt-link to="/blog"> Blog </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/blog/bookmark"> Bookmark </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/"> About me </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/"> Shop </nuxt-link>
          </li>
        </ul>
      </div>

      <div class="nav-mid flex justify-between">
        <div class="hidden lg:flex gap-3 text-xs lg:w-2/3 ml-8">
          <p>MindingmyMind Blog</p>
          <p>All Rights Reserved</p>
          <p>{{ new Date().getFullYear() }} &nbsp;<span>&copy;</span></p>
        </div>

        <div class="flex w-full lg:w-1/3 justify-evenly">
          <button>
            <img src="@/assets/images/icons/instagram.svg" alt="icon" />
          </button>
          <button>
            <img src="@/assets/images/icons/twitter.svg" alt="icon" />
          </button>
          <button>
            <img src="@/assets/images/icons/linkedin.svg" alt="icon" />
          </button>
          <button>
            <img src="@/assets/images/icons/behance.svg" alt="icon" />
          </button>
          <button>
            <img src="@/assets/images/icons/profile.svg" alt="icon" />
          </button>
        </div>
      </div>

      <div class="nav-bottom">
        ...this blog is my little attempt at Loving you
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "UserHeader",
  data() {
    return {
      open: false,
      showNav: false,
      pageSearch: null,
    };
  },
  computed: {
    showClose() {
      return !!this.showNav;
    },
    showSearch() {
      return this.$route.name == "blog-search";
    },
  },
  methods: {
    close() {
      // this.showSearch = false;
      this.showNav = false;
    },
    searchBlog() {
      if (!this.pageSearch) return;

      console.log(this.pageSearch);
    },
  },
};
</script>

<style scoped>
@import url("../../assets/css/icons.css");
header {
  @apply border-2 lg:border border-sand bg-black fixed top-0 lg:top-4 left-0 lg:left-14 right-0 lg:right-14;
}
.top {
  @apply w-full flex justify-between h-14 lg:h-18;
}
.bg-top {
  @apply bg-transparent lg:bg-sand;
}
.top .button,
.top button {
  @apply flex h-full justify-center items-center;
}
.icon {
  @apply w-5 h-5 lg:w-8 lg:h-8;
}
input {
  @apply bg-brown w-full h-full text-white pl-3 text-sm outline-none hover:outline-none active:outline-none;
}
input::placeholder {
  @apply text-sm;
}
.nav-small {
  @apply h-32 lg:h-auto pb-2 bg-sand;
}
.nav-top ul {
  @apply flex justify-between lg:justify-end lg:gap-8 lg:pr-10;
}
.nav-big .nav-link a {
  @apply flex items-center h-full px-4 text-brown text-base font-normal font-clash;
}
.nav-top a {
  @apply inline-block px-4 py-5 text-brown text-xs lg:text-base font-normal lg:font-medium font-clash;
}
.nav-small button {
  @apply w-8 h-8 flex items-center justify-center;
  border: 1px solid #797371;
}
.nav-bottom {
  @apply flex justify-center lg:hidden font-medium pt-3 font-clash;
  font-size: 10px;
  line-height: 12px;
  color: #797371;
}
</style>
