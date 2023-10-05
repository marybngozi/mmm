<template>
  <svg
    @click="klinkGlass()"
    class="happy"
    width="52"
    height="52"
    viewBox="0 0 52 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g ref="sad_face">
      <path
        ref="face"
        class="fill-white"
        d="M47.8905 35.2626C49.0631 32.4317 49.6667 29.3975 49.6667 26.3333C49.6667 20.1449 47.2083 14.21 42.8325 9.83418C38.4566 5.45833 32.5217 3 26.3333 3C20.1449 3 14.21 5.45833 9.83418 9.83418C5.45833 14.21 3 20.1449 3 26.3333C3 29.3975 3.60353 32.4317 4.77614 35.2626C5.94875 38.0935 7.66747 40.6658 9.83418 42.8325C12.0009 44.9992 14.5731 46.7179 17.4041 47.8905C20.235 49.0631 23.2692 49.6667 26.3333 49.6667C29.3975 49.6667 32.4317 49.0631 35.2626 47.8905C38.0935 46.7179 40.6658 44.9992 42.8325 42.8325C44.9992 40.6658 46.7179 38.0935 47.8905 35.2626Z"
        stroke-width="2.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        ref="eye1"
        class="fill-white"
        d="M19.9722 22.8889C20.5089 22.8889 20.9444 22.0178 20.9444 20.9444C20.9444 19.8711 20.5089 19 19.9722 19C19.4356 19 19 19.8711 19 20.9444C19 22.0178 19.4356 22.8889 19.9722 22.8889Z"
        stroke-width="2.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        ref="eye2"
        class="fill-white"
        d="M32.9722 22.8889C33.5089 22.8889 33.9444 22.0178 33.9444 20.9444C33.9444 19.8711 33.5089 19 32.9722 19C32.4356 19 32 19.8711 32 20.9444C32 22.0178 32.4356 22.8889 32.9722 22.8889Z"
        stroke-width="2.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        ref="lip"
        class="fill-white"
        d="M17.9998 38.417C19.0831 37.3336 20.3692 36.4743 21.7847 35.8879C23.2002 35.3016 24.7173 34.9999 26.2494 34.9999C27.7815 34.9999 29.2986 35.3016 30.7141 35.8879C32.1295 36.4743 33.4157 37.3336 34.499 38.417"
        stroke-width="2.33333"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
  </svg>
</template>

<script>
export default {
  name: "SadFace",

  methods: {
    klinkGlass() {
      this.$refs["face"].classList.toggle("smiled");
      this.$refs["eye1"].classList.toggle("tilt");
      this.$refs["eye2"].classList.toggle("tilt");
      this.$refs["lip"].classList.toggle("smile");
    },
  },
};
</script>

<style scoped>
#happy {
  cursor: pointer;
}
.fill-white {
  stroke: #ffffff;
}
.smiled {
  fill: #e1c5b4;
}
.tilt {
  animation-name: cheers1;
  animation-duration: 1.7s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}
.smile {
  animation-name: smiler;
  animation-duration: 1.8s;
  animation-timing-function: ease-in-out;
  animation-fill-mode: forwards;
}
@keyframes cheers1 {
  25% {
    transform-origin: center;
    transform: scale(1.2, 0.8);
  }
  100% {
    transform-origin: center;
    transform: scale(1, 1);
  }
}
@keyframes smiler {
  25% {
    transform-origin: center;
    transform: scale(1.2, 1);
  }
  100% {
    transform-origin: center;
    transform: scale(1, 1);
  }
}
</style>
