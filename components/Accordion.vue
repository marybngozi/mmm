<template>
  <div class="">
    <div class="tab__header bg-oragYellow">
      <a
        href="#"
        class="tab__link p-4 hover:bg-blue-darker no-underline flex justify-between items-center"
        @click.prevent="active = !active"
      >
        <span class="font-mediium font-raleway">{{ title }}</span>

        <span class="font-bold text-lg px-4 py-1" v-show="!active">＋</span>
        <span class="font-bold text-lg px-4 py-1" v-show="active">−</span>
      </a>
    </div>

    <transition name="fade">
      <div class="tab__content py-2" v-show="active"><slot /></div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Accordion",

  props: {
    title: {
      type: String,
      default: "Header",
    },
  },

  data() {
    return {
      active: false,
    };
  },
};
</script>

<style scoped>
.tab__content {
  color: #ffffff;
}
.fade-enter-active,
.fade-leave-active {
  transition: height 0.3s ease-in-out;
  overflow: hidden;
}
.fade-enter-from,
.fade-leave-to {
  height: 0px !important;
}
</style>
