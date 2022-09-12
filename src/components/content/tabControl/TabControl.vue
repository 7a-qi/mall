<template>
  <div class="tab-control">
    <div v-for="(item, index) in titles" :key="index" 
    class="tab-control-item" 
    :class="{active:index === currentIndex}" 
    @click="itemclick(index)">
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props:{
    titles:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data(){
    return {
      currentIndex: 0,
    }
  },
  methods:{
    itemclick(index){
      this.currentIndex = index;
      this.$emit('tabclick', index);
    }
  }
}
</script>

<style scoped>
.tab-control{
  display: flex;
  text-align: center;
  font-size: 15px;
  height: 40px;
  line-height: 40px;
  background-color: #fff;
}
.tab-control-item{
  flex: 1;
}
.tab-control-item span{
  padding: 10px;
}
.active{
  color:var(--color-height-text);
}
.active span{
  border-bottom: 3px solid var(--color-tint);
}
</style>