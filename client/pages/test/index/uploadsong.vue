<template>
  <div>
    <input type="file" @change="useSong.previewFiles($event)" />
    <audio controls>
      <source
        src="https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/song/Aki Misato - Snow Maiden (Sunoumewiden).mp3"
      />
    </audio>
    <button class="btn" @click="useSong.upload()" :disabled="useSong.loading">
      Tải lên
    </button>
  </div>
</template>

<script setup>
import { songStore } from "~~/stores/song.store";
const useSong = songStore();
</script>
