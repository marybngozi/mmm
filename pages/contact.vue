<template>
  <div class="holder">
    <BlogHeader />

    <section class="mt-28 mb-10 flex justify-center items-center">
      <img
        src="@/assets/images/icons/astronaut.svg"
        alt="icons"
        class="w-14 h-14"
      />
    </section>

    <main class="grid grid-cols-1 lg:grid-cols-2 gap-y-16 pb-12 lg:px-18">
      <aside>
        <section class="lg:max-w-[415px]">
          <h2 class="font-mikela text-4xl text-center lg:text-left">
            Would you let me fly you to space?
          </h2>
          <h4 class="font-semibold font-raleway text-center lg:text-left">
            That will be such a risky decision
          </h4>
        </section>

        <section class="mt-14 lg:max-w-[415px]">
          <h2 class="font-mikela text-4xl text-center lg:text-left">But hey</h2>
          <h4 class="font-semibold font-raleway text-center lg:text-left">
            We can create lasting value on any of the following
          </h4>
        </section>
      </aside>

      <aside style="z-index: 1">
        <section>
          <div class="service">
            <div>
              <h4>UI/UX Design</h4>
              <p>
                I craft exceptionally intuitive experiences. I can do the same
                for your ideas. I design for mobile apps, Web and Web apps.
              </p>
            </div>

            <div>
              <span class="check">&#10003;</span>
            </div>
          </div>

          <div class="service">
            <div>
              <h4>Branding</h4>
              <p>
                Your ideas needs to speak a certain language to its users, we
                can create something truly authentic together.
              </p>
            </div>

            <div>
              <span class="check">&#10003;</span>
            </div>
          </div>

          <div class="service">
            <div>
              <h4>Business Strategy</h4>
              <p>
                Every delicious meal has a recipe, we can find yours together. A
                good strategy should meet your needs and that of your users.
              </p>
            </div>

            <div>
              <span class="check">&#10003;</span>
            </div>
          </div>

          <div class="service">
            <div>
              <h4>Project Management</h4>
              <p>
                Having an idea and executing it from concept to launch are two
                different things. I can put a team together or give structure to
                your existing team to achieve your goals.
              </p>
            </div>

            <div>
              <span class="check">&#10003;</span>
            </div>
          </div>

          <div class="service">
            <div>
              <h4>I just want a conversation</h4>
              <p>
                I am open to having a conversation with you about your idea,
                business, strategy or project.
              </p>
            </div>

            <div>
              <span class="check">&#10003;</span>
            </div>
          </div>

          <div class="service opacity-60">
            <div>
              <h4>Speaking Engagment</h4>
              <p>
                I am presently unavailable for any speaking events. When that
                changes, you will be able to book me for a session directly from
                here
              </p>
            </div>

            <div>
              <span class="check">&#10003;</span>
            </div>
          </div>
        </section>

        <!-- TODO: fillup the select dropdowns -->
        <section class="mt-9">
          <div class="box flex justify-between items-start gap-4">
            <div>
              <img src="@/assets/images/icons/comment.svg" alt="icons" />
              <!-- class="h-6 w-6" -->
            </div>

            <div>
              <label for="message" class="font-raleway text-xs font-semibold">
                Is there anything you would like me to know ahead of our
                conversations?
              </label>
              <input
                type="text"
                class="block bg-transparent input"
                placeholder="Type it here..."
                v-model="form.message"
                autofocus
              />
            </div>
          </div>

          <div class="box">
            <h4 class="text-xl font-mikela">Just a little about you</h4>

            <div class="mt-6">
              <label for="userType" class="box-label">
                Individual or Business?
              </label>
              <input
                type="text"
                class="input box-input"
                id="userType"
                v-model="form.userType"
                placeholder="Choose below"
              />
            </div>

            <div class="mt-6">
              <label for="fullName" class="box-label">Full Legal Name</label>
              <input
                type="text"
                class="input box-input"
                id="fullName"
                v-model="form.fullName"
                placeholder="Ada Obi"
              />
            </div>

            <div class="mt-6">
              <label for="email" class="box-label">Email Address</label>
              <input
                type="email"
                class="input box-input"
                id="email"
                v-model="form.email"
                placeholder="adaobi@gmail.com"
              />
            </div>

            <div class="mt-6">
              <label for="country" class="box-label">
                Where in the world are you contacting me from?
              </label>
              <input
                type="text"
                class="input box-input"
                id="country"
                v-model="form.country"
                placeholder="Choose Country"
              />
            </div>
          </div>

          <div class="box">
            <h4 class="text-xl font-mikela">Let's discuss priority</h4>

            <div class="mt-6">
              <label for="priority" class="box-label">
                Level of Priority?
              </label>
              <input
                type="text"
                class="input box-input"
                id="priority"
                v-model="form.priority"
                placeholder="Choose priority"
              />
            </div>
          </div>

          <div class="mt-10">
            <button
              class="w-full lg:max-w-[630px] bg-oragYellow text-black h-12 lg:h-20 flex justify-center items-center font-medium text-xs lg:text-xl font-raleway"
            >
              Send your request to me
            </button>
          </div>
        </section>
      </aside>
    </main>

    <BlogFooter />
  </div>
</template>

<script>
import BlogHeader from "@/components/blog/Header.vue";
import BlogFooter from "@/components/blog/Footer.vue";
export default {
  name: "Contact",

  components: {
    BlogHeader,
    BlogFooter,
  },

  data() {
    return {
      form: {
        message: null,
        userType: null,
        fullName: null,
        email: null,
        country: null,
        priority: null,
      },
    };
  },
};
</script>

<style scoped>
.holder {
  @apply w-full bg-black p-4 lg:pt-18 relative text-white;
}
.holder::before {
  content: "";
  background-image: url("../assets/images/logo_half_bg.svg");
  background-position: bottom left;
  background-size: 40% 90%;
  background-repeat: no-repeat;
  position: fixed;
  top: 0px;
  right: 0px;
  bottom: 0px;
  left: 0px;
  opacity: 0.19;
  z-index: 0;
}
.service {
  @apply border-2 border-sand p-4 lg:p-7 flex justify-between items-start mt-3 lg:mt-5 lg:max-w-[630px];
}
.service > div:first-of-type {
  @apply w-10/12;
}
.service h4 {
  @apply font-mikela text-xl lg:text-4xl;
}
.service p {
  @apply font-raleway text-xs lg:text-xl;
}
.service .check {
  @apply border-2 border-sand/70 h-8 w-8 lg:h-14 lg:w-14 lg:text-2xl text-sand/70 flex justify-center items-center;
}
.box {
  @apply border-2 border-sand p-5 lg:max-w-[630px];
}
.input {
  @apply h-12 text-sand font-clash w-full outline-none bg-transparent lg:text-xl;
}
.box-label {
  @apply text-xs lg:text-xl font-raleway;
}
.box-input {
  @apply border-2 border-sand px-4 py-2.5 lg:py-6 lg:px-7 font-raleway lg:mt-2;
}
.input::placeholder {
  @apply text-sonSilver font-raleway font-semibold text-xs lg:text-xl;
}
</style>
