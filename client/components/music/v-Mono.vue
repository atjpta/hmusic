<template>
  <div class="glass rounded-2xl">
    <div class="flex m-5 space-x-5">
      <!-- trái -->
      <div @mouseenter="show = true" @mouseleave="show = false"
        class="indicator w-32 h-32 overflow-hidden rounded-2xl cursor-pointer">
        <img :class="show ? 'scale-110 ' : ''" class="rounded-2xl w-32 h-32 duration-500" :src="data.url" alt="" />
        <div v-if="show"
          class="bg-base-300/50 w-32 h-32 text-white lg:scale-150 indicator-item indicator-center indicator-middle flex justify-center items-center">
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
      <!-- phải -->
      <div>
        <div class="text-4xl">
          {{ data.name }}
        </div>

        <div>
          {{ data.name }}
        </div>
      </div>
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
