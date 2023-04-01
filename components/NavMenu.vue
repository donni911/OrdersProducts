<template>
  <aside class="h-full absolute left-0 top-0 w-[200px]">
    <nav
      class="flex flex-col justify-center h-full shadow-[1px_0px_10px_0px_rgba(0,0,0,0.5)]"
    >
      <NuxtLink
        to="/orders"
        class="text-center text-lg py-4 hover:text-white hover:bg-secondary transition-colors"
        >Orders</NuxtLink
      >
      <NuxtLink
        to="/products"
        class="text-center text-lg py-4 hover:text-white hover:bg-secondary transition-colors"
        >Products</NuxtLink
      >
    </nav>
  </aside>
</template>