<template>
    <div>
        <SingerVEdit @save="save" :data="data" :loading="loading" />
    </div>
</template>

<script setup>
import { alertStore } from "~~/stores/alert.store";
import { singerStore } from "~~/stores/singer.store";
import { imageStore } from "~~/stores/image.store";
const loading = ref(false);
const data = ref({});
const useModel = singerStore();
const useImage = imageStore();
const useAlert = alertStore();
async function save() {
    loading.value = true;

    if (useImage.url) {
        await useImage.upload();
    }
    const dataS = {
        name: data.value.name,
        url_image: useImage.url,
    };
    if (dataS.name && dataS.url_image) {
        try {
            await useModel.create(dataS);
            useAlert.setSuccess("Thêm thành công");
            navigateTo("/admin/singer");
        } catch (error) {
            console.log(error);
        }
    } else {
        useAlert.setWarning("bạn phải nhập đủ các tên và ảnh");
    }
    loading.value = false;
}
</script>

<style></style>
