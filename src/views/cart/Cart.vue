<template>
  <div class="cart">
    <nav-bar class="navbar">
      <div slot="content">
        购物车({{cartlength}})
      </div>
    </nav-bar>
    <cart-list></cart-list>
    <cart-bottom></cart-bottom>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import NavBar from "components/common/navbar/NavBar";
import CartList from "./childComps/CartList";
import CartBottom from './childComps/CartBottom';
export default {
  name: "Cart",
  components: {
    NavBar,
    CartList,
    CartBottom
  },
  computed:{
    ...mapGetters(['cartlength'])
  }
};
</script>

<style scoped>
  .cart{
    height: 100vh;
  }
  .navbar{
    background-color: var(--color-tint);
    color: #fff;
  }
</style>