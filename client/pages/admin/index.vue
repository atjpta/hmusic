<template>
    <div>
        <span
            class="italic before:h-[98%] before:my-auto py-1 before:block before:absolute before:-inset-1 before:-skew-y-3 before:-skew-x-12 before:bg-gradient-to-r before:from-green-400 before:via-cyan-400 before:to-blue-400 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 relative inline-block">
            <span class="relative text-white text-3xl font-black px-5">Trang admin</span>
        </span>
        <!-- <SearchVInput /> -->
        <div class="form-control mt-3">
            <div class="input-group">
                <input v-model="useSearch.key" type="text" placeholder="Tìm kiếm…"
                    class="input lg:input-md input-sm input-bordered lg:w-1/2 w-3/5" />
                <button @click="getApi()" class="btn btn-square lg:btn-md btn-sm">
                    <OtherVIcon icon="fa-solid fa-magnifying-glass" />
                </button>
            </div>
        </div>
        <div class="flex flex-wrap mt-3">
            <div v-for="i in menuAdmin" :key="i">
                <nuxtLink :to="'/admin' + i.url" class="flex space-x-1 btn btn-sm mr-1 mb-1">
                    <div>
                        {{ i.title }}
                    </div>
                </nuxtLink>
            </div>
        </div>

        <div class="mt-3 space-y-5" v-if="loadingSkeleton">
            <div v-for="i in 7" :key="i">
                <!-- <AdminVSkeleton /> -->
            </div>
        </div>

        <NuxtPage v-else />
    </div>
</template>

<script setup>
import { alertStore } from "~~/stores/alert.store";
import { authStore } from "~~/stores/auth.store";
import { searchStore } from "~~/stores/search.store";
import { userStore } from "~~/stores/user.store";
const useSearch = searchStore();
const useUser = userStore();
const useAuth = authStore();
const route = useRoute();
const useAlert = alertStore();
const loadingSkeleton = ref(false);
const menuAdmin = ref([
    {
        title: "bài hát",
        url: "/music",
    },
    {
        title: "thể loại",
        url: "/genre",
    },
    {
        title: "ca sĩ",
        url: "/singer",
    },
    // {
    //     title: "nghệ sĩ",
    //     url: "/artist",
    // },
    {
        title: "quốc gia",
        url: "/country",
    },
]);

async function getApi() {
    loadingSkeleton.value = true;
    try {
        if (!useUser.user.id) {
            await useUser.findOne(useAuth.user.id);
            if (!useUser.isAdmin) {
                useAlert.setWarning("bạn không có quyền truy cập trang này");
                navigateTo(route.redirectedFrom);
            }
        }
        loadingSkeleton.value = false;
    } catch (error) {
        console.log(error);
    }
}

// definePageMeta({
//     middleware: "admin",
// });

onMounted(() => {
    // getApi();
});
</script>

<style></style>
