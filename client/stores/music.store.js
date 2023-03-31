import { defineStore } from "pinia";
import musicService from "~~/services/music.service";
import config from "~~/config";
export const musicStore = defineStore("musicStore", {
    id: 'music',
    state() {
        return {
            previewmusic: null,
            music: null,
            url: null,
            url_image: [
                "https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/734997.png",
                "https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/city.jpg",
                "https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/ling-xiang-9.jpg",
                "https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/miku.png",
                "https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/meo.jpg",
                "https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/734997.png",
                "https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/city.jpg",
                "https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/ling-xiang-9.jpg",
                "https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/miku.png",
                "https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/meo.jpg",
            ],

            name: null,
            loading: false,
        };
    },
    getters: {
    },
    actions: {

    }
}

);
