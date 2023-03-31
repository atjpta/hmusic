<template>
  <div class="bg-cover bg-local" :style="`background-image: url(${urlImage})`">
    <OtherVAlert />
    <OtherVDialog />

    <div class="pb-20 backdrop-blur-xl">
      <OtherVHeader class="sticky top-0 z-10" />
      <div class="lg:mx-0 lg:pl-60">
        <button @click="randomImage" class="btn">get random image</button>
        <slot />
      </div>
      <OtherVFooter />
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
