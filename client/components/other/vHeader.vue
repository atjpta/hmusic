<template>
  <div class="glass">
    <div class="text-xl shadow-sm pt-1">
      <div class="flex justify-between">
        <div class="flex">
          <OtherVNav @click="open = true" />
          <div @click="navigateTo('/')"
            class="lg:ml-10 btn btn-ghost bg-transparent hover:bg-transparent font-bold indicator">
            <div
              class="w-20 h-9 duration-500 ring-4 ring-green-300/30 -skew-x-12 -skew-y-6 rounded-tl-full rounded-br-full bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400">
            </div>
            <div class="indicator-item top-1/2 right-1/2">
              <div
                class="animate-ping w-8 h-8 ring-4 ring-green-300/30 rounded-full bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400">
              </div>
            </div>

            <div class="indicator-item top-1/2 right-1/2">
              <OtherVIcon class-icon="text-red-500 animate-spin text-3xl " icon="fa-solid fa-compact-disc" />
            </div>
            <div class="text-white font-extrabold px-3 indicator-item top-1/2 right-1/2 -skew-x-12 -skew-y-6">
              Hmusic
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
const open = ref(false);
</script>
