<template>
  <div class="">
    <div class="bg-base-100 border-b-2 flex py-1 justify-between">
      <div class="flex space-x-1 mx-1">
        <div class="btn">
          <OtherVIcon icon="fa-solid fa-magnifying-glass" />
        </div>
        <input
          type="text"
          placeholder="tìm kiếm"
          class="hidden lg:flex input input-bordered input-primary w-full max-w-xs"
        />
      </div>
      <div class="flex">
        <!-- chỉnh theme -->
        <vThemeVue />
        <!-- nút đăng xuất -->
        <!-- <router-link to="dangki"> -->
        <NuxtLink
          to="/auth/signin"
          v-if="!useAuth.isUserLoggedIn"
          class="mx-1 btn btn-outline btn-primary"
        >
          đăng nhập
        </NuxtLink>
        <!-- </router-link> -->

        <!-- dropdown avatar -->
        <div v-if="useAuth.isUserLoggedIn" class="flex-none gap-2 mx-1">
          <div class="dropdown dropdown-end">
            <label tabindex="0" class="btn btn-ghost btn-circle avatar">
              <div class="w-12 rounded-full">
                <img src="~~/assets/images/meo.jpg" />
              </div>
            </label>
            <ul
              tabindex="0"
              class="mt-3 border-2 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <div class="avatar">
                <div class="w-12 h-12 rounded-full">
                  <img src="~~/assets/images/meo.jpg" />
                </div>
                <p class="mt-3 px-2">{{ useAuth.user.name }}</p>
              </div>
              <li></li>

              <li class="hover-bordered" v-for="i in dataAvatar" :key="i">
                <router-link v-if="i.name != 'Log out'" :to="i.url"
                  ><i :class="i.icon"></i>
                  {{ i.name }}
                </router-link>
                <router-link @click="logout()" v-if="i.name == 'Log out'" :to="i.url"
                  ><i :class="i.icon"></i>
                  {{ i.name }}
                </router-link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import vThemeVue from "./vTheme.vue";
import { authStore } from "~~/stores/auth.store";

const useAuth = authStore();
const dataMidNav = ref([
  {
    name: "Blogs",
    url: "/blog",
    icon: "fa-regular fa-file-lines",
  },
  {
    name: "Chart",
    url: "/chart",
    icon: "fa-solid fa-chart-line",
  },
  {
    name: "Music",
    url: "/homelistmusic",
    icon: "fa-solid fa-headphones",
  },
  {
    name: "Contact",
    url: "/contact",
    icon: "fa-solid fa-square-phone",
  },
  {
    name: "Search",
    url: "/search",
    icon: "fa-solid fa-magnifying-glass",
  },
]);

const dataAvatar = ref([
  {
    name: "Log out",
    url: "/auth/signin",
    icon: "fa-solid fa-right-from-bracket",
  },
]);

const openLeft = ref(false);

function logout() {
  useAuth.logout();
}

onMounted(() => {
  useAuth.loadAuthState();
});

const dataAdmin = [
  {
    name: "Manage comments",
    url: "/managecomment",
    icon: "fa-solid fa-comment-dots",
  },
  {
    name: "Managing emotions",
    url: "/manageemotion",
    icon: "fa-solid fa-face-grin-hearts",
  },
  {
    name: "Dashboard",
    url: "/dashboard",
    icon: "fa-solid fa-address-card",
  },
];
let i = 0;

onUpdated(() => {
  if (useAuth.isAdmin & (i == 0)) {
    dataAvatar.value.unshift(...dataAdmin);
    i++;
  }
});
</script>

<style scoped>
.router-link-exact-active {
  color: rgb(255, 255, 255);
  background-color: rgba(87, 13, 248);
  font-weight: 700;
}
</style>
