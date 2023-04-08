<template>
  <div class="bg-cover bg-local" :style="`background-image: url(${usePlay.song.url_image || usePlay.image})`">
    <div class="backdrop-blur-xl">
      <OtherVDialog />
      <OtherVHeader class="sticky top-0 z-10" />
      <OtherVAlert />
      <div class="mx-5 lg:pl-60 mt-10">
        <!-- <button @click="randomImage" class="btn">get random image</button> -->
        <slot />
      </div>
      <OtherVFooter class="lg:mx-0 lg:pl-60 mt-40 py-20" />
    </div>
    <OtherVFooterMusic class="fixed bottom-0 z-30" />
  </div>
</template>

<script setup>
import { playStore } from "~~/stores/play.store";
const usePlay = playStore();
</script>

<style></style>
