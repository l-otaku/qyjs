<template>
<div class="service">
  <!-- 画廊组件 -->
  <!-- <h1>{{serviceSector.title}}</h1>
  <em style="font-weight:300;color:#a6a6a6;">{{serviceSector.Subtitle}}</em>
  <span class="serviceBorder"></span>
  <ul class='serviceBody w'>
    <li v-for="item in serviceSector.SmainText" :key="item.id" :data-index="item.id">
          <img :src="item.icon" alt="">
        <h2>{{item.title}}</h2>
        <p>{{item.text}}</p>
    </li>
  </ul> -->

</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: "",
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      // serviceSector: this.$props.serviceSectorData
    };
  },
  props:["serviceSectorData"],
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
  //  console.log(this.serviceSector);
  },

};
</script>
<style  scoped>
* {
  margin: 0;
}
.w {
  width: 1200px;
  margin: 0 auto;
}
.service {
  width: 100%;
  /* background-color: #212b2c; */
  /* background-color: rgba(33, 43, 44, .9); */
   background: linear-gradient(rgb(34, 42, 44),rgba(0,0,0,0));
  text-align: center;
  padding-top: 32px;
  color: #f4f6f5;

}
.service h1 {
  font-size: 39px;
  font-weight:400;
  margin-bottom: 3px;
}
.service:hover .serviceBorder{
  width: 8%;
}
.serviceBorder{
  display: block;
  margin:5px auto 0;
  width: 3%;
  height: 5px;
  border-radius: 2.5px;
  background-color: #999999;
  transition: all .5s;
}
/* 服务主体 */
.serviceBody {
  position: relative;
  top: 0;
  left: 0;
  width: 795px;
  height: 600px;
  /* text-align: center; */
  padding-top: 35px;
  /* margin: 0 auto; */
}
.serviceBody li {
  float: left;
  width: 265px;
  height: 500px;
  padding: 0 40px;
}

.serviceBody li:hover img{
  width: 105px;
  
}
.serviceBody li:nth-child(n + 2) {
  border-left: 0;
}
.serviceBody li:nth-child(1){
  background-color: #293535;
}
.serviceBody li:nth-child(2){
  background-color: #202c2c;
}
.serviceBody li:nth-child(3){
  background-color: #1c2828;
}
.serviceBody i{
  width: 100%;
  height: 100%;
}
.serviceBody img{
  margin: 60px 0 40px 0;
  width: 100px;
  transition: all .3s ease;

}
.serviceBody h2{
  font-size: 30px;
  color: #20ba82;
  font-weight: 500;
  padding-bottom: 10px;
  
}
.serviceBody p{
  color: #c9d1d3;
  text-indent: 1rem;
  text-align: left;
  padding: 3px 0;
  line-height: 20px;
  letter-spacing: 0.5px;

}
</style>