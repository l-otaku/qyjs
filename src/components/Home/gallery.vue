<!-- 服务领域 -->
<template>

<pl-lazy time="1000">
  <div class='se'>
  <div class="PhotFrameTitle w">
    <h1 style="font-size:48px;color:white">印度事实画廊</h1><!-- {{viewnum}} -->
    <em style="font-size:22px; margin-bottom:50px;">Industrial Revolution Business</em><!-- {{title_els}} -->
  </div>
  <div class="w" style="height:30px;"></div>
  <ul class="PhotFrame w">
    <!-- <li v-for="item in gallery" :key="item.id" :data-index="item.id">
        <i class="Pmask" style="">{{item.title}}</i>
        <img :src="item.cover" alt="">
    </li> -->






    <li>
        <i class="Pmask" style="">欢迎来到工业界</i>
        <img src="http://demo.qfpffmp.cn/cssthemes6/cpts_1788_csq/images/g1.jpg" alt="">
    </li>
     <li>
        <i class="Pmask" style="">欢迎来到工业界</i>
        <img src="http://demo.qfpffmp.cn/cssthemes6/cpts_1788_csq/images/g2.jpg" alt="">
    </li>
     <li>
        <i class="Pmask" style="">欢迎来到工业界</i>
        <img src="http://demo.qfpffmp.cn/cssthemes6/cpts_1788_csq/images/g3.jpg" alt="">
    </li>
     <li>
        <i class="Pmask" style="">欢迎来到工业界</i>
        <img src="http://demo.qfpffmp.cn/cssthemes6/cpts_1788_csq/images/g4.jpg" alt="">
    </li>
     <li>
        <i class="Pmask" style="">欢迎来到工业界</i>
        <img src="http://demo.qfpffmp.cn/cssthemes6/cpts_1788_csq/images/g5.jpg" alt="">
    </li>
     <li>
        <i class="Pmask" style="">欢迎来到工业界</i>
        <img src="http://demo.qfpffmp.cn/cssthemes6/cpts_1788_csq/images/g6.jpg" alt="">
    </li>
     <li>
        <i class="Pmask" style="">欢迎来到工业界</i>
        <img src="http://demo.qfpffmp.cn/cssthemes6/cpts_1788_csq/images/g7.jpg" alt="">
    </li>
     <li>
        <i class="Pmask" style="">欢迎来到工业界</i>
        <img src="http://demo.qfpffmp.cn/cssthemes6/cpts_1788_csq/images/g8.jpg" alt="">
    </li>
     <li>
        <i class="Pmask" style="">欢迎来到工业界</i>
        <img src="http://demo.qfpffmp.cn/cssthemes6/cpts_1788_csq/images/g4.jpg" alt="">
    </li>
     <li>
        <i class="Pmask" style="">欢迎来到工业界</i>
        <img src="http://demo.qfpffmp.cn/cssthemes6/cpts_1788_csq/images/g1.jpg" alt="">
    </li>
     <li>
        <i class="Pmask" style="">欢迎来到工业界</i>
        <img src="http://demo.qfpffmp.cn/cssthemes6/cpts_1788_csq/images/g6.jpg" alt="">
    </li>
     <li>
        <i class="Pmask" style="">欢迎来到工业界</i>
        <img src="http://demo.qfpffmp.cn/cssthemes6/cpts_1788_csq/images/g5.jpg" alt="">
    </li>
    





    
  </ul>
  <div class="w" style="height:60px;"></div>

</div>
</pl-lazy>

 <!-- <div class='se'>
  <div class="w" style="height:80px;"></div>
  <div class="PhotFrameTitle w">
    <h1 style="font-size:48px;color:white">{{viewnum}}</h1>
    <em style="font-size:22px; margin-bottom:50px;">{{title_els}}</em>
  </div>
  <div class="w" style="height:10px;"></div>
  <ul class="PhotFrame w">
    <li v-for="item in gallery" :key="item.id" :data-index="item.id">
        <i class="Pmask" style="">{{item.title}}</i>
        <img :src="item.cover" alt="">
    </li>
    
  </ul>
  <div class="w" style="height:60px;"></div>

</div> -->
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
      gallery: [], //画廊图片
      title_els: "", //画廊标题
      viewnum: "", //画廊描述
      datas: [],
      time: null
    };
  },
  //监听属性 类似于data概念
  computed: {
    // if (!datas) {
    //   // this.getup();
    //   console.log("画廊业打印 : 本地没有数据 重新获取");
    // } else {
    //   console.log("画廊业打印 :可以使用旧数据");
    //   if (Date.now() - datas.time > 432 * 100000) {
    //     // this.getup();
    //   } else {
    //     this.gallery = datas.data.gallery;
    //     this.title_els = datas.data.title_els;
    //     this.viewnum = datas.data.viewnum;
    //     // console.log(this.gallery);
    //   }
    // }
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    getup() {
      //请求数据
      let api = "/home_max.json";
      this.$fn(api);
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    // this.datas = JSON.parse(localStorage.getItem("sy"));
    // // this.getup();
    // console.log(this.datas.data);
  },
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
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
.w {
  width: 1200px;
  margin: 0 auto;
}
.se {
  text-align: center;
}
.PhotFrameTitle em {
  color: #a6a6a6;
}
.PhotFrame {
  overflow: hidden;
  height: auto;
}
.PhotFrame li {
  position: relative;
  top: 0;
  left: 0;
  float: left;
  height: auto;
  width: 24%;
  border: 6px solid white;
  box-shadow: 0px 0px 5px #333333;
  margin: 5px;
  text-align: center;
  overflow: hidden;
}
.PhotFrame li:hover i {
  height: 1000px;
  opacity: 0.9;
  padding-top: 25%;
}

.PhotFrame li img {
  overflow: hidden;
  width: 100%;
  height: 180px;
  vertical-align: middle;
}
.PhotFrame .Pmask {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 0%;
  background-color: rgba(0, 0, 0, 0.8);
  opacity: 0;
  transition: all 0.5s ease-out;
  font-size: 22px;
  color: #eb3d00;
  font-weight: 600;
}
</style>