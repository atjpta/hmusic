import { defineStore } from "pinia";
import countryService from "~~/services/country.service";
import { searchStore } from '~~/stores/search.store'
const useSearch = searchStore()
export const countryStore = defineStore("countryStore", {
    id: 'country',
    state() {
        return {
            country: {},
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
            this.country = await countryService.findOne(id);
            return this.country;
        },
        async findAll() {
            this.list = await countryService.findAll();
        },
        async update(data) {
            await countryService.update(data);
        },
        async deleteOne(id) {
            await countryService.deleteOne(id);
        },
        async create(data) {
            await countryService.create(data);
        },
        clear() {
            this.country = {};
        },
        async findAllSelect() {
            this.list = await countryService.findAllSelect();

        },
    }
});
