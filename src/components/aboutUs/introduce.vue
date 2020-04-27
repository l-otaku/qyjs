<template>

  <div >
    <!-- 公司简介上 -->
    <div class="w" style="height:80px"></div>
    <p style="font-size:23px; text-align:center">{{dataList.title}}</p>
    <div class="w" style="height:45px"></div>
    <div class="Company_Profile w">
      <div class="Company_image">
        <div >
          <img :src="dataList.cover" alt="">
        </div>
      </div>
      <div class="Company_text">
        <p>{{dataList.content}}</p>
        <p>{{dataList.main}}</p>
      </div>
    </div>
    <!-- 公司简介下 -->

    <div class="w" style="height:20px"></div>
    <div class="BCompany_Profile w">
      <p>{{dataList.immense}}</p>

      <ul class="BCompany_image w">
        <li v-for="item in coverimgs" :key="item.id">
          <a href.prevent="" style="width:90%">
            <img  :src="item.picture" alt="">
          </a>
        </li>
        
      </ul>
    </div>
    <!-- 产品简介  -->
    <div class="w" style="height:80px"></div>
    <div class="Fintroduction">
      <div class="w" style="height:105px"></div>
      <ul class="w" >
        <li  v-for="item in character" :key="item.id">
          <div class="Fintroduction_icon" >
            <i :class="item.icon"></i><!-- el-icon-unlock   el-icon-service el-icon-s-marketing-->
          </div>
          <div class="Fintroduction_Text">
            <p style="font-size:18px; margin-top: 8px;" :title="item.title">{{item.title}}</p>
            <p :title="item.content">{{item.content}}</p>
          </div>
         </li>
        
      </ul>
      <div class="w" style="height:70px"></div>

    </div>
    <div class="w" style="height:80px"></div>
    <!-- boss 介绍 -->
    <div class="boss_introduce w">
      <div class="boss_image">
        <img :src="chairman.cover" >
      </div>
      <div class="boos_text">
        <h1>{{chairman.title}}</h1>
        <p>{{chairman.content}}</p>
        <p>{{chairman.contmain}}</p>
        <p>{{chairman.main}}</p>
      </div>
    </div>

    <div class="w" style="height:80px"></div>




  </div>
  
</template>

<script>
export default {
  name: "",
  //import引入的组件需要注入到对象中才能使用
  components: {},
  data() {
    //这里存放数据
    return {
      // dataList:new Array()
      dataList: [],
      coverimgs: [], //产品图片
      character: [], //安全严密 售后服务 产品丰富
      chairman: [] //董事长致辞
    };
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
  mounted() {
    let api = "/Regardingour.json";
    this.axios
      .get(api)
      .then(response => {
        // console.log(response.data.data)
        this.dataList = response.data.data[0];
        this.coverimgs = response.data.data[0].coverimgs;
        this.character = response.data.data[0].character;
        this.chairman = response.data.data[0].chairman[0];
        console.log(this.dataList);
        //  console.log(this.dataList);
      })
      .catch(function(error) {
        console.log(error + "服务器错误");
      });
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

<style scoped>
* {
  color: rgba(119, 119, 119, 1);
  line-height: 1.7;
  text-align: left;
  letter-spacing: 1px;
}
.w {
  width: 1200px;
  margin: 0 auto;
}
/* 公司简介上 */
.Company_Profile {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: auto;
  overflow: hidden;
}
.Company_Profile::before {
  content: "";
  clear: both;
  height: 365px;
}
.Company_Profile::after {
  float: left;
  content: "";
  clear: both;
  height: 365px;
}
.Company_image {
  position: absolute;
  left: 0;
  top: 0;
  width: 600px;
  height: 365px;
  padding: 15px;
}
.Company_image :first-child {
  overflow: hidden;
  width: 580px;
  border-radius: 5px;
}
.Company_image:hover img {
  transform: scale(1.1);
}
.Company_image img {
  /* border-radius: 10px; */
  float: right;
  transition: all 0.5s;
  width: 100%;
  height: 100%;
}
.Company_text {
  position: absolute;
  right: 0;
  top: 0;
  width: 600px;
  height: 365px;
  padding-top: 50px;
}
.Company_text p {
  padding: 15px;
  text-indent: 2rem;
}
/* 公司简介下 */
.BCompany_Profile {
  overflow: hidden;
}
.BCompany_Profile p {
  padding: 0 14px;
  text-indent: 2rem;
}

.BCompany_image {
  position: relative;
  top: 0;
  left: 0;
  padding-top: 20px;
}
.BCompany_image ul {
  display: flex;
  align-items: center;
}
.BCompany_image li {
  display: inline-block;
  width: 33.333333333333336%;
  max-width: 33.333333333333336%;
  padding: 0 8px;
  overflow: hidden;
}
.BCompany_image li:first-child{
    border-radius: 7px;

}
.BCompany_image li:hover img{
  transform: scale(1.1);
  
}
.BCompany_image img {
    border-radius: 7px;
  width: 100%;
  height: 240px;
  transition: all .3s ;
}

/* 产品简介 */
.Fintroduction {
  width: 100%;
  height: 277px;
  background: rgba(248, 249, 249, 1);
}

.Fintroduction ul {
  overflow: hidden;
}
.Fintroduction li {
  float: left;
  width: 33.333333333333336%;
  height: 113px;
  line-height: 113px;
  padding: 0 12px;
}
.Fintroduction_icon {
  float: left;
  text-align: center;
  width: 85px;
  height: auto;
}
.Fintroduction_icon i {
  font-size: 42px;
  transition: all .3s ;
}
.Fintroduction_icon:hover i{
  margin-top: -5px;
}
.Fintroduction_Text :last-child {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.Fintroduction_icon h1 {
  float: left;
  font-size: 18px;
}
/* 董事长介绍 */
.boss_introduce {
  overflow: hidden;
}
.boss_introduce .boss_image {
  float: left;
  width: 41.66667%;
}
.boss_introduce .image img {
  width: 100%;
  height: 100%;
  max-height: 100%;
}
.boss_introduce .boos_text {
  float: left;
  width: 58.33333%;
}
.boss_introduce .boos_text h1 {
  color: #333333;
  font-size: 28px;
  padding-bottom: 20px;
}
.boss_introduce .boos_text p {
  font-size: 14px;
  margin: 8px 0;
  text-indent: 1rem;
}
</style>
