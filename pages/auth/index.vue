<template>
  <div class="holder">
    <div class="flex justify-end lg:pr-18">
      <button
        @click="$router.go(-1)"
        class="border-2 border-sand h-14 w-14 flex justify-center items-center"
      >
        <img src="@/assets/images/icons/close.svg" alt="icons" />
      </button>
    </div>

    <section class="w-full text-center font-raleway text-white mt-10">
      <h4 class="font-medium lg:text-xl">Welcome to</h4>
      <h1 class="font-mikela text-[46px] lg:text-5xl leading-12">
        MindingMyMind
      </h1>

      <h3 class="font-bold mt-4 lg:text-xl">This is My Personal Wine Press</h3>
      <h6 class="text-xs lg:text-base">I Cultivate Words and Sell Them</h6>
    </section>

    <section
      class="flex flex-col lg:flex-row gap-4 justify-center lg:justify-around items-center mt-[100px]"
    >
      <h3 class="font-mikela text-xl lg:text-4xl text-white">Sigin / Signup</h3>
      <div id="googleButton" class="bg-black"></div>
    </section>

    <section
      class="absolute bottom-14 lg:bottom-20 left-0 right-0 flex justify-center flex-wrap px-8"
    >
      <p
        class="text-white font-raleway text-xs lg:text-sm font-medium text-center"
      >
        I value your privacy. No information shared with me will be used for
        anything other than tracking your activity within this wine press. It
        will never be shared.
      </p>
    </section>

    <BlogFooter />
  </div>
</template>

<script>
import BlogFooter from "@/components/blog/Footer.vue";
import jwt_decode from "jwt-decode";
export default {
  name: "Login",

  components: {
    BlogFooter,
  },
  mounted() {
    // initialize Google Sign in
    google.accounts.id.initialize({
      client_id: this.$config.googleClientId,
      callback: this.handleCredentialResponse, //method to run after user clicks the Google sign in button
      context: "signin",
    });

    // render button
    google.accounts.id.renderButton(document.getElementById("googleButton"), {
      type: "standard",
      size: "large",
      text: "signin_with",
      shape: "rectangular",
      logo_alignment: "center",
      theme: "dark",
      width: 350,
    });
  },

  methods: {
    handleCredentialResponse(response) {
      console.log({ response });
      const token = jwt_decode(response.credential);
      console.log({ token });
      console.log(`ID: ${token.sub}`);
      console.log(`Full Name: ${token.name}`);
      console.log(`Given Name: ${token.given_name}`);
      console.log(`Family Name: ${token.family_name}`);
      console.log(`Image URL: ${token.picture}`);
      console.log(`Email: ${token.email}`);
      // call your backend API here
      // save token to localStorage
      // redirect to user home page
      this.$router.push("/user/home");
    },
  },
};
</script>
<style scoped>
.holder {
  @apply w-full h-screen bg-black p-4 lg:pt-18 relative;
}
.holder::before {
  content: "";
  background-image: url("../../assets/images/logo_half_bg.svg");
  background-position: bottom left;
  background-size: 90%;
  background-repeat: no-repeat;
  position: absolute;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  opacity: 0.19;
}
</style>
