<template>
  <div class="cursor-pointer indicator">
    <div class="lg:w-60 lg:h-60 w-40 h-40 overflow-hidden rounded-full">
      <img class="lg:h-60 lg:w-60 w-40 h-40 hover:scale-110 duration-500" :src="data.url" alt="" />
    </div>
    <div
      class="indicator-item indicator-bottom indicator-center mb-6 w-full rounded-b-2xl text-center text-2xl text-white uppercase font-extrabold bg-gradient-to-l from-green-400 via-cyan-400 to-blue-400">
      {{ data.name }}
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: Object,
});
</script>

<style></style>
