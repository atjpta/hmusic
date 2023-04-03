import { defineStore } from "pinia";
import genreService from "~~/services/genre.service";
import { searchStore } from '~~/stores/search.store'
const useSearch = searchStore()
export const genreStore = defineStore("genreStore", {
    id: 'genre',
    state() {
        return {
            genre: {},
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
            this.genre = await genreService.findOne(id);
            return this.genre;
        },
        async findAll() {
            this.list = await genreService.findAll();
        },
        async update(data) {
            await genreService.update(data);
        },
        async deleteOne(id) {
            await genreService.deleteOne(id);
        },
        async create(data) {
            await genreService.create(data);
        },
        clear() {
            this.genre = {};
        },
        async findAllSelect() {
            this.list = await genreService.findAllSelect();

        },
    }
});
