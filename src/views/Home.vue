<template>
  <div class="home">
    <ItemsListComponent :items="items" />
  </div>
</template>

<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator'
import ItemsListComponent from '@/components/items/ItemsList.component.vue'
import { IItem } from '@/models/items/IItem'

@Component({
  components: {
    ItemsListComponent
  }
})

export default class Home extends Vue{
private items: IItem[] = [{
  id: 1,
  name: 'Item 1',
  selected: false
}, {
  id: 2,
  name: 'Item 3',
  selected: false
}, {
  id: 3,
  name: 'Item 3',
  selected: false
}]

}

</script>
