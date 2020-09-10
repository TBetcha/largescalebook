<template>
  <div>
    <h3>My Items: {{ loading }}</h3>
    <Loader v-show="loading" />
    <ul v-show="!loading">
      <li
        v-for="item in items"
        :key="item.id"
        :model="item"
        @click="onItemClick(item)"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { IItem } from "@/models/items/IItem";
import ItemComponent from "@/components/items/children/Item.component.vue";
import Loader from "@/components/shared/Loader.component.vue";

@Component({
  components: {
    Loader,
    ItemComponent,
  },
})
export default class ItemsListComponent extends Vue {
  @Prop() items!: IItem[];

  private get loading(): boolean {
    return this.$store.state.loading;
  }

  onItemClick(item: IItem) {
    item.selected = !item.selected;
    console.log("onClickItem", item.id, item.selected);
  }
}
</script>

<style lang="scss" >
ul {
  list-style-type: none;
  margin-block-start: 0;
  margin-block-end: 0;
  margin-inline-start: 0px;
  margin-inline-end: 0;
  padding-inline-start: 0px;
}
</style>