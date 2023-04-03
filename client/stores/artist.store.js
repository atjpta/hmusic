import { defineStore } from "pinia";
import artistService from "~~/services/artist.service";
import { searchStore } from '~~/stores/search.store'
const useSearch = searchStore()
export const artistStore = defineStore("artistStore", {
    id: 'artist',
    state() {
        return {
            artist: {},
            list: [],
        };
    },
    getters: {

        list_search(state) {
            let list_search = [];
            if (useSearch.key.length > 0) {
                list_search = state.list.filter((e) => {
                    if (e.name) {
                        return (
                            e.name.toLowerCase().trim().indexOf(useSearch.key.toLowerCase().trim()) > -1
                        );
                    }
                    return false;
                });
            }
            else {
                return state.list
            }
            return list_search
        },

    },
    actions: {
        async findOne(id) {
            this.artist = await artistService.findOne(id);
            return this.artist;
        },
        async findAll() {
            this.list = await artistService.findAll();
        },
        async update(data) {
            await artistService.update(data);
        },
        async deleteOne(id) {
            await artistService.deleteOne(id);
        },
        async create(data) {
            await artistService.create(data);
        },
        clear() {
            this.artist = {};
        },
    }
});
