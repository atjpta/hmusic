<template>
  <div class="">
    <div>
      <div class="flex justify-between mb-2">
        <div class="text-2xl uppercase font-bold mb-1">mới nhất</div>
        <div class="btn btn-primary btn-outline btn-sm">xem thêm</div>
      </div>
      <div class="carousel space-x-5">
        <div class="carousel-item" v-for="item in dataNews" :key="item.url">
          <MusicVMono :data="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const dataNews = ref([
  {
    name: "bài hát 1",
    url:
      "https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/734997.png",
  },
  {
    name: "bài hát 2",
    url:
      "https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/city.jpg",
  },
  {
    name: "bài hát 3",
    url:
      "https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/ling-xiang-9.jpg",
  },
  {
    name: "bài hát 4",
    url:
      "https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/miku.png",
  },
  {
    name: "bài hát 5",
    url:
      "https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/meo.jpg",
  },
  {
    name: "bài hát 6",
    url:
      "https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/734997.png",
  },
  {
    name: "bài hát 7",
    url:
      "https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/city.jpg",
  },
  {
    name: "bài hát 8",
    url:
      "https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/ling-xiang-9.jpg",
  },
  {
    name: "bài hát 9",
    url:
      "https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/miku.png",
  },
  {
    name: "bài hát 10",
    url:
      "https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/meo.jpg",
  },
]);
</script>

<style></style>
