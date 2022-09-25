<template>
  <div id="detail">
    <div>
      {{this.$store.Cart}}
    </div>
    <detail-nav-bar
      class="detail-nav-bar"
      ref="nav"
      @itemClick="itemClick"
    ></detail-nav-bar>
    <scroll
      class="content-scroll"
      :pull-up-load="false"
      :probe-type="3"
      @scroll="contentClick"
      ref="scroll"
    >
      <detail-swiper :top-images="topImages"></detail-swiper>
      <detail-base-info :goods="goods"></detail-base-info>
      <detail-shop-info :shop="shop"></detail-shop-info>
      <detail-goods-info
        :detail-info="detailinfo"
        @imgLoad="imgLoad"
      ></detail-goods-info>
      <detail-param-info
        :param-info="paramInfo"
        ref="param"
      ></detail-param-info>
      <detail-comment-info
        :comment-info="commentInfo"
        ref="comment"
      ></detail-comment-info>
      <goods-list :goods="recommends" ref="recommend"></goods-list>
    </scroll>
    <detail-bottom @addCart="addCart"></detail-bottom>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
    <toast :message="message" :show="show"></toast>
  </div>
</template>
<script>
import DetailNavBar from "./childComps/DetailNavBar";
import DetailSwiper from "./childComps/DetailSwiper";
import DetailBaseInfo from "./childComps/DetailBaseInfo";
import DetailShopInfo from "./childComps/DetailShopInfo";
import DetailGoodsInfo from "./childComps/DetailGoodsInfo";
import DetailParamInfo from "./childComps/DetailParamInfo";
import DetailCommentInfo from "./childComps/DetailCommentInfo";
import DetailBottom from "./childComps/DetailBottom";

import Scroll from "components/common/scroll/Scroll";
import GoodsList from "components/content/goods/GoodsList";
import Toast from "components/common/toast/Toast";
import {
  getdetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend,
} from "network/detail";
import { itemListMixin,backTopMixin } from "common/mixin";

export default {
  name: "Detail",
  data() {
    return {
      id: null,
      topImages: [],
      goods: {},
      shop: {},
      detailinfo: {},
      paramInfo: {},
      commentInfo: {},
      recommends: [],
      navbarlist: [],
      navbar: null,
      positionY: 0,
      currentIndex: 0,
      message:'',
      show: false
    };
  },
  components: {
    DetailNavBar,
    DetailSwiper,
    DetailBaseInfo,
    DetailShopInfo,
    DetailGoodsInfo,
    DetailParamInfo,
    DetailCommentInfo,
    DetailBottom,
    GoodsList,
    Scroll,
    Toast
  },
  mixins: [itemListMixin,backTopMixin],
  created() {
    this.id = this.$route.params.iid;
    getdetail(this.id).then((res) => {
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      this.shop = new Shop(data.shopInfo);
      this.detailinfo = data.detailInfo;
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      if (data.cRate != 0) {
        this.commentInfo = data.rate.list[0];
      }
      getRecommend().then((res) => {
        this.recommends = res.data.list;
      });
    });
    this.navbar = () => {
      this.navbarlist = [];
      this.navbarlist.push(0);
      this.navbarlist.push(this.$refs.param.$el.offsetTop);
      this.navbarlist.push(this.$refs.comment.$el.offsetTop);
      this.navbarlist.push(this.$refs.recommend.$el.offsetTop);
      this.navbarlist.push(Number.MAX_VALUE);
    };
  },
  destroyed() {
    this.$bus.$off("itemImageLoad", itemimglist);
  },
  methods: {
    imgLoad() {
      this.$refs.scroll.refresh();
      this.navbar();
    },
    itemClick(index) {
      this.$refs.scroll.scrollTo(0, -this.navbarlist[index], 200);
    },
    contentClick(position) {
      this.contentTop(position);
      let positionY = -position.y;
      let length = this.navbarlist.length;
      for (var i = 0; i < length - 1; i++) {
        if (
          this.currentIndex !== i &&
          positionY >= this.navbarlist[i] &&
          positionY < this.navbarlist[i + 1]
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
    },
    addCart(){
      const unite = {}
      unite.title = this.goods.title;
      unite.desc = this.goods.desc;
      unite.lowNowPrice = this.goods.lowNowPrice;
      unite.topImages = this.topImages[0];
      unite.id = this.id;
      this.$store.dispatch('addCart', unite).then((res) => {
        this.show = true;
        this.message = res;
        setTimeout(() =>{
          this.show = false;
          this.message = '';
        },1000)
      })
    }
  },
};
</script>
<style scoped>
#detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}
.detail-nav-bar {
  position: relative;
  z-index: 9;
  background-color: #fff;
}
.content-scroll {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  bottom: 49px;
}
</style>