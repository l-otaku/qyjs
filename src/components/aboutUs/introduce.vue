<template>

  <div >

    <div class="w" style="height:80px"></div>
    <p style="font-size:23px; text-align:center">{{dataList.title}}</p>
    <div class="w" style="height:45px"></div>
    <div class="CompanyProfile w">
      <div class="CompanyImage">
        <img :src="dataList.cover" alt="">
      </div>
      <div class="CompanyText">
        <p>{{dataList.content}}</p>
        <p>{{dataList.main}}</p>
      </div>
    </div>

    <div class="w" style="height:20px"></div>
    <div class="BCompanyProfile w">
      <p>{{dataList.immense}}</p>

      <ul class="BCompanyImage w">
        <li v-for="item in coverimgs" :key="item.id"><img  :src="item.picture" alt="">
        </li>
        
      </ul>
    </div>

    <div class="w" style="height:80px"></div>
    <div class="Fintroduction">
      <div class="w" style="height:105px"></div>
      <ul class="w" >
        <li  v-for="item in character" :key="item.id">
          <div class="FintroductionIcon" >
            <i class="el-icon-unlock"></i>
          </div>
          <div class="FintroductionText">
            <p style="font-size:18px; margin-top: 8px;">{{item.title}}</p>
            <p>{{item.content}}</p>
          </div>
         </li>
        
      </ul>
      <div class="w" style="height:70px"></div>

    </div>
    <div class="w" style="height:80px"></div>

    <div class="bossText w">
      <div class="bossimage">
        <img :src="chairman.cover" >
      </div>
      <div class="text">
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
      dataList:[],
      coverimgs:[],//
      character:[],//
      chairman:[]//董事长致辞
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
    let api = '/Regardingour.json';
    this.axios
      .get(api)
      .then(response => {
        // console.log(response.data.data)
         this.dataList = response.data.data[0]
         this.coverimgs = response.data.data[0].coverimgs
         this.character = response.data.data[0].character
         this.chairman =  response.data.data[0].chairman[0]
         console.log(this.chairman.cover)
        //  console.log(this.dataList);
      })
      .catch(function(error) {
           console.log(error+'服务器错误');
      });
  },
  beforeCreate() {}, //生命周期 - 创建之前
  beforeMount() {}, //生命周期 - 挂载之前
  beforeUpdate() {}, //生命周期 - 更新之前
  updated() {}, //生命周期 - 更新之后
  beforeDestroy() {}, //生命周期 - 销毁之前
  destroyed() {}, //生命周期 - 销毁完成
  activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
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
.CompanyProfile {
  position: relative;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  height: auto;

  overflow: hidden;
}
.CompanyProfile::before {
  content: "";
  clear: both;
  height: 365px;
}
.CompanyProfile::after {
  content: "";
  clear: both;
  float: left;
  height: 365px;
}
.CompanyImage {
  position: absolute;
  left: 0;
  top: 0;
  width: 600px;
  height: 365px;
  padding: 15px;
}
.CompanyImage img {
  width: 100%;
  height: 100%;
  float: right;
}
.CompanyText {
  position: absolute;
  right: 0;
  top: 0;
  width: 600px;
  height: 365px;
  padding-top: 50px;
}
.CompanyText p {
  padding: 15px;
  
}
/* 公司简介下 */
.BCompanyProfile {
  overflow: hidden;
}
.BCompanyProfile p {
  padding: 0 14px;
}

.BCompanyImage {
  position: relative;
  top: 0;
  left: 0;
  padding-top: 20px;
}
.BCompanyImage ul {
}
.BCompanyImage li {
  float: left;
  width: 33.333333333333336%;
  padding: 0 12px;
}
.BCompanyImage img {
  width: 100%;
  height: 240px;
}
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
.FintroductionIcon {
  float: left;
  text-align: center;
  width: 85px;
  height: auto;
}
.FintroductionIcon i {
  font-size:42px;
}
.FintroductionText {
overflow: hidden;
text-overflow: ellipsis;
white-space: nowrap;
}
.FintroductionIcon h1 {
  float: left;
  font-size: 18px;
}

.bossText {
  overflow: hidden;
}
.bossText  .bossimage {
  float: left;
  width: 41.66667%;
}
.bossText .image img {
  width: 100%;
  height: 100%;
  max-height: 100%;
}
.bossText  .text {
  float: left;
  width: 58.33333%;
}
.bossText  .text h1 {
  color: #333333;
  font-size: 28px;
  padding-bottom: 20px;
}
.bossText .text p {
  font-size: 14px;
  margin: 8px 0;
}
</style>
