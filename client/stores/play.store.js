import { defineStore } from "pinia";

export const playStore = defineStore("playStore", {
    id: 'play',
    state() {
        return {
            load: false,
            play: false,
            audio: {},
            song: {},
            list: [],
            duration: '0:00',
            currentTime: '0:00',
            currentTimeSave: '0:00',
            volumeCurrent: 1,
            volumeCurrent2: 1,
            iconVolume: 'fa-solid fa-volume-high',
            indexCurrent: '0',
            loop: false,
            random: false,
            image: 'https://khydqeqdyigehckvjaci.supabase.co/storage/v1/object/public/hmusic-files/image/city.jpg',
        }
    },
    getters: {

    },
    actions: {

        loadStore() {
            const data = JSON.parse(localStorage.getItem("playStore"));
            if (data) {
                this.song = data.song
                this.list = data.list
                this.duration = data.duration
                this.currentTime = data.currentTime
                this.audio.currentTime = data.currentTimeSave
                this.volumeCurrent = data.volumeCurrent
                this.volumeCurrent2 = data.volumeCurrent2
                this.iconVolume = data.iconVolume
                this.indexCurrent = data.indexCurrent
                this.loop = data.loop
                this.random = data.random
            }
        },

        saveStore() {
            localStorage.setItem("playStore", JSON.stringify({
                song: this.song,
                list: this.list,
                duration: this.duration,
                currentTime: this.currentTime,
                currentTimeSave: this.currentTimeSave,
                volumeCurrent: this.volumeCurrent,
                volumeCurrent2: this.volumeCurrent2,
                iconVolume: this.iconVolume,
                indexCurrent: this.indexCurrent,
                loop: this.loop,
                random: this.random,
            }));
        },

        // Format time ss as mm:ss
        formatTime(time) {
            const minutes = Math.floor(time / 60);
            const seconds = Math.floor(time % 60);
            return `${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
        },

        async playAudioFirst(song) {
            this.song = song
            this.play = true
            this.list.forEach((e, n) => {
                if (e.id == this.song.id) {
                    this.indexCurrent = n;
                    return
                }
            });
        },

        setList(list) {
            this.list = list
        },

        timeUpdate() {
            this.currentTime = this.formatTime(this.audio.currentTime);
            this.currentTimeSave = this.audio.currentTime

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
        },
        next() {
            if (this.random) {
                this.getRandom()
            } else {
                if (this.indexCurrent > this.list.length - 2) {
                    this.indexCurrent = 0;
                }
                else {
                    this.indexCurrent += 1;
                }
                this.song = this.list[this.indexCurrent];
            }
        },

        pre() {
            if (this.random) {
                this.getRandom()
            } else {
                if (this.indexCurrent == 0) {
                    this.indexCurrent = this.list.length - 1;
                }
                else {
                    this.indexCurrent -= 1;
                }
                this.song = this.list[this.indexCurrent];
            }
        },

        nextEnd() {
            if (this.random && !this.loop) {
                this.getRandom()
            } else if (!this.loop) {
                if (this.indexCurrent > this.list.length - 2) {
                    this.indexCurrent = 0;
                }
                else {
                    this.indexCurrent += 1;
                }
                this.song = this.list[this.indexCurrent];
            }

        },

        getRandom() {
            let randomIndex
            while (true) {
                randomIndex = Math.floor(Math.random() * this.list.length);
                if (randomIndex != this.indexCurrent)
                    break;
            }
            this.song = this.list[randomIndex];
            this.indexCurrent = randomIndex
        }
    }
}

);
