<!-- 轮播 -->
<template>
<div class='lunbo'>
      <el-carousel :interval="1000000" arrow="always" height="700px">
    <el-carousel-item v-for="item in imgs" :key="item.id">
      <img  v-lazy="item.cover"  alt="">
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
      if(response.status === 200){
         this.imgs = response.data.data; 
         return;
      } 
    }).catch(function (error) {
          //  console.log(error+'服务器错误');
    });


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

#title,#tile{
   position: absolute;
    width: 700px;
    height: 80px;
    left: 50%;
    color: rgba(255, 255, 255, 1);
    text-align: center;
    font-size: 45px;
    line-height: 80px;
}
/* 中文文字 */
#title{
    top: 35%;
    font-size: 45px;
    transform: translate(-50%, -35%);
}
/* 英文文字 */
#tile{
    top: 50%;
    font-size: 20px;
    transform: translate(-50%, -50%);
}
</style>