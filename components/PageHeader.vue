<template>
  <header>
    <div class="top" :class="`${showNav ? 'bg-top' : 'bg-transparent'}`">
      <div class="flex w-9/12 justify-between">
        <input
          v-if="showSearch"
          placeholder="Type in your search"
          type="text"
          name="pageSearch"
          id="pageSearch"
          v-model="pageSearch"
          minlength="700"
        />

        <span v-else>
          <button v-if="open" class="px-3">
            <img src="@/assets/images/icons/long_right.svg" alt="arrow icon" />
          </button>
          <button v-else class="px-3">
            <img src="@/assets/images/logo.svg" alt="MMM Logo" />
          </button>
        </span>

        <nav
          v-if="showNav && !showSearch"
          class="nav-big hidden lg:flex lg:w-10/12 lg:justify-between"
        >
          <div class="flex justify-evenly items-center w-5/12 h-full">
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

          <div class="nav-link grid grid-flow-col auto-cols-max">
            <nuxt-link to="/"> Blog </nuxt-link>

            <nuxt-link to="/"> Podcast </nuxt-link>

            <nuxt-link to="/"> Portfolio </nuxt-link>

            <nuxt-link to="/"> Contact me </nuxt-link>
          </div>
        </nav>
      </div>

      <div class="flex justify-end">
        <span>
          <button
            v-if="open"
            class="px-4 border-l-2 border-sand lg:border-2 lg:border-black"
          >
            <span class="icon icon-bookmark"></span>
          </button>
          <button
            v-else
            class="px-4 border-l-2 border-sand lg:border-2 lg:border-black"
          >
            <span class="icon icon-search"></span>
          </button>
        </span>

        <span>
          <button
            v-if="open"
            class="px-5 border-l-2 border-sand lg:border-2 lg:border-black"
          >
            <span class="icon icon-close"></span>
          </button>
          <button
            v-else
            class="px-5 border-l-2 border-sand lg:border-2 lg:border-black"
          >
            <span class="icon icon-dashboard"></span>
          </button>
        </span>
      </div>
    </div>

    <nav v-if="showNav" class="nav-small block lg:hidden">
      <div class="nav-top">
        <ul>
          <li>
            <nuxt-link to="/"> Blog </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/"> Podcast </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/"> About me </nuxt-link>
          </li>
          <li>
            <nuxt-link to="/"> Shop </nuxt-link>
          </li>
        </ul>
      </div>

      <div class="nav-mid">
        <div class="flex w-full justify-evenly">
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
  name: "PageHeader",
  data() {
    return {
      open: false,
      showSearch: true,
      showNav: true,
      pageSearch: null,
    };
  },
};
</script>

<style scoped>
@import url("../assets/css/icons.css");
header {
  @apply w-full border-2 lg:border border-sand;
}
.top {
  @apply w-full flex justify-between h-14 lg:h-18;
}
.bg-top {
  @apply bg-transparent lg:bg-sand;
}
.top button {
  @apply flex h-full justify-center items-center;
}
.icon {
  @apply w-5 h-5 lg:w-8 lg:h-8 lg:bg-black;
}
input {
  @apply bg-transparent w-full text-white pl-3 text-xs;
}
input::placeholder {
  @apply text-xs;
}
.nav-small {
  @apply h-32 bg-sand;
}
.nav-top ul {
  @apply flex justify-between;
}
.nav-big .nav-link a {
  @apply flex items-center h-full px-4 text-brown text-base font-normal font-clash;
}
.nav-top a {
  @apply inline-block px-4 py-5 text-brown text-xs font-normal font-clash;
}
.nav-big button,
.nav-small button {
  @apply w-8 h-8 flex items-center justify-center;
  border: 1px solid #797371;
}
.nav-bottom {
  @apply flex justify-center font-medium pt-3 font-clash;
  font-size: 10px;
  line-height: 12px;
  color: #797371;
}
</style>
