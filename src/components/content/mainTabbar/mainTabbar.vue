<template>
<div>
  <tab-bar>
    <tab-bar-item path="/home" activeColor="red">
      <img src="../../../assets/img/tabbar/home.svg" slot="item-icon" alt="">
      <img src="../../../assets/img/tabbar/home_active.svg" slot="item-icon-active" alt="">
      <div slot="item-text">主页</div>
    </tab-bar-item>
    <tab-bar-item path="/category" activeColor="red">
      <img src="../../../assets/img/tabbar/category.svg" slot="item-icon" alt="">
      <img src="../../../assets/img/tabbar/category_active.svg" slot="item-icon-active" alt="">
      <div slot="item-text">分类</div>
    </tab-bar-item>
    <tab-bar-item path="/cart" activeColor="red">
      <img src="../../../assets/img/tabbar/cart.svg" slot="item-icon" alt="">
      <img src="../../../assets/img/tabbar/cart_active.svg" slot="item-icon-active" alt="">
      <div slot="item-text">购物车</div>
    </tab-bar-item>
    <tab-bar-item path="/profile" activeColor="red">
      <img src="../../../assets/img/tabbar/profile.svg" slot="item-icon" alt="">
      <img src="../../../assets/img/tabbar/profile_active.svg" slot="item-icon-active" alt="">
      <div slot="item-text">我的</div>
    </tab-bar-item>
  </tab-bar>
  <router-view></router-view>
</div>
</template>

<script>
import TabBar from "@/components/common/Tabbar/TabBar";
import TabBarItem from "@/components/common/Tabbar/TabBarItem";
export default {
  name: "mainTabbar",
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>