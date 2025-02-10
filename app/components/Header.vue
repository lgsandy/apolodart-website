<template>
  <div class="bg-slate-800 text-white">
    <nav class="container mx-auto flex justify-between h-16">
      <NuxtLink class="flex justify-center">
        <NuxtImg src="/logo.webp" />
      </NuxtLink>
      <div class="md:hidden flex items-center px-4">
        <MenuIcon />
      </div>
      <div class="hidden md:flex gap-4 items-center px-12">
        <NuxtLink
          class="flex justify-center cursor-pointer hover:text-lg font-semibold"
        >
          Home
        </NuxtLink>
        <NuxtLink
          class="flex justify-center hover:text-lg font-semibold text-gray-300"
        >
          Services
        </NuxtLink>
        <NuxtLink
          class="flex justify-center hover:text-lg font-semibold text-gray-300"
        >
          Anout Us
        </NuxtLink>
        <NuxtLink
          class="flex justify-center hover:text-lg font-semibold text-gray-300"
        >
          Contact us
        </NuxtLink>
      </div>
    </nav>
  </div>
</template>
