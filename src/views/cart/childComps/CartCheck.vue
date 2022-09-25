<template>
  <div class="check" :class="{ chenck1: check }">
    <img src="~assets/img/cart/tick.svg" alt="" />
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props: {
    check: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style scoped>
.check {
  width: 20px;
  height: 20px;
  transform: translate(-50%, -50%);
  border: 1px solid black;
  border-radius: 20px;
}
.chenck1 {
  background-color: black;
}
.check img {
  margin: 1px;
}
</style>