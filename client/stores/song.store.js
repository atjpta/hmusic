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
            time: ''
        };
    },
    getters: {
    },
    actions: {

        convertToValidFileName(str) {
            // Chuyển đổi chuỗi tiếng Việt sang dạng không dấu
            str = str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

            // Loại bỏ các ký tự không hợp lệ
            str = str.replace(/[^a-zA-Z0-9_\-]/g, "");

            // Thay thế khoảng trắng bằng dấu gạch ngang
            str = str.replace(/\s+/g, "-");

            // Giới hạn độ dài tên file
            str = str.substring(0, 50);

            return str;
        },

        async previewFiles(event) {
            this.reset();
            const file = event.target.files[0];
            const theReader = new FileReader();
            theReader.onloadend = async () => {
                this.previewSong = await theReader.result;
            };
            theReader.readAsDataURL(file);
            this.song = file
            const fileExt = file.name.split('.').pop()
            this.name = this.convertToValidFileName(file.name.split('.')[0]) + `.${fileExt}`;
            console.log(this.name);
            this.url = config.url.apiSong + this.name;
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
            this.name = null;
            this.name = '';

        },
    }
}

);
