<template>
  <div class="body">
    <div class="page">
      <PageHeader />

      <main>
        <section class="jumbotron">
          <div class="flex justify-end px-4">
            <button class="bg-sand py-4 px-5 border-[#aa9385] border-8">
              <font-awesome-icon :icon="['fas', 'long-arrow-alt-down']" />
            </button>
          </div>

          <h1 class="text-white font-mikela text-5xl w-full lg:w-[403px] px-4">
            So I've sought to understand why we yearn for Companionship...
          </h1>

          <div
            class="flex text-white items-center justify-between font-clash text-sm lg:text-2xl mt-4 w-full lg:w-[574px] pb-10 px-4"
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
        </section>

        <section id="post" class="mt-10 lg:mt-28 px-4">
          <h3 class="top-text">Just hear me out...</h3>
          <article>
            <p>
              Over the course of his career on Wall Street, J.P. Morgan
              spearheaded the formation of several prominent multinational
              corporations including U.S. Steel, International Harvester and
              General Electric which subsequently fell under his supervision. He
              and his partners also held controlling interests in numerous other
              American businesses including Aetna, Western Union, Pullman Car
              Company and 21 railroads.[2] Due to the extent of his dominance
              over U.S. finance, Morgan exercised enormous influence over the
              nation's policies and the market forces underlying its economy.
              During the Panic of 1907, he organized a coalition of financiers
              that saved the American monetary system from collapse.
            </p>
            <p>
              Over the course of his career on Wall Street, J.P. Morgan
              spearheaded the formation of several prominent multinational
              corporations including U.S. Steel, International Harvester and
              General Electric which subsequently fell under his supervision. He
              and his partners also held controlling interests in numerous other
              American businesses including Aetna, Western Union, Pullman Car
              Company and 21 railroads.[2] Due to the extent of his dominance
              over U.S. finance, Morgan exercised enormous influence over the
              nation's policies and the market forces underlying its economy.
              During the Panic of 1907, he organized a coalition of financiers
              that saved the American monetary system from collapse.
            </p>
            <p>
              Over the course of his career on Wall Street, J.P. Morgan
              spearheaded the formation of several prominent multinational
              corporations including U.S. Steel, International Harvester and
              General Electric which subsequently fell under his supervision. He
              and his partners also held controlling interests in numerous other
              American businesses including Aetna, Western Union, Pullman Car
              Company and 21 railroads.[2] Due to the extent of his dominance
              over U.S. finance, Morgan exercised enormous influence over the
              nation's policies and the market forces underlying its economy.
              During the Panic of 1907, he organized a coalition of financiers
              that saved the American monetary system from collapse.
            </p>
          </article>
        </section>

        <section id="feedback" class="mt-12 px-4">
          <div class="text-center font-clash text-xs lg:text-base">
            So for this breif moment, let's assume I took you out on an
            expensive date. We have been laughing all evening and smilling away
            at the kindness of the weather, and then that awkward moment
            happens, when our eyes meet and we almost stare into our happy
            souls. We giggle, pick up our tall wine glasses; half filled with
            the highlight of the night, and we make a toast to more nights like
            this.
          </div>

          <div class="text-stat">
            <div class="flex gap-4 items-center">
              <img
                src="@/assets/images/icons/wine_glasses.svg"
                alt="icons"
                class="h-7 lg:h-10"
              />
              <h4 class="text-xs lg:text-base">2.3K Toasts</h4>
            </div>

            <div class="flex gap-2 items-center">
              <button class="px-2 py-1">
                <font-awesome-icon
                  :icon="['fas', 'share-alt']"
                  class="w-7 h-7 lg:w-9 lg:h-9"
                />
              </button>
              <button class="px-2 py-1">
                <font-awesome-icon
                  :icon="['fas', 'bookmark']"
                  class="w-7 h-7 lg:w-9 lg:h-9"
                />
              </button>
            </div>
          </div>

          <div
            class="border-2 border-camblue p-4 flex items-center gap-4 mt-12"
          >
            <img
              src="@/assets/images/posts.png"
              alt="blog picture"
              class="w-14 h-14 border-2 border-sand object-cover object-center"
            />

            <h4
              class="font-raleway text-xs lg:text-base font-light lg:font-normal"
            >
              How did this wine make you feel?
            </h4>
          </div>

          <div class="mt-12">
            <div class="flex gap-5">
              <h3
                class="text-[#B3B4B4] font-clash font-medium text-sm lg:text-2xl"
              >
                <span class="underline">All Com</span>ments
              </h3>

              <div class="py-1 px-2.5 bg-sand text-xs lg:text-base">10</div>
            </div>

            <div class="flex flex-col divide-y">
              <div class="comment" v-for="n in 3" :key="n">
                <h3>JOHN OKOR</h3>
                <h5>1st.Sept.2021</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Hendrerit venenatis sed egestas risus, dictum porttitor justo.
                  Id enim eget massa bibendum convallis quisque. Ut ultricies
                  nec pulvinar cras turpis in. Amet, donec elementum tellus at.
                  Nisl magna consectetur tortor neque.
                </p>

                <div class="stat">
                  <div class="flex gap-4 items-center">
                    <img
                      src="@/assets/images/icons/wine_glasses.svg"
                      alt="icons"
                      class="h-5 lg:h-7"
                    />
                    <h4>2.3K Toasts</h4>
                  </div>

                  <div class="flex gap-2 items-center">
                    <button class="px-2 py-1">
                      <font-awesome-icon
                        :icon="['fas', 'share']"
                        class="w-4 h-4 lg:w-5 lg:h-5"
                      />
                    </button>
                    <h4>10 comments</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <hr class="border-t border-gray-300" />
        </section>

        <section id="smiliarPosts" class="mt-12 pb-14">
          <h3 class="font-clash text-[#B3B4B4] text-sm lg:text-2xl font-medium">
            <span class="underline">Some ot</span>her vintage wines you might
            like
          </h3>
          <div id="cardList" class="mt-6 pb-4">
            <CardList />
          </div>
        </section>
      </main>
    </div>
    <PageFooter />
  </div>
</template>

<script>
import PageHeader from "@/components/blog/Header.vue";
import CardList from "@/components/blog/CardList.vue";
import PageFooter from "@/components/blog/Footer.vue";
export default {
  name: "SingleBlog",

  components: {
    PageHeader,
    CardList,
    PageFooter,
  },
};
</script>

<style scoped>
.page {
  @apply w-full;
}
.jumbotron {
  @apply flex flex-col justify-end w-full h-[95vh];
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
.top-text {
  @apply font-mikela text-lg text-[#797371];
}
section#post {
  @apply w-full mx-auto;
  max-width: 1000px;
}
section#feedback {
  @apply w-full mx-auto;
  max-width: 732px;
}
article p {
  @apply text-justify text-xs leading-6 lg:text-2xl lg:leading-12 font-raleway text-[#262626];
}
.text-stat {
  @apply flex justify-between mt-5 py-3 px-4;
  border-top: 3px solid lightgray;
  border-bottom: 3px solid lightgray;
}
.comment {
  @apply px-4 pt-9;
}
.comment h3 {
  @apply font-clash font-medium text-xs lg:text-xl;
}
.comment h5 {
  @apply font-clash text-[#797371] text-xs lg:text-base;
}
.comment h4 {
  @apply text-xs lg:text-base font-clash text-[#797371];
}
.comment p {
  @apply text-sm font-raleway lg:text-xl text-[#262626];
}
.comment .stat {
  @apply flex justify-between mt-5 py-3 px-4;
  border-top: 3px solid lightgray;
}
#smiliarPosts {
  @apply px-4 mx-auto;
  max-width: 850px;
}
#cardList {
  overflow-x: scroll;
}
</style>
