<template>
  <div class="cursor-pointer indicator">
    <div @mouseenter="show = true" @mouseleave="show = false"
      class="bg-black indicator lg:w-96 lg:h-60 w-60 h-40 overflow-hidden rounded-2xl">
      <img :class="show ? 'scale-110 ' : ''" class="rounded-2xl lg:h-60 lg:w-96 w-60 h-40 duration-500" :src="data.url"
        alt="" />
      <div v-if="show"
        class="bg-gradient-to-l from-green-400/20 via-cyan-400/20 to-blue-400/20 lg:h-60 lg:w-96 w-60 h-40 text-white lg:scale-150 indicator-item indicator-center indicator-middle flex justify-center items-center">
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

    <div
      class="indicator-item indicator-bottom indicator-center mb-4 w-full rounded-b-2xl text-center text-2xl text-white uppercase font-extrabold bg-gradient-to-l from-green-400 via-cyan-400 to-blue-400">
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
