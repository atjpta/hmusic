<template>
  <div class="">
    <div class="lg:w-60 lg:h-60 w-40 h-40 overflow-hidden cursor-pointer rounded-full">
      <img
        class="lg:h-60 lg:w-60 w-40 h-40 hover:scale-110 duration-500 rounded-full"
        :src="data.url"
        alt=""
      />
    </div>
    <div class="text-center text-xl">
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
