<template>
    <div class="">
        <div class="ml-5 mb-3">
            <div class="h-32 w-60 -skew-x-12 overflow-hidden">
                <img class="h-32 w-60 hover:scale-125 scale-[1.15] skew-x-12 duration-500 cursor-pointer" :src="data.url" />
            </div>
        </div>
        <div
            class="cursor-pointer text-2xl uppercase text-center text-white italic font-extrabold h-8 w-60 skew-x-12 bg-gradient-to-l from-green-400 via-cyan-400 to-blue-400 ml-3">
            {{ data.name }}
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    data: Object,
});
</script>

<style></style>
