<template>
  <div class="cart-list-item">
    <cart-check
      @click.native="checkClick"
      :check="info.check"
      class="choose"
    ></cart-check>
    <div class="top-image">
      <img :src="info.topImages" alt="" />
    </div>
    <div class="text">
      <div class="item">
        <div class="item-text">{{ info.title }}</div>
        <div class="item-text2">{{ info.desc }}</div>
      </div>
      <div class="item-text3">
        <span class="price">{{ info.lowNowPrice }}</span>
        <span class="quantity">x{{ info.count }}</span>
      </div>
    </div>
    <div class="box"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import CartCheck from "./CartCheck";
export default {
  props: {
    info: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  components: {
    CartCheck,
  },
  methods: {
    checkClick() {
      this.info.check = !this.info.check;
    },
  },
};
</script>

<style scoped>
.cart-list-item {
  width: 100%;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  border-bottom: 1px solid #ccc;
}
.choose {
  position: relative;
  top: 10px;
  bottom: 0;
  left: 22px;
  right: 0;
}
.top-image {
  flex: 1;
  padding-left: 25px;
}
.top-image img {
  height: 84px;
}
.text {
  width: 195px;
  height: 120px;
  flex: 1;
  position: relative;
}
.item {
  margin-top: 15px;
  line-height: 20px;
}
.item-text {
  font-size: 15px;
  color: black;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.item-text2 {
  margin: 0 auto;
  font-size: 12px;
  color: black;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.item-text3 {
  display: flex;
  margin-top: 29px;
}
.item-text3 span {
  flex: 1;
}
.quantity {
  text-align: right;
}
.box {
  width: 15px;
}
</style>