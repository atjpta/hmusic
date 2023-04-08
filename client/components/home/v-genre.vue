<template>
    <div class="">
        <div>
            <div class="flex justify-between mb-3">
                <span
                    class="italic before:h-[98%] before:my-auto py-1 before:block before:absolute before:-inset-1 before:-skew-y-3 before:-skew-x-12 before:bg-gradient-to-r before:from-green-400 before:via-cyan-400 before:to-blue-400 bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 relative inline-block">
                    <span class="relative text-white text-3xl font-black px-5">Thể loại</span>
                </span>
                <div class="btn btn-primary btn-outline btn-sm">xem thêm</div>
            </div>
            <div class="carousel">
                <div class="carousel-item" v-for="i in dataNews" :key="i.url">
                    <GenreVMono :data="i" />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const dataNews = ref([
    {
        name: "thể loại 1",
        url:
            "https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/734997.png",
    },
    {
        name: "thể loại 2",
        url:
            "https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/city.jpg",
    },
    {
        name: "thể loại 3",
        url:
            "https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/ling-xiang-9.jpg",
    },
    {
        name: "thể loại 4",
        url:
            "https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/miku.png",
    },
    {
        name: "thể loại 5",
        url:
            "https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/meo.jpg",
    },
    {
        name: "thể loại 6",
        url:
            "https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/734997.png",
    },
    {
        name: "thể loại 7",
        url:
            "https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/city.jpg",
    },
    {
        name: "thể loại 8",
        url:
            "https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/ling-xiang-9.jpg",
    },
    {
        name: "thể loại 9",
        url:
            "https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/miku.png",
    },
    {
        name: "thể loại 10",
        url:
            "https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/meo.jpg",
    },
]);
</script>

<style></style>
