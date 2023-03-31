<template>
  <div class="">
    <div @mouseenter="show = true" @mouseleave="show = false"
      class="indicator lg:w-96 lg:h-60 w-60 h-40 overflow-hidden rounded-2xl cursor-pointer">
      <img :class="show ? 'scale-110 ' : ''" class="rounded-2xl lg:h-60 lg:w-96 w-60 h-40 duration-500" :src="data.url"
        alt="" />
      <div v-if="show"
        class="bg-base-300/50 lg:h-60 lg:w-96 w-60 h-40 text-white lg:scale-150 indicator-item indicator-center indicator-middle flex justify-center items-center">
        <div class="btn-sm btn btn-ghost btn-circle">
          <OtherVIcon icon="fa-solid fa-heart-circle-plus" />
        </div>
        <div class="btn btn-circle btn-ghost text-4xl">
          <OtherVIcon icon="fa-solid fa-circle-play" />
        </div>
        <div class="btn-sm btn btn-ghost btn-circle">
          <OtherVIcon icon="fa-solid fa-ellipsis" />
        </div>
      </div>
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

const show = ref(false);
</script>

<style></style>
