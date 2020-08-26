<template>
  <div ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "scroller",
  data() {
    return {
      scroller: {
        type: Object,
        default() {
          return {};
        },
      },
    };
  },
  //接收父组件来的值
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpload: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    this.scroller = new BScroll(this.$refs.wrapper, {
      probeType: this.probeType, //是否监听
			pullUpLoad: this.pullUpload, // 是否加载更多
			click:true
    });
    // 监听
    this.scroller.on("scroll", (postion) => {
      this.$emit("scroll", postion);
    });
    // 上拉加载更多
    this.scroller.on("pullingUp", () => {
      this.$emit("pullingUp");
    });
  },
  methods: {
    scrollTo(x, y, time = 300) {
      this.scroller.scrollTo(0, 0, time);
    },
    finishPullUp() {
      this.scroller.finishPullUp();
    },
  },
};
</script>

<style scoped>
</style>
