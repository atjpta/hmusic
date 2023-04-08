import { defineStore } from "pinia";

export const playStore = defineStore("playStore", {
    id: 'play',
    state() {
        return {
            play: false,
            audio: {},
            song: {},
            onReadly: false,
            duration: '0:00',
            currentTime: '0:00',
            volumeCurrent: 1,
            volumeCurrent2: 1,
            iconVolume: 'fa-solid fa-volume-high',
            mute: false,
            loop: false,
            random: false,

            timer: 0,
            endTime: 0,
            valuetime: 0,
            image: 'https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/city.jpg',
        }
    },
    getters: {

    },
    actions: {

        // Format time as mm:ss
        formatTime(time) {

            const minutes = Math.floor(time / 60);
            const seconds = Math.floor(time % 60);
            return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
        },

        async playAudioFirst(song) {
            this.song = song
            this.play = true
        },



        timeUpdate() {
            this.currentTime = this.formatTime(this.audio.currentTime);
        },
        loadedMetaData() {
            this.duration = this.formatTime(this.audio.duration);
        },

        playAudio() {
            if (this.song.url) {
                if (this.play) {
                    this.play = false
                    this.audio.pause();
                }
                else {
                    this.play = true
                    this.audio.play();
                }
            }
        },

        volumeChange() {
            this.volumeCurrent = this.audio.volume
            if (this.volumeCurrent == 0) {
                this.iconVolume = "fa-solid fa-volume-off"
            } else if (this.volumeCurrent > 0.8) {
                this.iconVolume = "fa-solid fa-volume-high"
            } else {
                this.iconVolume = "fa-solid fa-volume-low"
            }
        },

        mute() {
            if (this.audio.volume == 0) {
                this.audio.volume = this.volumeCurrent2;
            }
            else {
                this.volumeCurrent2 = this.audio.volume
                this.audio.volume = 0
            }
        }

    }
}

);
