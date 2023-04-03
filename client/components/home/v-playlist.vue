<template>
  <div class="">
    <div>
      <div class="flex justify-between mb-2">
        <span
          class="italic before:h-[98%] before:my-auto py-1 before:block before:absolute before:-inset-1 before:-skew-y-3 before:-skew-x-12 before:bg-gradient-to-r before:from-green-400 before:via-cyan-400 before:to-blue-400 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 relative inline-block">
          <span class="relative text-white text-3xl font-black px-5">playlist</span>
        </span>
        <div class="btn btn-primary btn-outline btn-sm">xem thêm</div>
      </div>
      <div class="carousel space-x-5">
        <div class="carousel-item" v-for="item in dataNews" :key="item.url">
          <PlaylistVMono :data="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const dataNews = ref([
  {
    name: "playlist 1",
    url:
      "https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/734997.png",
  },
  {
    name: "playlist 2",
    url:
      "https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/city.jpg",
  },
  {
    name: "playlist 3",
    url:
      "https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/ling-xiang-9.jpg",
  },
  {
    name: "playlist 4",
    url:
      "https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/miku.png",
  },
  {
    name: "playlist 5",
    url:
      "https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/meo.jpg",
  },
]);
</script>

<style></style>
