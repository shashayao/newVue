<template>
    <div class="good-list">
      <good-list-item v-for="item in cgoods" :key="item.image" :good-item="item"/>
    </div>
</template>

<script>
  import GoodListItem from "./GoodListItem";
  export default {
    name: "GoodsList",
    props:{
        cgoods:{
            type:Array,
            default() {
                return []
            }
        }
    },
    components:{
      GoodListItem
    }
  }
</script>

<style scoped>
  .good-list {
    display: flex;
    flex-wrap: wrap;/* 不包裹 */
    justify-content: space-around;/* 均等分 */
    background-color: var(--color-background);

    padding: 2px;
  }

</style>
