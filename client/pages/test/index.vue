<template>
  <div class="m-5">
    trang test các chức năng
    <div class="flex">
      <div class="space-x-5 my-3" v-for="item in data" :key="item">
        <nuxt-link class="btn btn-sm btn-outline" :to="item.url">
          {{ item.name }}
        </nuxt-link>
      </div>
    </div>
    <NuxtPage />
  </div>
</template>

<script setup>
const data = ref([
  {
    url: "/test/uploadimage",
    name: "test upload image",
  },
  {
    url: "/test/uploadsong",
    name: "test upload song",
  },
]);
</script>

<style></style>
