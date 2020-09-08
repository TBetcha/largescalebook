/** @format */

import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import { IItem } from '@/models/items/IItem'
import ItemComponent from '@/components/items/children/Item.component.vue'

describe('Item.component.vue', () => {
	it('renders main model properties correctly', () => {
		const model: IItem = {
			id: 1,
			name: 'Unit test item 1',
			selected: false,
		}

		const wrapper = shallowMount(ItemComponent, {
			propsData: {
				model: model,
			},
		})

		let domEl = wrapper.find('div-name')
		expect(domEl.text()).to.equal('Unit test item 1')
		expect(wrapper.text()).to.include('Unit test item 1')
	})

	it('has expected css class when selected is false', () => {
		const model: IItem = {
			id: 1,
			name: 'Unit test item 1',
			selected: false,
		}

		const wrapper = shallowMount(ItemComponent, {
			propsData: {
				model: model,
			},
		})
		const classes = wrapper.classes()
		expect(classes)
			.to.be.an('array')
			.that.includes('item')
		expect(classes)
			.to.be.an('array')
			.that.does.not.include('selected')
	})

	it('has selected class when selected is true', () => {
		const model: IItem = {
			id: 1,
			name: 'Unit test item 1',
			selected: true /*setting selected = true here */,
		}
		const wrapper = shallowMount(ItemComponent, {
			propsData: {
				model: model,
			},
		})
		const classes = wrapper.classes()
		expect(classes)
			.to.be.an('array')
			.that.includes('item')
		expect(classes)
			.to.be.an('array')
			.that.includes('selected')
	})
})

//STOPPED AT PG. 58
