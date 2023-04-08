<template>
  <div>
    <div class="flex w-screen justify-end">
      <div v-if="!open" @click="open = true" data-tip="hiện phát nhạc"
        class="mx-5 my-1 tooltip tooltip-left flex btn btn-sm btn-primary hover:text-blue-400">
        <OtherVIcon class-icon=" " icon="fa-solid fa-compact-disc" />
      </div>
      <div v-if="open" @click="open = false" data-tip="ẩn phát nhạc"
        class="mx-5 my-1 tooltip tooltip-left flex btn btn-sm btn-primary hover:text-blue-400">
        <OtherVIcon class-icon=" " icon="fa-solid fa-compact-disc" />
      </div>
    </div>
    <div v-show="open"
      class="md:h-20 h-36 bg-base-100 w-screen bg-gradient-to-l from-green-400/20 via-cyan-400/20 to-blue-400/20">
      <div class="mx-5 my-2 md:grid md:grid-cols-4 items-center gap-0 h-20">
        <!--ảnh -->
        <div class="overflow-hidden mr-5 pt-1">
          <!-- cái logo -->
          <div v-if="!usePlay.song.url_image" class="h-16 flex items-center">
            <div class="btn btn-ghost bg-transparent hover:bg-transparent font-bold indicator">
              <div
                class="w-20 h-9 duration-500 ring-4 ring-green-300/30 -skew-x-12 -skew-y-6 rounded-tl-full rounded-br-full bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400">
              </div>
              <div class="indicator-item top-1/2 right-1/2">
                <div
                  class="animate-ping w-8 h-8 ring-4 ring-green-300/30 rounded-full bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400">
                </div>
              </div>

              <div class="indicator-item top-1/2 right-1/2">
                <OtherVIcon class-icon="text-red-500 animate-spin text-3xl " icon="fa-solid fa-compact-disc" />
              </div>
              <div class="text-white font-extrabold px-3 indicator-item top-1/2 right-1/2 -skew-x-12 -skew-y-6">
                Hmusic
              </div>
            </div>
          </div>
          <div v-else class="flex justify-between items-center">
            <div class="flex space-x-3">
              <!-- thông tin bài hát -->
              <img class="h-16 w-16 rounded-full animate-spin-slow" :src="usePlay.song.url_image" />
              <div class="text-2xl font-extrabold">
                {{ usePlay.song.name }}
                <div class="text-xl font-extrabold flex space-x-1">
                  <div class="btn btn-xs btn-ghost bg-gradient-to-l from-green-400/30 via-cyan-400/30 to-blue-400/30"
                    v-for="i in usePlay.song.singer" :key="i._id">
                    {{ i.name }}
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div class="btn btn-sm btn-circle btn-ghost hover:text-blue-400">
                <OtherVIcon class-icon="text-2xl " icon="fa-solid fa-ellipsis" />
              </div>
            </div>
          </div>
        </div>

        <div class="md:col-span-2 w-full">
          <!-- các nút btn -->
          <div class="flex items-center justify-center space-x-5">
            <div class="flex btn btn-sm btn-circle btn-ghost hover:text-blue-400">
              <OtherVIcon class-icon="text-2xl " icon="fa-solid fa-heart" />
            </div>
            <div data-tip="phát ngẫu nhiên" class="tooltip flex btn btn-sm btn-circle btn-ghost hover:text-blue-400">
              <OtherVIcon class-icon="text-2xl " icon="fa-solid fa-shuffle" />
            </div>
            <div class="btn btn-sm btn-circle text-success btn-ghost hover:text-blue-400">
              <OtherVIcon class-icon="text-2xl " icon="fa-solid fa-backward-step" />
            </div>
            <div @click="usePlay.playAudio()"
              class="btn btn-circle text-success btn-ghost hover:bg-transparent hover:text-blue-400">
              <OtherVIcon class-icon="text-4xl ring-4 ring-blue-400/50 hover:ring-green-400/50 rounded-full " :icon="
                usePlay.play ? 'fa-solid fa-circle-pause' : 'fa-solid fa-circle-play'
              " />
            </div>
            <div class="btn btn-sm btn-circle text-success btn-ghost hover:text-blue-400">
              <OtherVIcon class-icon="text-2xl " icon="fa-solid fa-forward-step" />
            </div>
            <div data-tip="phát lại bài này" class="tooltip flex btn btn-sm btn-circle btn-ghost hover:text-blue-400">
              <OtherVIcon class-icon="text-2xl " icon="fa-solid fa-rotate" />
            </div>
            <div class="indicator" @mouseenter="openVolume = true" @mouseleave="openVolume = false">
              <div @click="usePlay.mute()" class="flex text-success btn btn-sm btn-circle btn-ghost hover:text-blue-400">
                <OtherVIcon class-icon="text-2xl " :icon="usePlay.iconVolume" />
              </div>
              <div v-show="openVolume"
                class="flex items-center indicator-item z-10 -top-20 right-1/2 -rotate-90 bg-base-100 p-2 rounded-full">
                <input type="range" min="0" max="1" step="0.1" v-model="usePlay.audio.volume"
                  class="range range-xs range-success w-40" />
              </div>
            </div>
          </div>

          <!-- thanh timer -->
          <div class="flex justify-between items-center space-x-3">
            <div>
              <!-- <span id="current-time">0:00</span> -->
              {{ usePlay.currentTime || "0:00" }}
            </div>
            <input type="range" min="0" :max="usePlay.audio.duration" v-model="usePlay.audio.currentTime"
              class="range range-success range-lg h-2 borr ring-2 rounded-tl-full rounded-br-full rounded-none skew-x-[-45deg] bg-transparent w-full bg-gradient-to-l from-green-400/50 via-cyan-400 to-blue-400" />
            <div>
              {{ usePlay.duration || "0:00" }}
            </div>
          </div>
        </div>
        <!-- chỗ phát bài hát -->
        <!-- <audio v-show="false" @canplay="onReadly = true" :muted="volume" @ended="endAudio()" ref="audio" controls
        :loop="loop">
        <source src="" type="audio/mpeg" />
      </audio> -->

        <audio @timeupdate="usePlay.timeUpdate()" @loadedmetadata="usePlay.loadedMetaData()"
          @volumechange="usePlay.volumeChange()" v-show="false" @canplay="usePlay.onReadly = true" autoplay
          :src="usePlay.song.url" ref="audio" controls>
          <source src="" type="audio/mpeg" />
        </audio>
      </div>
    </div>
  </div>
</template>

<script setup>
import { playStore } from "~~/stores/play.store";
const usePlay = playStore();
const audio = ref();
const open = ref(true);
const openVolume = ref(false);
onMounted(() => {
  usePlay.audio = audio.value;
});
</script>
