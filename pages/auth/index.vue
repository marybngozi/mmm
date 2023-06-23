<template>
  <div class="h-screen bg-black">
    <div class="page">
      <BlogHeader />

      <main>
        <section class="px-10 py-10 shadow-lg rounded bg-white">
          <h3 class="font-raleway font-bold text-xl mb-4">Sigin / Signup</h3>
          <div id="googleButton"></div>
        </section>
      </main>
    </div>
    <BlogFooter />
  </div>
</template>

<script>
import BlogHeader from "@/components/blog/Header.vue";
import BlogFooter from "@/components/blog/Footer.vue";
import jwt_decode from "jwt-decode";
export default {
  name: "Login",

  components: {
    BlogHeader,
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
      width: 250,
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
main {
  @apply flex items-center justify-center w-full h-[70vh];
}
</style>
