<!-- 首页 -->
<template>
<div class='Home'>
<!-- 轮播图组件 -->
<lunbo></lunbo>


<!-- 服务业组件 -->
<gallery></gallery>
<serviceSector></serviceSector>

<!-- 画廊组件 -->





<!-- 底部组件 -->
<BottomModule/>
</div>
</template>

<script>
import lunbo from "@/components/Home/lunbo";
import BottomModule from "@/components/BottomModule/BottomModule";
import gallery from "@/components/Home/gallery";
import serviceSector from "@/components/Home/serviceSector";

//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
export default {
  name: "Home",
  //import引入的组件需要注入到对象中才能使用
  components: {
    lunbo,
    BottomModule,
    gallery,
    serviceSector
  },
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
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
    
      this.getup();

   
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
.Home {
  width: 100%;
  height: 100%;
  position: relative;
  /* padding-top:20px ; */
  background: url(https://s-14587.f.cdn-static.cn/14587_15762188939502.jpg?imageMogr2/thumbnail/2285x2000/q/75)
    repeat-y center bottom;
  background-attachment: fixed;
}
</style>