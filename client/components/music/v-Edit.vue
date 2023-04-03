<template>
    <div>
        <div class="rounded-2xl bg-base-100 xl:w-1/2 mx-auto">
            <div class="rounded-2xl bg-gradient-to-r from-green-400/20 via-cyan-400/20 to-blue-400/20 p-5">
                <div class="text-center text-3xl font-extrabold uppercase">chỉnh sửa</div>
                <div>
                    <div class="text-xl font-extrabold mt-5">
                        Tên bài hát
                        <div class="tooltip" data-tip="không được để trống">
                            <div class="btn-xs btn btn-ghost rounded-full h-1 w-6">
                                <OtherVIcon class-icon="text-error" icon="fa-solid fa-star-of-life" />
                            </div>
                        </div>
                    </div>

                    <input v-model="data.name" placeholder="nhập tên thể loại..." type="text"
                        class="input input-primary w-full" />
                </div>

                <div>
                    <div class="text-xl font-extrabold mt-5">
                        Ảnh
                        <div class="tooltip" data-tip="không được để trống">
                            <div class="btn-xs btn btn-ghost rounded-full h-1 w-6">
                                <OtherVIcon class-icon="text-error" icon="fa-solid fa-star-of-life" />
                            </div>
                        </div>
                    </div>

                    <UploadVUploadSimple :data="data.url_image" />
                </div>

                <div>
                    <div class="text-xl font-extrabold mt-5">
                        file bài hát
                        <div class="tooltip" data-tip="không được để trống">
                            <div class="btn-xs btn btn-ghost rounded-full h-1 w-6">
                                <OtherVIcon class-icon="text-error" icon="fa-solid fa-star-of-life" />
                            </div>
                        </div>
                    </div>

                    <UploadVUploadSong :data="data.url" />
                </div>

                <div>
                    <div class="text-xl font-extrabold mt-5">
                        Ca sĩ
                        <div class="tooltip" data-tip="không được để trống">
                            <div class="btn-xs btn btn-ghost rounded-full h-1 w-6">
                                <OtherVIcon class-icon="text-error" icon="fa-solid fa-star-of-life" />
                            </div>
                        </div>
                    </div>

                    <OtherVSelectList v-if="loadingSelect" :data="data.singer" :list="useSinger.list" />
                </div>

                <div>
                    <div class="text-xl font-extrabold mt-5">
                        Thể loại
                        <div class="tooltip" data-tip="không được để trống">
                            <div class="btn-xs btn btn-ghost rounded-full h-1 w-6">
                                <OtherVIcon class-icon="text-error" icon="fa-solid fa-star-of-life" />
                            </div>
                        </div>
                    </div>

                    <OtherVSelectList v-if="loadingSelect" :data="data.genre" :list="useGenre.list" />
                </div>

                <div>
                    <div class="text-xl font-extrabold mt-5">
                        Quốc gia
                        <div class="tooltip" data-tip="không được để trống">
                            <div class="btn-xs btn btn-ghost rounded-full h-1 w-6">
                                <OtherVIcon class-icon="text-error" icon="fa-solid fa-star-of-life" />
                            </div>
                        </div>
                    </div>

                    <OtherVSelectList v-if="loadingSelect" :data="data.country" :list="useCountry.list" />
                </div>

                <div>
                    <div class="text-xl font-extrabold mt-5">Lời bài hát</div>

                    <textarea v-model="data.lyrics" placeholder="nhập lời bài hát..." type="text"
                        class="textarea textarea-primary w-full" />
                </div>

                <div class="flex mt-10 space-x-1 justify-end">
                    <div @click="save()" :class="loading ? 'loading' : ''" class="btn btn-primary btn-sm">
                        lưu
                    </div>
                    <div @click="router.back()" class="btn btn-error btn-sm btn-ghost">Hủy</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { countryStore } from "~~/stores/country.store";
import { genreStore } from "~~/stores/genre.store";
import { singerStore } from "~~/stores/singer.store";
import { musicStore } from "~~/stores/music.store";

const useSinger = singerStore();
const useCountry = countryStore();
const useGenre = genreStore();
const useMusic = musicStore();
const route = useRoute();
const loadingSelect = ref(false);
const props = defineProps({
    data: Object,
    loading: Boolean,
});

const emit = defineEmits(["save"]);
const router = useRouter();
function save() {
    emit("save");
}

async function getApi() {
    try {
        await useSinger.findAllSelect();
        await useCountry.findAllSelect();
        await useGenre.findAllSelect();
        if (!route.params.id) {
            props.data.singer = new Set();
            props.data.country = new Set();
            props.data.genre = new Set();
        } else {
            props.data.singer = new Set(props.data.singer);
            props.data.country = new Set(props.data.country);
            props.data.genre = new Set(props.data.genre);
        }
        loadingSelect.value = true;
    } catch (error) {
        console.log(error);
    } finally {
    }
}
onMounted(() => {
    getApi();
});
// onBeforeMount(() => {
//     getApi();
// });
</script>

<style></style>
