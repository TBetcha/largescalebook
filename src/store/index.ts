/** @format */
//STOPPED AT PG. 75
import Vue from 'vue';
import Vuex from 'vuex';
import { IItemState } from '@/models/store/IItemState';
import { IItem } from '@/models/items/IItem';

Vue.use(Vuex);

const state: IItemState = {
	loading: false,
	items: [],
};

export default new Vuex.Store({
	state: state,
	mutations: {
		loadingItems(state: IItemState) {
			state.loading = true;
		},
		loadedItems(state: IItemState, items: IItem[]) {
			state.items = items;
			state.loading = false;
		},
	},
	actions: {
		loadItems({ commit, state }) {
			commit('loadingItems');
			const mockItems: IItem[] = [
				{
					id: 1,
					name: 'Item 1',
					selected: false,
				},
				{
					id: 2,
					name: 'Item 3',
					selected: false,
				},
				{
					id: 3,
					name: 'Item 3',
					selected: false,
				},
			];
			setTimeout(() => {
				commit('loadedItems', mockItems);
			}, 1000);
		},
	},
	modules: {},
});
