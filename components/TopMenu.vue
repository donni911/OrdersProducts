<template>
  <header
    class="absolute flex justify-between items-center w-full shadow-lg px-4 max-h-[85px] z-10 bg-white"
  >
    <div class="w-[200px]">
      <NuxtLink to="/">
        <img src="/img/logo.svg" alt="Logo" class="w-full h-full" />
      </NuxtLink>
    </div>
    <div class="flex gap-5 items-center">
      <div class="flex gap-2">
        <div>
          <icon icon="fa-solid fa-users" />
        </div>
        <span>{{ activeSessions }} active sessions</span>
      </div>
      <div class="flex gap-2">
        <div>
          <icon icon="fa-solid fa-clock" />
        </div>
        <span class="min-w-[65px]">{{ currentTime }}</span>
      </div>
    </div>
  </header>
</template>

<script>
// import io from "socket.io-client";

export default {
  setup() {
    const currentTime = ref("");
    const activeSessions = ref(0);

    const setClock = () => {
      const now = new Date();
      const hours = ("0" + now.getHours()).slice(-2);
      const minutes = ("0" + now.getMinutes()).slice(-2);
      const seconds = ("0" + now.getSeconds()).slice(-2);
      currentTime.value = `${hours}:${minutes}:${seconds}`;
    };

    onMounted(() => {
      // const socket = io("http://localhost:3000");
      // socket.on("activeSessions", (count) => {
      //   activeSessions.value = count;
      // });

      setClock();

      setInterval(setClock, 1000);
    });

    return {
      currentTime,
      activeSessions,
    };
  },
};
</script>

<style>
.router-link-active {
  @apply text-white bg-secondary;
}
</style>