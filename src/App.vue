<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tabbar />
  </div>
</template>
<script>
import mainTabbar from "@/components/content/mainTabbar/mainTabbar";
export default {
  components: {
    mainTabbar,
  },
};
</script>
<style>
@import "./assets/css/base.css";
</style>
