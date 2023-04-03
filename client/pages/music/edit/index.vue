<template>
    <div>
        <MusicVEdit @save="save" :data="data" :loading="loading" />
    </div>
</template>

<script setup>
import { alertStore } from "~~/stores/alert.store";
import { musicStore } from "~~/stores/music.store";
import { imageStore } from "~~/stores/image.store";
import { songStore } from "~~/stores/song.store";
const loading = ref(false);
const data = ref({});
const useModel = musicStore();
const useImage = imageStore();
const useSong = songStore();
const useAlert = alertStore();
async function save() {
    loading.value = true;

    if (useImage.url) {
        await useImage.upload();
    }
    if (useSong.url) {
        await useSong.upload();
    }
    const dataS = {
        name: data.value.name,
        url: useSong.url,
        url_image: useImage.url,
        genre: getArray(data.value.genre),
        country: getArray(data.value.country),
        singer: getArray(data.value.singer),
        lyrics: data.value.lyrics,
    };
    if (
        dataS.name &&
        dataS.url_image &&
        dataS.url &&
        dataS.genre &&
        dataS.country &&
        dataS.singer
    ) {
        try {
            await useModel.create(dataS);
            useAlert.setSuccess("Thêm thành công");
            navigateTo("/admin/music");
        } catch (error) {
            console.log(error);
        }
    } else {
        useAlert.setWarning("bạn phải nhập đủ");
    }
    loading.value = false;
}

function getArray(set) {
    let list = [];
    set.forEach((e) => {
        list.push(e.id);
    });
    return list;
}
// function getApi() {
//     useModel.setSet();
// }
// onMounted(() => {
//     getApi();
// });
</script>

<style></style>
