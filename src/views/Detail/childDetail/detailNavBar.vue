<template>
  <div>
    <nav-bar>
      <div slot="left" class="back" @click="backClick">
        <img src="@/assets/images/common/back.svg" />
      </div>
      <div slot="center" class="title">
        <div
          class="title-item"
          v-for="(item,index) of itemList "
          :key="item"
          :class="{active:currentIndex == index}"
          @click="itemClick(index)"
        >{{item}}</div>
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "@/components/common/navbar/NavBar";

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      itemList: ["商品", "参数", "评论", "详情"],
      currentIndex: 0,
    };
  },
  methods: {
    //点击变色
    itemClick(index) {
      this.currentIndex = index;
    },
    //点击返回
    backClick() {
      this.$router.back();
      //   this.$router.go(-1)和上面一样
    },
  },
};
</script>

<style scoped>
.title {
  display: flex;
  font-size: 13px;
}
.title-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
.back {
  margin-top: 4px;
}
</style>