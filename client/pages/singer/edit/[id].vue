<template>
    <div>
        <SingerVEdit @save="save" :data="data" :loading="loading" />
    </div>
</template>

<script setup>
import { alertStore } from "~~/stores/alert.store";
import { imageStore } from "~~/stores/image.store";
import { singerStore } from "~~/stores/singer.store";
const loading = ref(false);
const data = ref({});
const useModel = singerStore();
const useImage = imageStore();
const useAlert = alertStore();
const route = useRoute();
async function save() {
    loading.value = true;

    const dataS = {
        id: data.value.id,
        name: data.value.name,
    };
    if (useImage.url) {
        await useImage.upload();
        dataS.url_image = useImage.url;
    }
    if (dataS.name) {
        try {
            await useModel.update(dataS);
            useAlert.setSuccess("sửa thành công");
            navigateTo("/admin/singer");
        } catch (error) {
            console.log(error);
        }
    } else {
        useAlert.setWarning("bạn phải nhập tên");
    }
    loading.value = false;
}

async function getApi() {
    if (route.params.id) {
        try {
            data.value = await useModel.findOne(route.params.id);
        } catch (error) {
            console.log(error);
        }
    }
}
onMounted(() => {
    getApi();
});
</script>

<style></style>
