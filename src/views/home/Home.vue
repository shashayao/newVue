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
      <!--  <div>
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
      </div>-->
      <goods-list :cgoods="showGoods" />
    </scroller>
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
import { debounce } from "@/common/utils";
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
      saveY: 0,
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
  computed() {
    const refresh = debounce(this.$refs.scroller.refresh, 200);

    this.$bus.$on("itemImageLoad", () => {
      refresh();
    });
  },
  methods: {
    /*
     * 事件监听相关的方法
     */
    // 分类商品
    tabClick(index) {
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
      this.MgetHomeGoods(this.currentType);
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
      return [
        {
          id: 1,
          name: "意大利宾渡",
          image:
            "https://m.360buyimg.com/babel/s333x333_jfs/t1/35540/25/105/399472/5ca6c6f5Ef53ed7a5/31895ad6b59433c3.png",
          price: "$12",
        },
        {
          id: 2,
          name: "意大利宾渡1",
          image:
            "https://m.360buyimg.com/babel/s333x333_jfs/t1/35540/25/105/399472/5ca6c6f5Ef53ed7a5/31895ad6b59433c3.png",
            price: "$12",
        },
        {
          id: 3,
          name: "意大利宾渡2",
          image:
            "https://m.360buyimg.com/babel/s333x333_jfs/t1/35540/25/105/399472/5ca6c6f5Ef53ed7a5/31895ad6b59433c3.png",
            price: "$12",
        },
        {
          id: 4,
          name: "意大利宾渡3",
          image:
            "https://m.360buyimg.com/babel/s333x333_jfs/t1/35540/25/105/399472/5ca6c6f5Ef53ed7a5/31895ad6b59433c3.png",
            price: "$12",
        },
        {
          id: 5,
          name: "意大利宾渡4",
          image:
            "https://m.360buyimg.com/babel/s333x333_jfs/t1/35540/25/105/399472/5ca6c6f5Ef53ed7a5/31895ad6b59433c3.png",
            price: "$12",
        },
        {
          id: 6,
          name: "意大利宾渡5",
          image:
            "https://m.360buyimg.com/babel/s333x333_jfs/t1/35540/25/105/399472/5ca6c6f5Ef53ed7a5/31895ad6b59433c3.png",
            price: "$12",
        },
        {
          id: 7,
          name: "意大利宾渡6",
          image:
            "https://m.360buyimg.com/babel/s333x333_jfs/t1/35540/25/105/399472/5ca6c6f5Ef53ed7a5/31895ad6b59433c3.png",
            price: "$12",
        },
        {
          id: 8,
          name: "意大利宾渡7",
          image:
            "https://m.360buyimg.com/babel/s333x333_jfs/t1/35540/25/105/399472/5ca6c6f5Ef53ed7a5/31895ad6b59433c3.png",
            price: "$12",
        },
      ]; //this.goods[this.currentType].list;
    },
  },
  destroyed() {
    //离开页面会销毁状态
    console.log("home destroyed");
  },
  activated() {
    this.$refs.scroller.scrollTo(0, this.saveY, 0);
    this.$refs.scroller.refresh();
  },
  deactivated() {
    this.saveY = this.$refs.scroller.scroller.y;
  },
};
</script>
<style scoped>
/* scoped 域 */
#home {
  /* padding-top: 44px; */
  height: 100vh;
  position: relative;
}

.home-nav-bar {
  background-color: var(--color-tint);
  color: #fff;

  /* position: fixed; 
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;*/
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
