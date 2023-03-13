<template>
  <div>
    <input type="file" @change="useImage.previewFiles($event)" />
    <img :src="useImage.previewImage" alt="preview" v-if="useImage.previewImage" />
    <!-- hàm update trả về url ảnh -->
    <button @click="useImage.upload()" :disabled="useImage.loading">Tải lên</button>
    <img
      src="https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/bg.png"
      alt="preview"
    />
  </div>
</template>

<script setup>
import { imageStore } from "~~/stores/image.store";
const useImage = imageStore();
</script>
