<template>
  <div>
    <!-- xem trước ảnh -->
    <transition name="bounce">
      <div>
        <img class="bg-transparent rounded-2xl my-2 w-32 h-32" :src="useImage.previewImage || data" alt="" />
      </div>
    </transition>
    <!-- input ảnh -->
    <div class="flex justify-between">
      <input @change="previewFiles($event)" accept="image/*" type="file"
        class="file-input file-input-bordered file-input-primary w-full max-w-xs" />
      <div v-if="useImage.previewImage" @click="cancel()" class="ml-1 btn btn-outline btn-error btn-sm">
        <OtherVIcon icon="fa-solid fa-trash-can" />
        xóa
      </div>
    </div>
  </div>
</template>

<script setup>
import { imageStore } from "~~/stores/image.store";
const props = defineProps({
  data: String,
  url: String,
  type: String,
});
const loading = ref(false);
const useImage = imageStore();
const openIcon = ref(false);
async function saveImage() {
  loading.value = false;
  try {
    const url = await useImage.uploadImage();
  } catch (error) {
    console.log(error);
  } finally {
    loading.value = false;
  }
}

async function previewFiles(event) {
  useImage.previewFiles(event);
}

function cancel() {
  useImage.reset();
}

onMounted(() => {
  useImage.reset();
});
</script>

<style>
.bounce-enter-active {
  animation: bounce-in 0.5s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
}
</style>
