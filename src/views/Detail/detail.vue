<template>
  <div>
    <h2>{{this.id}}</h2>
    <detail-nav-bar></detail-nav-bar>
  </div>
</template>

<script>
import detailNavBar from "./childDetail/detailNavBar";
import { getDetail } from "@/network/detail";
export default {
  name: "detail",
  components: { detailNavBar },
  data() {
    return {
      id: 0,
    };
  },
  created() {
    this.id = this.$route.params.id;

    getDetail(this.id).then((res) => {
      console.log(res, 1);
    });
  },
};
</script>

<style>
</style>