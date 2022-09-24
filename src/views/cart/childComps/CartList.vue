<template>
  <div class="cart-list">
    <scroll class="content-scroll" ref="scroll">
      <cart-list-item v-for="(item,index) in cartlist" :key="index" :info="item"></cart-list-item>
    </scroll>
  </div>
</template>

<script type="text/ecmascript-6">
import { mapGetters } from "vuex";
import Scroll from "components/common/scroll/Scroll";
import CartListItem from './CartListItem'
export default {
  components: {
    Scroll,
    CartListItem
  },
  computed: {
    ...mapGetters(["cartlist"]),
  },
  activated(){
    this.$refs.scroll.refresh();
  }
};
</script>

<style scoped>
.cart-list {
  overflow: hidden;
  height: calc(100% - 44px - 49px - 40px);
}
.content-scroll {
  height: 100%;
}
</style>