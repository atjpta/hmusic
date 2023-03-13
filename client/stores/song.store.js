import { defineStore } from "pinia";
import songService from "~~/services/song.service";
import config from "~~/config";
export const songStore = defineStore("songStore", {
    id: 'song',
    state() {
        return {
            previewSong: null,
            song: null,
            url: null,
            name: null,
            loading: false,
        };
    },
    getters: {
    },
    actions: {

        async previewFiles(event) {
            this.reset();
            const file = event.target.files[0];
            const theReader = new FileReader();
            theReader.onloadend = async () => {
                this.previewSong = await theReader.result;
            };
            theReader.readAsDataURL(file);
            this.song = file
            this.url = config.url.apiSong + file.name;
            this.name = file.name;
            console.log(this.url);

        },

        async upload() {
            this.loading = true
            try {
                await songService.upload(this.name, this.song);
                this.previewSong = null
                this.song = null
            } catch (error) {
                console.log(error);
            }
            finally {
                this.loading = false
            }
            return this.url;

        },

        reset() {
            this.previewSong = null;
            this.song = null;
            this.url = null;
        },
    }
}

);
