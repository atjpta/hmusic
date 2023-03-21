<template>
  <div class="">
    <!-- cho mobie -->
    <div class="dropdown lg:dropdown-open">
      <label tabindex="0" class="">
        <div class="btn btn-ghost rounded-none">
          <OtherVIcon class-icon="text-2xl" icon="fa-solid fa-bars" />
        </div>
      </label>
      <div tabindex="0" class="dropdown-content mt-1 bg-base-100 w-60 h-screen">
        <ul class="menu">
          <div v-for="i in dataNav" :key="i">
            <div v-for="j in i" :key="j.name">
              <li class="hover-bordered">
                <nuxt-link :to="j.url">
                  <OtherVIcon class-icon="text-2xl" :icon="j.icon" />
                  <div class="text-base">
                    {{ j.name }}
                  </div>
                </nuxt-link>
              </li>
            </div>
            <div v-if="i != dataNav[dataNav.length - 1]" class="divider px-5"></div>
          </div>
        </ul>
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
