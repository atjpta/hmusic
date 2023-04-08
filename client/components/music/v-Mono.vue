<template>
  <div class="glass rounded-2xl bg-base-100">
    <div class="rounded-2xl bg-gradient-to-l from-green-400/20 via-cyan-400/20 to-blue-400/20">
      <div class="flex p-5 space-x-5">
        <!-- trái -->
        <div @mouseenter="show = true" @mouseleave="show = false"
          class="indicator w-32 h-32 overflow-hidden rounded-2xl cursor-pointer">
          <img :class="show ? 'scale-110 ' : ''" class="rounded-2xl w-32 h-32 duration-500" :src="data.url_image"
            alt="" />
          <div v-if="show"
            class="bg-gradient-to-l from-green-400/20 via-cyan-400/20 to-blue-400/20 w-32 h-32 text-white lg:scale-150 indicator-item indicator-center indicator-middle flex justify-center items-center">
            <div class="btn-xs btn btn-ghost btn-circle">
              <OtherVIcon icon="fa-solid fa-heart-circle-plus" />
            </div>
            <div @click="usePlay.playAudioFirst(data)" class="btn btn-sm btn-circle btn-ghost text-2xl">
              <OtherVIcon icon="fa-solid fa-circle-play" />
            </div>
            <div class="btn-xs btn btn-ghost btn-circle">
              <OtherVIcon icon="fa-solid fa-ellipsis" />
            </div>
          </div>
        </div>
        <!-- phải -->
        <div>
          <div class="space-y-1">
            <div class="font-extrabold text-2xl">{{ data.name }}</div>
            <div class="flex space-x-2 items-center">
              <div class="tooltip w-5" data-tip="ca sĩ">
                <OtherVIcon icon="fa-solid fa-microphone-lines" />
              </div>
              <div class="btn btn-xs btn-ghost bg-gradient-to-l from-green-400/30 via-cyan-400/30 to-blue-400/30"
                v-for="i in data.singer" :key="i._id">
                {{ i.name }}
              </div>
            </div>
            <div class="flex space-x-2 items-center">
              <div class="tooltip w-5" data-tip="thể loại">
                <OtherVIcon icon="fa-solid fa-table-cells-large" />
              </div>
              <div class="btn btn-xs btn-ghost bg-gradient-to-l from-green-400/30 via-cyan-400/30 to-blue-400/30"
                v-for="i in data.genre" :key="i._id">
                {{ i.name }}
              </div>
            </div>
            <div class="flex space-x-2 items-center">
              <div class="tooltip w-5" data-tip="quốc gia">
                <OtherVIcon icon="fa-solid fa-globe" />
              </div>
              <div class="btn btn-xs btn-ghost bg-gradient-to-l from-green-400/30 via-cyan-400/30 to-blue-400/30"
                v-for="i in data.country" :key="i._id">
                {{ i.name }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { playStore } from "~~/stores/play.store";

const props = defineProps({
  data: Object,
});
const usePlay = playStore();
const show = ref(false);

function play() {
  usePlay.song = props.data;
  usePlay.play = true;
}
</script>

<style></style>
