<!-- We need a nuxt 3 navbar -->
<!-- It needs to be responsive -->
<!-- We will also use tailwindcss to style the navbar. -->
<!-- It will also be in typescript -->
<!-- Because we are using nuxt 3, we will be using nuxtLink for routing. -->
<!-- The title will be centered -->
<!-- The navigation menu will be to the left of the title and will be in a dropdown hamburger menu. -->
<!-- The whole navbar will be a container and will be in the header. -->
<script lang="ts"></script>

<template>
  <header class="bg-gray-900">
    <div
      class="container flex mx-auto px-4 py-16 flex flex-col lg:flex-row justify"
    >
      <!-- Navigation -->
      <div class="flex-1">
        <NuxtLink to="/" class="text-white text-2xl font-bold hover:text-yellow-300">Home</NuxtLink>
        <NuxtLink to="/about" class="text-white text-2xl font-bold hover:text-yellow-300">
          About
        </NuxtLink>
      </div>

      <!-- Title -->
      <!-- It must be in the center of the navbar -->
      <div class="flex-1 justify-center mx-auto">
        <h1 class="text-white text-3xl font-semibold">Nuxt 3</h1>
      </div>
    </div>
  </header>
</template>

<style scoped></style>
