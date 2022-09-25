<template>
  <div class="toast" v-show="show">
    <div>{{message}}</div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props:{
    message:{
      type:String,
      default:''
    },
    show:{
      type:Boolean,
      default:false
    }
  }
}
</script>

<style scoped>
  .toast{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 8px 10px ;
    color: #fff;
    border-radius: 3px;
    background-color: rgba(0, 0, 0, 0.75);
  }
</style>