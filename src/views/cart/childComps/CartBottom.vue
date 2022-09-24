<template>
  <div class="select">
    <div class="chenckall">
      <cart-check class="check" :check="check" @click.native="checkClick"></cart-check>
      <span class="all">全选</span>
    </div>

    <div class="total">合计:{{ total }}</div>
    <div class="checklength">去结算:{{ checkLength }}</div>
  </div>
</template>

<script type="text/ecmascript-6">
import CartCheck from "./CartCheck";
export default {
  components: {
    CartCheck,
  },
  computed: {
    total() {
      return (
        "¥" +
        this.$store.state.Cart.filter((item) => {
          return item.check;
        })
          .reduce((sum, item) => {
            return sum + item.count * item.lowNowPrice;
          }, 0)
          .toFixed(2)
      );
    },
    checkLength() {
      return this.$store.state.Cart.filter((item) => item.check).length;
    },
    check(){
      if(this.$store.state.Cart.length === 0) return false;
      return !this.$store.state.Cart.find(item => !item.check)
    }
  },
  methods:{
    checkClick(){
      if(this.check){
        this.$store.state.Cart.forEach(item => {
          return item.check = false;
        });
      } else {
        this.$store.state.Cart.forEach(item => {
          return item.check = true;
        })
      }
    }
  }
};  
</script>

<style scoped>
.select {
  width: 100%;
  height: 40px;
  position: relative;
  display: flex;
  background-color: #fff;
  border-top: 1px solid #eee;
  text-align: center;
  justify-content: space-around;
}
.chenckall{
  display: flex;
}
.check {
  margin: 20px;
}
.all {
  margin-top: 10px;
  margin-left: -20px;
}
.total {
  margin-top: 10px;
  margin-left: 20px;
}
.checklength {
  margin-top: 10px;
  margin-left: 60px;
}
</style>