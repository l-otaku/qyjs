<!--  -->
<template>
  <div class="ProjectsMap">
    <div class="ProjectsMap_n">
      <ul class="setshow">
        <li class="ProjectsMap_show act">1</li>
        <li class="ProjectsMap_show">2</li>
        <li class="ProjectsMap_show">3</li>
      </ul>
      <div class="ProjectsMap_buttons">
        <span class="el-icon-d-arrow-left" @click="toMap"></span>
        <span class="el-icon-d-arrow-right" @click="goMap"></span>
      </div>
    </div>
  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import $ from "@/js/index";
export default {
  name: "",
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      index: 0
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    toMap() {
      //上一页
      this.index = this.index-- > 0 ? this.index : 2;
      this.goto(this.index)
    },
    goMap() {
      //下一页
      this.index = this.index++ < 2 ? this.index : 0;
      this.goto(this.index)
    },
    goto(index){
     let Ulli = $(".setshow").getElementsByTagName("li");
      for (let i = 0; i < Ulli.length; i++) {
        Ulli[i].className = "ProjectsMap_show";
      }
      Ulli[index].className = "ProjectsMap_show act";
    }
    
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
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
.ProjectsMap {
  width: 1200px;
  height: 950px;
  margin: 0 auto;
  position: relative;
  padding-top: 50px;
}
.ProjectsMap_n {
  width: 1200px;
  height: 100%;
  position: relative;
}
.ProjectsMap_show {
  width: 1200px;
  height: 800px;
  position: absolute;
  background: salmon;
}
.setshow{
    transition: 1s all;
}
.ProjectsMap_buttons {
  width: 1200px;
  height: 70px;
  position: relative;
  top: 800px;
}
.ProjectsMap_buttons span:nth-child(1),
.ProjectsMap_buttons span:nth-child(2) {
  width: 100px;
  height: 70px;
  position: relative;
  line-height: 100px;
  font-size: 54px;
  text-align: center;
  cursor: pointer;
}
.ProjectsMap_buttons span:nth-child(1):hover,
.ProjectsMap_buttons span:nth-child(2):hover {
  color: brown;
}
.ProjectsMap_buttons span:nth-child(1) {
  float: left;
}
.ProjectsMap_buttons span:nth-child(2) {
  float: right;
}
.act {
  z-index: 99;
}
</style>