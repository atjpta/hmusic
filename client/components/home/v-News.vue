<template>
  <div>
    <div
      ref="scrollingContainer"
      class="overflow-x-auto carousel carousel-center space-x-5"
    >
      <div class="carousel-item" v-for="item in dataNews" :key="item.url">
        <NewsVMono :data="item" />
      </div>
    </div>
  </div>
</template>

<script setup>
let intervalId;
let scrollStep;
let scrollBarWidth;
let countScroll = 0;
const scrollingContainer = ref();
const dataNews = ref([
  {
    id: 1,
    url:
      "https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/734997.png",
  },
  {
    id: 2,
    url:
      "https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/city.jpg",
  },
  {
    id: 3,
    url:
      "https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/ling-xiang-9.jpg",
  },
  {
    id: 4,
    url:
      "https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/miku.png",
  },
  {
    id: 5,
    url:
      "https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/meo.jpg",
  },
]);

onMounted(() => {
  intervalId = setInterval(() => {
    if (scrollingContainer.value.offsetWidth > 1000) {
      scrollStep = scrollingContainer.value.offsetWidth / 3;
    } else if (scrollingContainer.value.offsetWidth > 500) {
      scrollStep = scrollingContainer.value.offsetWidth / 2;
    } else {
      scrollStep = scrollingContainer.value.offsetWidth;
    }
    countScroll++;
    scrollingContainer.value.scrollLeft += scrollStep;

    if (countScroll == dataNews.value.length) {
      countScroll = 0;
      scrollingContainer.value.scrollLeft = 0;
    }
  }, 2000);
});
onUnmounted(() => {
  clearInterval(intervalId);
});
</script>

<style>
.bounce-enter-active {
  animation: bounce-in 0.2s;
}
.bounce-leave-active {
  animation: bounce-in 0.2s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}

.scrolling-content {
  width: 200%;
}
</style>
