<template>
  <div class="recommends">
    <div v-for="(item,index) in recommends" :key="index" class="recommends-item">
      <a :href="item.link">
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
.recommends{
  width: 100%;
  display:flex;
  text-align: center;
  padding: 10px 0 15px;
  border-bottom: 10px solid #eee;
}
.recommends-item{
  flex: 1;
}
.recommends-item img {
  width: 68px;
  height: 68px;
  margin-bottom: 10px;
}
</style>