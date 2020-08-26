<template>
  <div id="home">
    <nav-bar class="home-nav-bar">
      <div slot="center">购物街</div>
    </nav-bar>
    <scroller
      class="home-scroller"
      ref="scroller"
      :probe-type="3"
      @scroll="contentScroll"
      :pull-upload="true"
      @pullingUp="loadMore"
    >
      <home-swiper :cbanners="banner"></home-swiper>
      <home-recommend :cproducts="recommend"></home-recommend>
      <home-feature-view></home-feature-view>
      <tab-control class="tab-control" :ctitles="['流行','新款','精选']" @click="tabClick"></tab-control>
      <div>
        <ul>
          <li>sasa</li>
          <li>sasa</li>
          <li>sasa</li>
          <li>sasa</li>
          <li>sasa</li>
          <li>sasa</li>
          <li>sasa</li>
          <li>sasa</li>
          <li>sasa</li>
          <li>sasa</li>
          <li>sasa</li>
          <li>sasa</li>
          <li>sasa</li>
          <li>sasa</li>
          <li>sasa</li>
        </ul>
      </div>
    </scroller>
    <!-- <goods-list :goodItem="showGoods" /> -->
    <!-- native监听组件 -->
    <back-top @click.native="backClick" v-show="isShowBack"></back-top>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper"; //轮播图（vueui库，可以搜索到类似插件）
import HomeRecommend from "./childComps/HomeRecommend"; //推荐组件
import HomeFeatureView from "./childComps/HomeFeatureView"; //特点分类组件
// 公共组件
import NavBar from "@/components/common/navbar/NavBar"; //头部
import TabControl from "@/components/contents/tabcontrol/TabControl"; //分类商品
import GoodsList from "@/components/contents/good/GoodsList"; //商品列表
import Scroller from "@/components/common/scroller/Scroller"; //滚动
import BackTop from "@/components/contents/backTop/BackTop"; //回到顶部
// 接口
import { getHomeMultiData, getHomeGoods } from "@/network/home"; //调用接口
export default {
  name: "Home",
  components: {
    HomeSwiper,
    HomeRecommend,
    HomeFeatureView,
    NavBar,
    TabControl,
    GoodsList,
    Scroller,
    BackTop,
  },
  data() {
    return {
      banner: [],
      dKeyword: [],
      keywords: [],
      recommend: [],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBack: false,
    };
  },
  //生命周期函数
  created() {
    this.MgetHomeMultiData();
    this.MgetHomeGoods(
      "pop"
    ); /* 
    this.MgetHomeGoods("new");
    this.MgetHomeGoods("sell"); */
  },
  methods: {
    /*
     * 事件监听相关的方法
     */
    // 分类商品
    tabClick(index) {
      console.log(1)
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    // 回到顶部
    backClick() {
      this.$refs.scroller.scrollTo(0, 0);
    },
    // 监听滚动
    contentScroll(position) {
      this.isShowBack = -position.y > 0;
    },
    // 加载更多
    loadMore() {
      this.getHomeGoods(this.currentType);
    },
    /*
     *网络请求相关方法
     */
    // 请求多个数据
    MgetHomeMultiData() {
      getHomeMultiData().then((res) => {
        this.banner = res.data.banner.list;
        this.dKeyword = res.data.dKeyword.list;
        this.keywords = res.data.keywords.list;
        this.recommend = res.data.recommend.list;
      });
    },
    //商品数据
    MgetHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res);
        this.$refs.scroller.finishPullUp();
      });
    },
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
};
</script>
<style scoped>
/* scoped 域 */
#home {
  padding-top: 44px;
  height: 100vh;
  position: relative;
}

.home-nav-bar {
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

.home-tab-control {
  /*两个要混合使用*/
  position: sticky;
  top: 43px; /*顶部navbar的高度*/
  z-index: 9;
}

.home-scroller {
  /*height:300px;*/
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  right: 0;
  left: 0;
}
</style>
