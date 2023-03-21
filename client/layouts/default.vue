<template>
  <div class="">
    <OtherVAlert />
    <OtherVDialog />

    <div class="">
      <OtherVHeader class="sticky top-0 z-10" />
      <div class="lg:mx-0 lg:pl-60">
        <slot />
      </div>
    </div>
    <OtherVFooterMusic class="fixed bottom-0 z-30" />
  </div>
</template>

<script setup></script>

<style></style>
