<template>
  <div class="">
    <div>
      <div class="flex justify-between mb-2">
        <span
          class="italic before:h-[98%] before:my-auto py-1 before:block before:absolute before:-inset-1 before:-skew-y-3 before:-skew-x-12 before:bg-gradient-to-r before:from-green-400 before:via-cyan-400 before:to-blue-400 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 relative inline-block">
          <span class="relative text-white text-3xl font-black px-5">Mới nhất</span>
        </span>
        <div class="btn btn-primary btn-outline btn-sm">xem thêm</div>
      </div>
      <div class="carousel space-x-5">
        <div class="carousel-item" v-for="item in useMusic.list" :key="item.url">
          <MusicVMono :data="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { musicStore } from "~~/stores/music.store";

const useMusic = musicStore();

async function getApi() {
  try {
    await useMusic.findAllPage(0, 5);
  } catch (error) {
    console.log(error);
  }
}

onMounted(() => {
  getApi();
});
</script>

<style></style>

const dataNews = ref([ { name: "bài hát 1", url:
"https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/734997.png",
}, { name: "bài hát 2", url:
"https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/city.jpg",
}, { name: "bài hát 3", url:
"https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/ling-xiang-9.jpg",
}, { name: "bài hát 4", url:
"https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/miku.png",
}, { name: "bài hát 5", url:
"https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/meo.jpg",
}, { name: "bài hát 6", url:
"https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/734997.png",
}, { name: "bài hát 7", url:
"https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/city.jpg",
}, { name: "bài hát 8", url:
"https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/ling-xiang-9.jpg",
}, { name: "bài hát 9", url:
"https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/miku.png",
}, { name: "bài hát 10", url:
"https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/meo.jpg",
}, ]);
