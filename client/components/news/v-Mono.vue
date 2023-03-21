<template>
  <div class="">
    <div class="lg:w-full lg:h-96 w-96 h-60 overflow-hidden rounded-2xl cursor-pointer">
      <img
        class="rounded-2xl lg:w-full lg:h-96 w-96 h-60 hover:scale-110 duration-500"
        :src="data.url"
        alt=""
      />
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  data: Object,
});
</script>

<style></style>
