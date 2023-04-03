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
const route = useRoute();
async function save() {
    loading.value = true;

    const dataS = {
        id: data.value.id,
        name: data.value.name,
        genre: getArray(data.value.genre),
        country: getArray(data.value.country),
        singer: getArray(data.value.singer),
        lyrics: data.value.lyrics,
    };
    if (useImage.url) {
        await useImage.upload();
        dataS.url_image = useImage.url;
    }
    if (useSong.url) {
        await useSong.upload();
        dataS.url = useSong.url;
    }
    if (dataS.name && dataS.genre && dataS.country && dataS.singer) {
        try {
            await useModel.update(dataS);
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
        list.push(e.id ?? e._id);
    });
    return list;
}

async function getApi() {
    if (route.params.id) {
        try {
            data.value = await useModel.findOneEdit(route.params.id);
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
