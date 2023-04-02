<template>
  <div>
    <div class="">
      <nuxtLink to="/auth/signin" v-if="!useAuth.isUserLoggedIn" class="btn btn-primary btn-outline mb-1">
        đăng nhập
      </nuxtLink>
      <div v-if="useAuth.isUserLoggedIn" class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <img class="w-12 h-12 rounded-full" src="~/assets/images/meo.jpg" />
        </label>

        <ul tabindex="0" class="mt-3 border-2 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52">
          <div class="avatar">
            <div class="w-12 h-12 rounded-full">
              <img src="~/assets/images/meo.jpg" />
            </div>
            <p class="mt-3 px-2">{{ useUser.user.name }}</p>
          </div>
          <li></li>

          <li class="hover-bordered" v-for="i in dataAvatar" :key="i">
            <NuxtLink v-if="i.name != 'Đăng xuất'" :to="i.url">
              <OtherVIcon :icon="i.icon"></OtherVIcon>
              {{ i.name }}
            </NuxtLink>
            <NuxtLink @click="logout()" v-if="i.name == 'Đăng xuất'" :to="i.url">
              <OtherVIcon :icon="i.icon"></OtherVIcon>
              {{ i.name }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup>
import { authStore } from "~~/stores/auth.store";
import { userStore } from "~~/stores/user.store";

const useAuth = authStore();
const useUser = userStore();
const dataAvatar = ref([
  {
    name: "dashboard",
    url: "/dashboard",
    icon: "fa-solid fa-address-card",
  },
  {
    name: "yêu thích",
    url: "/favourite",
    icon: "fa-solid fa-heart",
  },
  {
    name: "Đăng xuất",
    url: "/auth/signin",
    icon: "fa-solid fa-right-from-bracket",
  },
]);

function logout() {
  useAuth.logout();
}

async function getApi() {
  useAuth.loadAuthState();
  try {
    await useUser.findOne(useAuth.user.id);
    if (useUser.isAdmin) {
      dataAvatar.value.unshift({
        name: "admin",
        url: "/admin/music",
        icon: "fa-solid fa-bars-progress",
      });
    }
  } catch (error) {
    console.log(error);
  }
}

onMounted(() => {
  getApi();
});
</script>

<style></style>
