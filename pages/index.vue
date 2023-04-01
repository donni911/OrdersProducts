<template>
  <section class="w-full h-screen flex justify-center items-center flex-col">
    <h1 class="text-2xl mb-4">Order&Products App</h1>
    <div>
      <p class="text-center">Welcome to my App</p>
      <div class="flex gap-20 mt-5">
        <NuxtLink
          to="/products"
          class="p-4 border-2 border-orange-50 rounded-lg hover:bg-primary hover:text-white text-black transition"
          >Products Page</NuxtLink
        >
        <NuxtLink
          to="/orders"
          class="p-4 border-2 border-orange-50 rounded-lg hover:bg-secondary hover:text-white text-black transition"
          >Orders Page</NuxtLink
        >
      </div>
    </div>
  </section>
</template>