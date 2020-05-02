<!-- 画廊组件 -->
<template>

<div class="service">
  <h1>服务领域</h1>
  <em style="font-weight:300;color:#a6a6a6;">SERVICE AREA</em>
  <span class="serviceBorder"></span>
  <ul class='serviceBody w'>
    <li>
          <img src="http://www.czbug.cn/api/Home_icon/up_icon.png" alt="">
        <h2>建筑工程</h2>
        <p>房屋建筑工程是指各类房屋建筑及其附属设施和与其配套的线路、管道、设备安装工程及室内外装修工程房屋</p>
        <p>建筑工程般简称建筑工程,是指新建改建或扩建房屋建筑物和附属构筑物所进行的勘察、规划、设计、施工、安装和维护等各项技术工作及其完成的工程实体</p>
    </li>
    <li>
        <img src="http://www.czbug.cn/api/Home_icon/hb_icon.png" alt="">
        <h2>水利工程</h2>
        <p>水利工程设计水土保持方案,灌溉排涝,河道整治城市防淇水土保持验收水利工程施工监理,水资源论证防洪评价,地质灾害,专业从事水利行业设计</p>
      </li>
    <li>
        <img src="http://www.czbug.cn/api/Home_icon/s_icon.png" alt="">
        <h2>环保工程施工</h2>
        <p>环保工程施工环保工程施工主要包括以下几个方面:大气污染防治工程、水污染防治工程、固体废物的处理和利用工程,以及噪声控制工程等。中国的水专项,包括可流,湖泊和部分海洋的污染物治理,污水处理场站,垃极处理场站,还包括防护林工程等等</p>
      </li>
  </ul>
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
      serviceSector: []
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
   
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    // let datas = JSON.parse(localStorage.getItem("sy"));
    //  console.log(datas.data)
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {} //如果页面有keep-alive缓存功能，这个函数会触发
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