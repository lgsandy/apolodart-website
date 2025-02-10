<script setup>
const motionGlowText = {
  initial: {
    "text-shadow": "0 0 1px rgba(0, 0, 0, 0)",
  },
  enter: {
    "text-shadow": "0 0 10px rgba(247, 22, 105, 1)",
    transition: {
      duration: 1000,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};
const motionCardGlow = {
  initial: {
    "box-shadow": "0 0 1px rgba(0, 0, 0, 0)",
  },
  enter: {
    "box-shadow": "0 0 10px rgba(0, 200, 0, 1)",
    transition: {
      duration: 1000,
      repeat: Infinity,
      repeatType: "reverse",
    },
  },
};
const motionFromTop = {
  initial: {
    y: -100,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1200,
    },
  },
};
</script>
<template>
  <section class="bg-white dark:bg-gray-900">
    <div
      class="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28"
    >
      <div
        class="mr-auto place-self-center lg:col-span-7"
        v-motion="motionFromTop"
      >
        <h1
          class="max-w-2xl mb-4 text-4xl font-medium leading-none tracking-tight md:text-4xl xl:text-6xl dark:text-white"
          v-motion="motionGlowText"
        >
          Stay Ahead with <br />Smart Drilling Solutions
        </h1>
        <p
          class="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400"
        >
          Advanced AI driven predictive analytics & failure avoidance software
        </p>
      </div>
      <div class="lg:mt-0 lg:col-span-5 lg:flex" v-motion="motionFromTop">
        <!-- <img src="./images/hero.png" alt="hero image" /> -->
        <NuxtImg src="/sst.png" alt="Logo" v-motion="motionCardGlow" />
      </div>
    </div>
  </section>
</template>
