<template>
  <div>
    <OtherVAlert />
    <OtherVDialog />

    <OtherVNav class="fixed z-20" />
    <div class="ml-16 lg:ml-60">
      <VHeader class="" />
      <div class="">
        <slot />
      </div>
    </div>
    <OtherVFooterMusic class="fixed bottom-0 z-30" />
  </div>
</template>

<script setup>
import VHeader from "~~/components/other/vHeader.vue";
</script>

<style></style>
