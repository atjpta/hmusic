<template>
  <div class="">
    <!-- cho máy tính -->
    <div class="lg:flex hover:overflow-y-auto hidden h-screen w-60 bg-base-300/50 glass">
      <div class="w-full">
        <!-- logo -->
        <div class="pt-1 text-center">
          <div to="/" class="btn btn-ghost text-2xl font-bold">HMusic</div>
          <div class="mx-auto animate-ping border-b-2 border-blue-500 h-3 w-20"></div>
        </div>

        <div class="h-fit z-20">
          <ul class="menu">
            <div v-for="i in dataNav" :key="i">
              <div v-for="j in i" :key="j.name">
                <li class="hover-bordered">
                  <nuxt-link :to="j.url">
                    <OtherVIcon class-icon="text-2xl" :icon="j.icon" />
                    <div :class="[showtext ? 'w-60' : '']">
                      {{ j.name }}
                    </div>
                  </nuxt-link>
                </li>
              </div>
              <div class="divider px-5"></div>
            </div>
          </ul>
        </div>

        <div class="h-20"></div>
      </div>
    </div>

    <!-- cho mobie -->
    <div
      @mouseenter="showtext = true"
      @mouseleave="showtext = false"
      :class="[showtext ? 'hover:w-60 hover:overflow-y-auto' : ' w-14']"
      class="duration-500 sm:overflow-hidden overflow-y-auto lg:invisible visible h-screen w-16 bg-base-300/50 glass"
    >
      <div>
        <!-- logo -->
        <div class="pt-1 text-center">
          <div class="btn btn-ghost text-2xl font-bold">
            {{ showtext ? "HMusic" : "H" }}
          </div>
          <div class="mx-auto animate-ping border-b-2 border-blue-500 h-3 w-20"></div>
        </div>
        <div
          :class="[showtext ? 'rotate-180 ' : '']"
          class="sticky top-5 mx-2 duration-500 z-30"
        >
          <div @click="openNav()" class="btn opacity-50">
            <OtherVIcon class-icon="text-2xl" icon="fa-solid fa-chevron-right" />
          </div>
        </div>

        <div class="h-fit z-20">
          <ul class="menu">
            <div v-for="i in dataNav" :key="i">
              <div v-for="j in i" :key="j.name">
                <li class="hover-bordered">
                  <nuxt-link @click="showtext = false" :to="j.url">
                    <OtherVIcon class-icon="text-2xl" :icon="j.icon" />
                    <div :class="[showtext ? 'w-60' : '']">
                      {{ showtext ? j.name : "" }}
                    </div>
                  </nuxt-link>
                </li>
              </div>
              <div class="divider px-5"></div>
            </div>
          </ul>
        </div>

        <div class="h-20"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
const showtext = ref(false);
const open = ref(false);
const dataNav = ref([
  [
    {
      name: "Trang chủ",
      url: "/",
      icon: "fa-solid fa-house",
    },

    {
      name: "Tìm kiếm",
      url: "/search",
      icon: "fa-solid fa-magnifying-glass",
    },
    {
      name: "Cá nhân",
      url: "/mymusic",
      icon: "fa-solid fa-address-card",
    },
    {
      name: "Chart",
      url: "/chart",
      icon: "fa-solid fa-chart-line",
    },
    {
      name: "test",
      url: "/test",
      icon: "fa-solid fa-vial-circle-check",
    },
  ],
  [
    {
      name: "Nhạc mới",
      url: "/music",
      icon: "fa-solid fa-music",
    },
    {
      name: "Thể loại",
      url: "/genre",
      icon: "fa-solid fa-table-cells-large",
    },
    {
      name: "Top 100",
      url: "/rank",
      icon: "fa-solid fa-ranking-star",
    },
    {
      name: "Playlist",
      url: "/playlist",
      icon: "fa-solid fa-icons",
    },
  ],
  [
    {
      name: "Nhạc mới",
      url: "/music",
      icon: "fa-solid fa-music",
    },
    {
      name: "Thể loại",
      url: "/genre",
      icon: "fa-solid fa-table-cells-large",
    },
    {
      name: "Top 100",
      url: "/rank",
      icon: "fa-solid fa-ranking-star",
    },
    {
      name: "Playlist",
      url: "/playlist",
      icon: "fa-solid fa-icons",
    },
  ],
  [
    {
      name: "Liên hệ",
      url: "/playlist",
      icon: "fa-solid fa-square-phone",
    },
    {
      name: "Hướng dẫn",
      url: "/playlist",
      icon: "fa-solid fa-book-atlas",
    },
    {
      name: "Cài đặt",
      url: "/playlist",
      icon: "fa-solid fa-gears",
    },
  ],
]);

function openNav() {
  if (open.value) {
    open.value = false;
    showtext.value = false;
  } else {
    showtext.value = true;
    open.value = true;
  }
}

onUpdated(() => {
  if (!showtext.value) {
    open.value = false;
  }
});
</script>

<style>
.router-link-active,
.router-link-exact-active {
  color: rgb(255, 255, 255);
  background: rgba(120, 0, 255);
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}
.bounce2-leave-active {
  animation: bounce-in 0.5s reverse;
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
