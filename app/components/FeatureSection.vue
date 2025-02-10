<script setup>
const motionButtonGlow = {
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
const motionFromLeft = {
  initial: {
    x: -100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1000,
    },
  },
};
const motionFromRight = {
  initial: {
    x: 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1000,
    },
  },
};
</script>
<template>
  <section class="bg-gray-50 dark:bg-gray-800">
    <div
      class="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6"
    >
      <!-- Row -->
      <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
        <div
          class="text-gray-500 sm:text-lg dark:text-gray-400"
          v-motion="motionFromLeft"
        >
          <h2
            class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white"
          >
            Predictive Maintenance
          </h2>
          <p class="mb-8 font-light lg:text-xl">
            AI Algorithms analyze Real Time operational data to identify
            patterns that indicate potential equipment failures, mitigate
            anomalies, reducing loss of tools and risk of downtime
          </p>
          <!-- List -->
          <ul
            role="list"
            class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
          >
            <li class="flex space-x-3">
              <!-- Icon -->
              <svg
                class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span
                class="text-base font-medium leading-tight text-gray-900 dark:text-white"
                >Continuous integration and deployment</span
              >
            </li>
            <li class="flex space-x-3">
              <!-- Icon -->
              <svg
                class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span
                class="text-base font-medium leading-tight text-gray-900 dark:text-white"
                >Development workflow</span
              >
            </li>
            <li class="flex space-x-3">
              <!-- Icon -->
              <svg
                class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span
                class="text-base font-medium leading-tight text-gray-900 dark:text-white"
                >Knowledge management</span
              >
            </li>
          </ul>
        </div>
        <!-- <img
          class="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
          src="./images/feature-1.png"
          alt="dashboard feature image"
        /> -->
        <NuxtImg src="/dis.png" v-motion="motionFromRight" />
      </div>
      <!-- Row -->
      <div class="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
        <!-- <img
          class="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
          src="./images/feature-2.png"
          alt="feature image 2"
        /> -->
        <NuxtImg
          src="/tnd.png"
          class="hidden md:block"
          v-motion="motionFromLeft"
        />
        <div
          class="text-gray-500 sm:text-lg dark:text-gray-400"
          v-motion="motionFromRight"
        >
          <h2
            class="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white"
          >
            Proactive Problem Solving
          </h2>
          <p class="mb-8 font-light lg:text-xl">
            Apollodart detects early signs of issues, such as variable drilling
            parameters or pressure drops, and provides recommendations to
            prevent these issues from escalating into hazardous situations
          </p>
          <!-- List -->
          <ul
            role="list"
            class="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700"
          >
            <li class="flex space-x-3">
              <!-- Icon -->
              <svg
                class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span
                class="text-base font-medium leading-tight text-gray-900 dark:text-white"
                >Dynamic reports and dashboards</span
              >
            </li>
            <li class="flex space-x-3">
              <!-- Icon -->
              <svg
                class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span
                class="text-base font-medium leading-tight text-gray-900 dark:text-white"
                >Templates for everyone</span
              >
            </li>
            <li class="flex space-x-3">
              <!-- Icon -->
              <svg
                class="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <span
                class="text-base font-medium leading-tight text-gray-900 dark:text-white"
                >Development workflow</span
              >
            </li>
          </ul>
        </div>
        <NuxtImg
          src="/tnd.png"
          class="md:hidden lg:hidden xl:hidden"
          v-motion="motionFromLeft"
        />
      </div>
    </div>
  </section>
</template>
