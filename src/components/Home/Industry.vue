<!-- 工业界组件 -->
<template>
  <div class="industs">
    <div class="industs_content">
      <!-- 标题 -->
      <div class="industs_content_title">
        <p>欢迎来到工业界</p>
        <p>
          <em>Industrial Revolution Business</em>
        </p>
      </div>
      <!-- 图内容-->
      <div class="industs_Picture_content">
        <!-- 左边图片 -->
        <div class="industs_Picture"></div>
        <!-- 右边文字 -->
        <div class="industs_content_right">
          <div class="First_content">本文转载于 Impact Studio 建筑类型学设计方法始于欧洲启蒙运动时期，自“二战”后又重新被建筑界所重视，其与历史、文化、场所有着紧密联系。类型学的设计往往涉及类型抽象和场所化两个阶段，在设计中可以辅助我们发掘场所特性、总结建筑类型与元素，从而获取进一步</div>
          
          <div class="Second_content">
            <div class="Second_content_ico">
              <i class="el-icon-setting"></i>
            </div>
            <div class="Second_content_p">
              <p>瑞士竞赛平面合集</p>
            </div>
            <div class="Second_content_p2">
              <p>本文转载于 Impact Studio 建筑类型学设计方法始于欧洲启蒙运动时期，自“二战”后又重新被建筑界所重视，其与历史、文化、场所有着紧密联系。类型学的设计往往涉及类型抽象和场所化两个阶段，在设计中可以辅助我们发掘场所特性、总结建筑类型与元素，从而获取进一步</p>
            </div>
          </div>

          <div class="Second_content">
            <div class="Second_content_ico">
              <i class="el-icon-headset"></i>
            </div>
            <div class="Second_content_p">
              <p>瑞士竞赛平面合集</p>
            </div>
            <div class="Second_content_p2">
              <p>本文转载于 Impact Studio 建筑类型学设计方法始于欧洲启蒙运动时期，自“二战”后又重新被建筑界所重视，其与历史、文化、场所有着紧密联系。类型学的设计往往涉及类型抽象和场所化两个阶段，在设计中可以辅助我们发掘场所特性、总结建筑类型与元素，从而获取进一步</p>
            </div>
          </div>

          <div class="Second_content">
            <div class="Second_content_ico">
              <i class="el-icon-office-building"></i>
            </div>
            <div class="Second_content_p">
              <p>瑞士竞赛平面合集</p>
            </div>
            <div class="Second_content_p2">
              <p>本文转载于 Impact Studio 建筑类型学设计方法始于欧洲启蒙运动时期，自“二战”后又重新被建筑界所重视，其与历史、文化、场所有着紧密联系。类型学的设计往往涉及类型抽象和场所化两个阶段，在设计中可以辅助我们发掘场所特性、总结建筑类型与元素，从而获取进一步</p>
            </div>
          </div>
      
        </div>
      </div>
    </div>
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
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
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
.industs {
  width: 100%;
  height: 100%;
  position: relative;
  background-color:#f1f1f1;
}
.industs_content {
  width: 1200px;
  padding-top: 50px;
  height: 835px;
  margin: 0 auto;
  position: relative;
}
.industs_content_title {
  width: 1200px;
  height: 85px;
  position: relative;
  margin-bottom: 25px;
}
.industs_content_title p:nth-child(1) {
  width: 1200px;
  font-size: 40px;
  font-weight: 700;
  color: #232323;
  position: relative;
  text-align: center;
}
.industs_content_title p:nth-child(2) {
  width: 1200px;
  color: #a6a6a6;
  letter-spacing: 2px;
  font-size: 15px;
  position: relative;
  text-align: center;
}
.industs_Picture_content {
  width: 1200px;
  height: 570px;
  position: relative;
}
.industs_Picture {
  width: 540px;
  height: 540px;
  float: left;
  position: relative;
  background: rosybrown;
}
.industs_content_right {
  width: 613px;
  height: 514px;
  float: right;
  position: relative;
  left: -84px;
  top: 38px;
  border: 5px solid #f85a40;
  padding-left: 70px;
  padding-top: 35px;
}
.First_content {
  width: 500px;
  height: 82px;
  margin-bottom: 25px;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  line-height: 27px;
  font-size: 15px;
  color: #7b7b7b;
  position: relative;
}
.Second_content {
  width: 515px;
  height: 91px;
  margin-bottom: 29px;
  position: relative;
}
.Second_content_ico {
  width: 55px;
  height: 55px;
  position: relative;
  float: left;
  margin-right: 10px;
  background: #f85a40;
  top: 5px;
}
.Second_content_ico i {
    font-size: 22px;
    width: 55px;
    height: 55px;
    line-height: 55px;
    background: #f85a40;
    color: #fff;
    text-align: center;
}
.Second_content_p p {
  width: 445px;
  font-size: 20px;
  font-weight: 700;
  color: #333;
  float: left;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}
.Second_content_p2 p {
  width: 445px;
  font-size: 15px;
  letter-spacing: 0.5px;
  line-height: 25px;
  color: #7b7b7b;
  float: left;
  margin-top: 10px;
  overflow: hidden;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  display: -webkit-box;
}
</style>