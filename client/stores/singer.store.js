import { defineStore } from "pinia";
import singerService from "~~/services/singer.service";
import { searchStore } from '~~/stores/search.store'
const useSearch = searchStore()
export const singerStore = defineStore("singerStore", {
    id: 'singer',
    state() {
        return {
            singer: {},
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
            this.singer = await singerService.findOne(id);
            return this.singer;
        },
        async findAll() {
            this.list = await singerService.findAll();
        },
        async update(data) {
            await singerService.update(data);
        },
        async deleteOne(id) {
            await singerService.deleteOne(id);
        },
        async create(data) {
            await singerService.create(data);
        },
        clear() {
            this.singer = {};
        },
        async findAllSelect() {
            this.list = await singerService.findAllSelect();


        },
    }
});
