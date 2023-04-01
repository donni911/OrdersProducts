<template>
  <div class="my-2 flex items-center border-2 rounded-lg">
    <div class="w-[50%] p-3 text-xl">
      <span class="whitespace-nowrap"> {{ order.orderTitle }} </span>
    </div>
    <div class="w-[12.5%] p-3 relative">
      <div class="flex items-center">
        <button
          class="border-2 rounded-full p-1 flex items-center justify-center"
        >
          <div class="w-10 h-10 p-1 [&>svg]:w-full [&>svg]:h-full">
            <icon icon="fa-solid fa-bars" />
          </div>
        </button>
        <div class="flex flex-col ml-2">
          <span class="text-xl"> {{ order.orderAmount }}</span>
          <p class="text-gray-500">Продукта</p>
        </div>
      </div>
    </div>
    <div class="w-[12.5%] p-3 relative">
      <div class="flex flex-col items-center">
        <span class="text-xs text-gray-500">{{ shortDate }}</span>
        <span class="text-lg">{{ longDate }}</span>
      </div>
    </div>
    <div class="w-[12.5%] p-3 relative">
      <div class="flex flex-col justify-center">
        <span class="text-xs text-gray-500">{{ dollarPrice }}$</span>
        <span class="text-lg"> {{ order.price }} UAH</span>
      </div>
    </div>
    <div class="w-[12.5%] p-3 relative">
      <button class="isolate mx-auto flex items-center justify-center p-4 -m-4">
        <div class="w-5 h-5 [&>svg]:w-full [&>svg]:h-full">
          <icon icon="fa-solid fa-trash" />
        </div>
      </button>
    </div>
  </div>
</template>
  
<script>
export default {
  props: {
    order: {
      type: Object,
      required: true,
    },
  },

  computed: {
    dollarPrice() {
      return this.order.price * 40;
    },

    shortDate() {
      let date = new Date(this.order.date);

      date = date.toLocaleString("en-GB", {
        month: "2-digit",
        day: "2-digit",
      });

      date = date.split("/").join(" / ");

      return date;
    },

    longDate() {
      let date = new Date(this.order.date);

      date = date.toLocaleString("en-GB", {
        month: "short",
        day: "2-digit",
        year: "numeric",
      });

      date = date.split("/").join(" / ");

      return date;
      ƒ;
    },
  },
};
</script>

<style>
tr td,
tr th {
  padding: 10px;
}
tr {
  margin-bottom: 10px;
}
</style>