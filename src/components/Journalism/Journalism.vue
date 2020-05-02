<template>
  <div>
    <div class="w" style="height:40px"></div>
    <div class="main w" >
      <div class="mainLeft">
        <!-- 面包屑 -->
        <nav class="bread mw">
          <ul>
            <li>
              <a href="#/index/Home">首页</a>
              <i class="el-icon-arrow-right"></i>
            </li>
            <li>
              <a href="#/index/News">新闻中心</a>
              <i class="el-icon-arrow-right"></i>
            </li>
            <li>
              <span>详情</span>
            </li>
          </ul>
        </nav>
        <div class="mw" style="height:30px"></div>
          <!-- 主体 -->
        <h1 class="mainTitle">
          {{mainList.title}}
        </h1>
        <div class="mw" style="height:20px"></div>
        <div>
          <span  class="mainDate">{{mainList.date}}</span>
        </div>
        <div class="mw" style="height:30px"></div>
        
        <div class="mainText">
          <p v-for="item in mainList.text" :key="item.id"> 
             {{item.titleText}} 
          </p>
          <p>&nbsp;</p>
          <p>&nbsp;</p>
        </div>
        <div class="mainImg">
          <div>
            <img v-lazy="mainList.image" alt="">
          </div>
        </div>
        <div class="mw" style="height:60px"></div>
        <!-- 底部前进后退按钮 -->
         <div class="mainBottom" ref="btn">
          <a @click="BtnUp()" ref="a">
            <p>上一篇&nbsp;&nbsp;:&nbsp;&nbsp; 
              <span>{{upText}}</span>
              </p>
          </a>
          <a @click="Btndown()" ref="a1">
            <p>
              <span>
                {{downText}}
              &nbsp;&nbsp; 
              </span>:&nbsp;&nbsp;下一篇
            </p>
          </a>
        </div>
      </div>
      <!-- 主体左边结束 -->

      <!-- 主体右边开始 -->
      <!-- <div class="mainRight">
        <h2>最新新闻</h2>
        <ul class="rightMain">
          <li v-for="item in NewJournalism" :key="item.id">
            <a href="">
              <div class="right_Main_img">
                <img v-lazy="item.cover" alt="">
              </div>
              <div class="right_Main_Text">
                <h3 style="padding-top:3px;color:black">{{item.title}}</h3>
                <span style="padding-top:3px;">{{item.main}}</span>
                <span  style="padding-top:20px;">{{item.time}}</span>
              </div>
            </a>
          </li>
        </ul>

      </div> -->

      <!-- 主体右边结束 -->
    </div>






  </div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import headPicture from "@/components/headPicture/headPicture";
import BottomModule from "@/components/BottomModule/BottomModule";

export default {
  //import引入的组件需要注入到对象中才能使用
  components: {
    BottomModule,
    headPicture
  },
  data() {
    //这里存放数据
    return {
      id: "", //页面 ID
      bottomNavId: "",
      dataList: [], //列表数据
      mainList: [], //主体数据
      textList: [], //主体文本
      NewJournalism: [], //右边新闻数据
      upText: "", //上一篇
      downText: "", //下一篇
      up: 0, //底部导航栏id
      down: 0, //顶部导航栏
      flag: true
    };
  },

  watch: {},
  //方法集合
  methods: {
    //上一篇  实现逻辑 更改 id 重新赋值 实现刷新数据
    BtnUp() {
      //flag 判断 防止 用户多次点击 出现图片渲染bug
      if (this.flag) {
        this.flag = false;
        this.id = this.id <= 0 ? (this.id = 4) : this.id; //判断是否 是第一篇
        this.id -= 1;
        this.mainList = this.dataList[this.id];
        this.upText = this.NewJournalism[this.id].title;
        this.upDownFun();
        
      }
    },
    //下一篇  实现逻辑 更改 id 重新赋值 实现刷新数据
    Btndown() {
      if (this.flag) {
        this.flag = false;
        this.id = this.id >= 3 ? (this.id = -1) : this.id; //判断是否 最后一篇
        this.id += 1;
        this.mainList = this.dataList[this.id]; //刷新页面数据
        this.downText = this.NewJournalism[this.id].title; //刷新 底部导航栏数据
        this.upDownFun();//调用刷新底部数据 函数
      }
    },

    upDownFun() {
      //更改 底部 导航栏数据
      if (this.id == 0) {//判断 当前id 更改对应 上一篇 下一篇 调用函数刷新数据
        (this.up = 3), (this.down = 1);
      } else if (this.id == 1) {
        (this.up = 0), (this.down = 2);
      } else if (this.id == 2) {
        (this.up = 1), (this.down = 3);
      } else if (this.id == 3) {
        (this.up = 2), (this.down = 0);
      }

      this.upText = this.NewJournalism[this.up].title;
      this.downText = this.NewJournalism[this.down].title;
      this.TakeInverse() //数据刷新 完更改flag值 防止暴力操作
    },

    TakeInverse(){
      this.flag = true
    },


    getMianDetaili(id) {
      //请求主体数据
      let api = "/News_detail.json";
      this.$fn(api, id);
    }
  },

  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    this.id = parseInt(this.$route.params.id);//当前页面id

    let ae = JSON.parse(localStorage.getItem("xw"));

    if (!ae) {
      this.getMianDetaili(this.id);

      console.log("新闻详情页 : 本地没有数据 重新获取");
    } else {
      console.log("新闻详情页 : 可以使用旧数据");

      if (Date.now() - ae.time > 432 * 100000) {
        this.getMianDetaili(this.id);
      } else {
        this.dataList = ae.data; //页面数据
        this.mainList = ae.data[this.id]; //主体数据
      }
    }

    let datas = JSON.parse(localStorage.getItem("News")); //底下 上下篇

    this.NewJournalism = datas.data;

    this.upDownFun(); //调用刷新 上下篇函数
    
  },

};
</script>

<style scoped>
.w {
  width: 1200px;
  margin: 0 auto;
}
.mw {
  width: 100%;
}
.main {
  position: relative;
  top: 0;
  left: 0;
  overflow: hidden;
}
.mainLeft {
  margin: 0 auto;
  width: 70%;
  margin-bottom: 80px;
}

/* 面包屑 */

.bread {
  color: #606297;
}
/* .bread ul {} */
.bread li {
  display: inline-block;
  padding: 10px 8px;
}
/* .bread li a {} */
.bread a {
  padding: 10px 0;
}
.bread span {
  cursor: not-allowed;
  color: black;
}
.bread a:hover,
.bread span:hover {
  color: #40b8ff;
}

.bread li i {
  padding: 0 0 0 5px;
}
/* 主体文字 */
.mainText {
}
.mainDate {
  color: #b2aab2;
}
.mainText p {
  width: 90%;
  text-indent: 1.5rem;
  margin: 15px 0;
  line-height: 23px;
}
/* 主体图片 */

.mainImg {
  width: 90%;
}
.mainImg img {
  width: 100%;
}
/* 主体底部 */

.mainBottom {
  display: flex;
  justify-content: space-between;
  border-top: 1px solid #b2aab2;
  padding: 10px;
}
.mainBottom a :hover {
  color: #e3921f;
}
.mainBottom a {
  margin: 15px 20px;
  cursor: pointer;
}
.mainBottom p {
  display: inline-block;
}
/* 主体右边 */
.mainRight {
  float: right;
  width: 30%;
  height: 600px;
  padding-top: 72px;
}

.mainRight h2 {
  padding: 8px 0;
  font-weight: 400;
}
.rightMain {
  float: right;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 8px 0;
}
.rightMain :hover img {
  transform: scale(1.1);
}
.right_Main_img {
  overflow: hidden;
  width: 40%;
  height: auto;
  border-radius: 5px;
}
.rightMain li {
  position: relative;
  margin-top: 15px;
}
.rightMain li img {
  float: left;
  width: 100%;
  transition: all 0.5s;
}
.right_Main_Text {
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  flex-direction: column;
  width: 60%;
  color: #606297;
}

.right_Main_Text h3,
.right_Main_Text span {
  float: left;
  padding-left: 7px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>