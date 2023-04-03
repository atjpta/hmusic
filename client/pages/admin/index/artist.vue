<template>
    <div>
        <div class="flex justify-end">
            <nuxtLink to="/artist/edit" class="btn btn-success btn-outline btn-sm">
                <OtherVIcon class-icon="mr-1" icon="fa-solid fa-circle-plus" />
                thêm
            </nuxtLink>
        </div>

        <!-- btn chuyển trang -->
        <div class="form-control mx-auto w-fit my-3">
            <div class="input-group lg:input-group-md input-group-sm">
                <button @click="goToPre()" :disabled="selectPage == 1" class="btn lg:btn-md btn-sm">
                    <OtherVIcon class-icon="text-xl" icon="fa-solid fa-angle-left" />
                </button>
                <select v-model="selectPage" class="select select-bordered lg:select-md select-sm">
                    <option :value="i" :disabled="i == selectPage" v-for="i in maxPage" :key="i">
                        trang {{ i }}
                    </option>
                </select>
                <button @click="goToNext()" :disabled="selectPage == maxPage" class="btn btn-sm lg:btn-md text-2xl">
                    <OtherVIcon class-icon="text-xl" icon="fa-solid fa-angle-right" />
                </button>
            </div>
        </div>

        <div class="bg-base-100 rounded-2xl">
            <div class="rounded-2xl bg-gradient-to-r from-green-400/20 via-cyan-400/20 to-blue-400/20 p-5">
                <div class="text-center" v-if="dataPerPage.length == 0">hông có dữ liệu</div>
                <div v-for="(i, n) in dataPerPage" :key="i.id">
                    <AdminVMono :loadingD="loadingD" @delete-one="deleteOne" :data="i" />
                    <div v-if="n < dataPerPage.length - 1" class="divider my-0"></div>
                </div>
            </div>
        </div>

        <!-- btn chuyển trang -->
        <div class="form-control mx-auto w-fit my-3">
            <div class="input-group lg:input-group-md input-group-sm">
                <button @click="goToPre()" :disabled="selectPage == 1" class="btn lg:btn-md btn-sm">
                    <OtherVIcon class-icon="text-xl" icon="fa-solid fa-angle-left" />
                </button>
                <select v-model="selectPage" class="select select-bordered lg:select-md select-sm">
                    <option :value="i" :disabled="i == selectPage" v-for="i in maxPage" :key="i">
                        trang {{ i }}
                    </option>
                </select>
                <button @click="goToNext()" :disabled="selectPage == maxPage" class="btn btn-sm lg:btn-md text-2xl">
                    <OtherVIcon class-icon="text-xl" icon="fa-solid fa-angle-right" />
                </button>
            </div>
        </div>
    </div>
</template>

<script setup>
import { dialogStore } from "~~/stores/dialog.store";
import { artistStore } from "~~/stores/artist.store";

const useDialog = dialogStore();
const useModel = artistStore();
const size = 5;
const loadingD = ref(false);
const maxPage = computed(() => {
    selectPage.value = 1;
    return Math.ceil(useModel.list_search.length / size);
});
const selectPage = ref(1);
const dataPerPage = computed(() => {
    let list = [];
    let index = size * (selectPage.value - 1);

    for (let i = 0; i < size; i++) {
        if (index < useModel.list_search.length) list.push(useModel.list_search[index]);
        index++;
    }

    return list;
});

function goToPre() {
    selectPage.value -= 1;
}

function goToNext() {
    selectPage.value += 1;
}

async function getApi() {
    try {
        await useModel.findAll();
    } catch (error) {
        console.log(error);
    }
}

async function deleteOne(id) {
    useDialog.showDialog(
        {
            title: "Thông báo cực căng!",
            content: "bạn muốn xóa nghệ sĩ này này??",
            btn1: "ok",
            btn2: "hủy",
        },
        async () => {
            loadingD.value = true;

            try {
                await useModel.deleteOne(id);
                loadingD.value = false;
                await getApi();
            } catch (error) {
                console.log(error);
            }
        }
    );
}

onMounted(() => {
    getApi();
});
</script>

<style></style>
