<!-- 轮播 -->
<template>
<div class='lunbo'>
      <el-carousel :interval="1000000" arrow="always" height="700px">
    <el-carousel-item v-for="item in imgs" :key="item.id">
      <img :src="item.cover" alt="">
       <div  id="title">{{item.title}}</div>
       <div  id="tile">{{item.tile}}</div>
    </el-carousel-item>
  </el-carousel>
</div>
</template>

<script>
export default {
  name: 'lunbo',
components: {},
data() {
//这里存放数据
return {
   imgs:[]   //轮播图片
};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {
 lunbo(){
    let api = '/hot_tag_list.json'
    this.axios.get(api).then((response) => {
      this.imgs = response.data.data;
    })
    }
},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {
   this.lunbo() //轮播
},

}
</script>
<style  scoped>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  img{
    width: 100%;
    height: 100%;
    
  }
  /* 中文文字 */
#title{
   position: absolute;
    width: 700px;
    height: 80px;
    top: 30%;
    left: 50%;
    color: white;
    text-align: center;
    font-size: 45px;
    line-height: 80px;
    transform: translate(-50%, -30%);
}
/* 英文文字 */
#tile{
   position: absolute;
    width: 700px;
    height: 80px;
    top: 45%;
    left: 50%;
    color: white;
    text-align: center;
    font-size: 20px;
    line-height: 80px;
    transform: translate(-50%, -45%);
}
</style>