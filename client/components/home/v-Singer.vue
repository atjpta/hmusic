<template>
  <div class="">
    <div>
      <div class="flex justify-between mb-2">
        <div class="text-2xl uppercase font-bold mb-1">ca sĩ</div>
        <div class="btn btn-primary btn-outline btn-sm">xem thêm</div>
      </div>
      <div class="carousel space-x-5">
        <div class="carousel-item" v-for="item in dataNews" :key="item.url">
          <SingerVMono :data="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const dataNews = ref([
  {
    name: "ca sĩ 1",
    url:
      "https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/734997.png",
  },
  {
    name: "ca sĩ 2",
    url:
      "https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/city.jpg",
  },
  {
    name: "ca sĩ 3",
    url:
      "https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/ling-xiang-9.jpg",
  },
  {
    name: "ca sĩ 4",
    url:
      "https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/miku.png",
  },
  {
    name: "ca sĩ 5",
    url:
      "https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/meo.jpg",
  },
  {
    name: "ca sĩ 6",
    url:
      "https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/734997.png",
  },
  {
    name: "ca sĩ 7",
    url:
      "https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/city.jpg",
  },
  {
    name: "ca sĩ 8",
    url:
      "https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/ling-xiang-9.jpg",
  },
  {
    name: "ca sĩ 9",
    url:
      "https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/miku.png",
  },
  {
    name: "ca sĩ 10",
    url:
      "https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/meo.jpg",
  },
]);
</script>

<style></style>
