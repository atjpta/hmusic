<template>
  <div class="">
    <div class="lg:w-96 lg:h-60 w-60 h-40 overflow-hidden rounded-2xl cursor-pointer">
      <img
        class="rounded-2xl lg:h-60 lg:w-96 w-60 h-40 hover:scale-110 duration-500"
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
