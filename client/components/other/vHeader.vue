<template>
  <div class="glass">
    <div class="text-xl shadow-sm pt-1">
      <div class="flex justify-between">
        <div class="flex">
          <OtherVNav @click="open = true" />
          <div @click="navigateTo('/')"
            class="lg:ml-10 btn btn-ghost bg-transparent hover:bg-transparent font-bold indicator">
            <span
              class="before:duration-500 before:block before:ring-4 before:ring-green-300/30 before:absolute before:-inset-1 before:-skew-x-12 before:-skew-y-6 before:rounded-tl-full before:rounded-br-full before:bg-gradient-to-r before:from-green-400 before:via-cyan-400 before:to-blue-400 relative inline-block">
              <span
                class="before:animate-ping before:w-6 before:h-6 before:rounded-full before:top-1 before:left-9 before:right-0.5 before:duration-500 before:block before:ring-4 before:ring-green-300/30 before:absolute before:-inset-1 before:bg-gradient-to-r before:from-green-400 before:via-cyan-400 before:to-blue-400 relative inline-block">
                <span class="relative text-white text-lg px-3 z-10">Hmusic</span>
              </span>
            </span>
            <div class="indicator-item top-5 bottom-0.5 right-16">
              <OtherVIcon class-icon="text-red-500 animate-spin text-3xl " icon="fa-solid fa-compact-disc" />
            </div>
          </div>
        </div>
        <div class="sm:flex hidden">
          <button class="btn btn-ghost text-xl">
            <OtherVIcon icon="fa-solid fa-magnifying-glass" />
          </button>
          <div class="">
            <input type="text" placeholder="Tìm kiếm...." class="input md:w-96 input-bordered mx-1" />
          </div>
        </div>
        <div class="flex">
          <OtherVTheme />
          <OtherVAvatarDD />
        </div>
      </div>
    </div>
    <div @click="open = false" v-if="open" class="fixed h-screen w-[98vw]"></div>
  </div>
</template>

<script setup>
import { authStore } from "~~/stores/auth.store";
import { userStore } from "~~/stores/user.store";
const useUser = userStore();
const useAuth = authStore();
const open = ref(false);

onMounted(() => {
  useAuth.loadAuthState();
  if (useAuth.user) {
    useUser.findOne(useAuth.user.id);
  }
});
</script>
