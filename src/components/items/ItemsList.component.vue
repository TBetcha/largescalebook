<template>
	<div>
		<h3>My Items:</h3>
		<ul>
			<li v-for="item in items"
			:key="item.id"
			@click="onItemClick(item)"
			>
			{{ item.name }}</li>
		</ul>
	</div>
</template>

<script lang="ts">
	import { Component, Prop, Vue } from 'vue-property-decorator';
	import { IItem } from '@/models/items/IItem'

	@Component
	export default class  ItemsListComponent extends Vue {
		@Prop() items!: IItem[] 

		onItemClick(item: IItem) {
			item.selected = !item.selected
			console.log('onClickItem', item.id, item.selected)
		}
	}
</script>

<style scoped>

</style>