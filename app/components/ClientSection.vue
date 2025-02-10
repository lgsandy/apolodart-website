<script setup>
const motionFadeIn = {
  initial: {
    opacity: 0,
    scale: 0.5,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 1000,
    },
  },
};
</script>
<template>
  <section class="bg-white dark:bg-gray-900">
    <div class="max-w-screen-xl px-4 pb-8 mx-auto lg:pb-16">
      <div class="flex justify-center py-8">
        <h1 class="font-medium text-2xl text-white dark:text-white">
          Our clients
        </h1>
      </div>

      <div
        class="grid grid-cols-3 ml-6 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400"
      >
        <a
          href="#"
          class="flex items-center lg:justify-center"
          v-motion="motionFadeIn"
        >
          <NuxtImg src="/lerdo.webp" sizes="120px" alt="Logo" />
        </a>
        <a
          href="#"
          class="flex items-center lg:justify-center"
          v-motion="motionFadeIn"
        >
          <NuxtImg src="/headition.jpg" sizes="120px" alt="Logo" />
        </a>
        <a
          href="#"
          class="flex items-center lg:justify-center"
          v-motion="motionFadeIn"
        >
          <NuxtImg src="/exco.jpg" sizes="120px" alt="Logo" />
        </a>

        <a
          href="#"
          class="flex items-center lg:justify-center"
          v-motion="motionFadeIn"
        >
          <NuxtImg src="/encana.jpg" sizes="120px" alt="Logo" />
        </a>
        <a
          href="#"
          class="flex items-center lg:justify-center"
          v-motion="motionFadeIn"
        >
          <NuxtImg src="/egoresource.jpg" sizes="120px" alt="Logo" />
        </a>
        <a
          href="#"
          class="flex items-center lg:justify-center"
          v-motion="motionFadeIn"
        >
          <NuxtImg src="/epenergy.jpg" sizes="120px" alt="Logo" />
        </a>
        <a
          href="#"
          class="flex items-center lg:justify-center"
          v-motion="motionFadeIn"
        >
          <NuxtImg src="/devon.jpg" sizes="120px" alt="Logo" />
        </a>
        <a
          href="#"
          class="flex items-center lg:justify-center"
          v-motion="motionFadeIn"
        >
          <NuxtImg src="/cimerex.jpg" sizes="120px" alt="Logo" />
        </a>
        <a
          href="#"
          class="flex items-center lg:justify-center"
          v-motion="motionFadeIn"
        >
          <NuxtImg src="/autura.jpg" sizes="120px" alt="Logo" />
        </a>
        <a
          href="#"
          class="flex items-center lg:justify-center"
          v-motion="motionFadeIn"
        >
          <NuxtImg src="/chevron.jpg" sizes="120px" alt="Logo" />
        </a>
        <a
          href="#"
          class="flex items-center lg:justify-center"
          v-motion="motionFadeIn"
        >
          <NuxtImg src="/carrizo.jpg" sizes="120px" alt="Logo" />
        </a>
        <a
          href="#"
          class="flex items-center lg:justify-center"
          v-motion="motionFadeIn"
        >
          <NuxtImg src="/blackbush.jpg" sizes="120px" alt="Logo" />
        </a>
        <a
          href="#"
          class="flex items-center lg:justify-center"
          v-motion="motionFadeIn"
        >
          <NuxtImg src="/avlon.jpg" sizes="120px" alt="Logo" />
        </a>
        <a
          href="#"
          class="flex items-center lg:justify-center"
          v-motion="motionFadeIn"
        >
          <NuxtImg src="/chesapeak.jpg" sizes="120px" alt="Logo" />
        </a>
        <a
          href="#"
          class="flex items-center lg:justify-center"
          v-motion="motionFadeIn"
        >
          <NuxtImg src="/swn.jpg" sizes="120px" alt="Logo" />
        </a>
        <a
          href="#"
          class="flex items-center lg:justify-center"
          v-motion="motionFadeIn"
        >
          <NuxtImg src="/mirit.jpg" sizes="120px" alt="Logo" />
        </a>
        <a
          href="#"
          class="flex items-center lg:justify-center"
          v-motion="motionFadeIn"
        >
          <NuxtImg src="/newfield.jpg" sizes="120px" alt="Logo" />
        </a>
        <a
          href="#"
          class="flex items-center lg:justify-center"
          v-motion="motionFadeIn"
        >
          <NuxtImg src="/swift.webp" sizes="120px" alt="Logo" />
        </a>
      </div>
    </div>
  </section>
</template>
