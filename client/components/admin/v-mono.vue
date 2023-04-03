<template>
    <div>
        <div class="hover:bg-gradient-to-l from-green-400/10 via-cyan-400/10 to-blue-400/10 rounded-2xl">
            <div class="flex justify-between items-center">
                <!-- ảnh -->
                <div class="flex space-x-3">
                    <img class="w-32 h-32 rounded-2xl" :src="data.url_image" alt="" />
                    <!-- tên -->
                    <div class="font-extrabold text-2xl">{{ data.name }}</div>
                </div>
                <div class="mr-5">
                    <nuxtLink :to="`/${route.path.slice(7, route.path.length)}/edit/${data.id}`" data-tip="sửa"
                        class="tooltip flex btn btn-sm btn-ghost text-primary">
                        <OtherVIcon icon="fa-solid fa-edit" />
                    </nuxtLink>
                    <div @click="emit('deleteOne', data.id)" data-tip="xóa" :class="loadingD ? 'loading' : ''"
                        class="tooltip flex btn btn-sm btn-ghost text-error">
                        <OtherVIcon icon="fa-solid fa-trash" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    data: Object,
    loadingD: Boolean,
});
const route = useRoute();

const emit = defineEmits(["deleteOne"]);
</script>

<style></style>
