<template>
  <div class="bg-cover bg-local" :style="`background-image: url(${urlImage})`">
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
import { musicStore } from "~~/stores/music.store";

const useMusic = musicStore();
const indexImage = ref(1);

const urlImage = computed(() => {
  // return `bg-[url(${useMusic.url_image[indexImage.value]})]`;
  return useMusic.url_image[indexImage.value];
});

function randomImage() {
  indexImage.value = Math.ceil(Math.random() * 10);
}
</script>

<style></style>

:class="`bg-[url('${useMusic.url_image[indexImage.value]}')]`"
