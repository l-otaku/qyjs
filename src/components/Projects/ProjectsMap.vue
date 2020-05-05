<!--  -->
<template>
  <div class="ProjectsMap">
    <div class="ProjectsMap_n">
      <ul class="setshow">
        <li class="ProjectsMap_show act">
          <div class="project_img" v-for="item in oneArticle" :key="item.id">
            <img v-lazy="item.cover" alt />
            <div class="project_text">
              <p>{{item.title}}</p>
              <p>
                <span>项目地点:</span>
                {{item.ProjectLocation}}
              </p>
              <p>
                <span>项目内容:</span>
                {{item.description}}
              </p>
            </div>
          </div>
        </li>
        <li class="ProjectsMap_show">
          <div class="project_img" v-for="item in towArticle" :key="item.id">
            <img  v-lazy="item.cover" alt />
            <div class="project_text">
              <p>{{item.title}}</p>
              <p>
                <span>项目地点:</span>
                {{item.ProjectLocation}}
              </p>
              <p>
                <span>项目内容:</span>
                {{item.description}}
              </p>
            </div>
          </div>
        </li>
        <li class="ProjectsMap_show">
          <div class="project_img" v-for="item in threeArticle" :key="item.id">
            <img  v-lazy="item.cover" alt />
            <div class="project_text">
              <p>{{item.title}}</p>
              <p>
                <span>项目地点:</span>
                {{item.ProjectLocation}}
              </p>
              <p>
                <span>项目内容:</span>
                {{item.description}}
              </p>
            </div>
          </div>
        </li>
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
      index: 0,
      arr: [], //请求的数据
      oneArticle: [], //截取数据的两条
      towArticle: [], //截取数据的两条
      threeArticle: [] //截取数据的两条
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
      this.goto(this.index);
    },
    goMap() {
      //下一页
      this.index = this.index++ < 2 ? this.index : 0;
      this.goto(this.index);
    },
    goto(index) {
      let Ulli = $(".setshow").getElementsByTagName("li");
      for (let i = 0; i < Ulli.length; i++) {
        Ulli[i].className = "ProjectsMap_show";
      }
      Ulli[index].className = "ProjectsMap_show act";
    },
    getup(){  //请求数据
     let api = "/Projectsimgs.json";
     this.$fn(api);
    },
    setprojiects() {
      let datwo = JSON.parse(localStorage.getItem("wetwo"));
       if(!datwo){
        //  不存在数据就发送请求
       console.log('没请求')
         this.getup();
     }else{
   //  有旧的数据 定义过期时间为2小时  过期再次请求
        if (Date.now() - datwo.time > 7200000) {
           this.getup();
        } else {
          // 可以使用旧的数据
          console.log("可以使用旧数据");
          this.arr = datwo.data;       
          this.oneArticle = this.arr.slice(0, 2);
          this.towArticle = this.arr.slice(2, 4);
          this.threeArticle = this.arr.slice(4, 6);
        }
     }

    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.setprojiects()//请求数据
  },
}
</script>
<style  scoped>
.ProjectsMap {
  width: 1200px;
  height: 950px;
  margin: 0 auto;
  position: relative;
  padding-top: 50px;
  background: #ffffff6b;
}
.ProjectsMap_n {
  width: 1200px;
  height: 100%;
  position: relative;
}
.ProjectsMap_show {
  width: 1200px;
  height: 840px;
  position: absolute;
  display: none;
}
.project_img {
  width: 916px;
  height: 390px;
  position: relative;
  left: 50%;
  top: 5%;
  overflow: hidden;
  transition: 1s all;
  transform: translate(-50%, -5%);
  padding: 10px 10px 10px 10px;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 3px;
  box-shadow: 6px 4px 19px rgba(0, 0, 0, 0.9);
}
.project_img img {
  width: 100%;
  height: 100%;
  object-fit: fill;
  transition: 1s all;
}
.project_img img:hover {
  transform: scale(1.1);
}
.project_text {
  width: 195px;
  height: 195px;
  position: absolute;
  top: 48%;
  left: 77.6%;
  background: #0c0c0c78;
  color: #d6d5d4;
}
.project_text p:nth-child(1) {
  width: 195px;
  height: 65px;
  line-height: 65px;
  font-size: 22px;
  text-align: center;
  overflow: hidden; /*隐藏文字*/
  text-overflow: ellipsis; /*显示 ...*/
  white-space: nowrap; /*不换行*/
}
.project_text p:nth-child(2) {
  width: 195px;
  height: 27px;
  line-height: 27px;
  font-size: 14px;
  padding: 0 0 0 5px;
  overflow: hidden; /*隐藏文字*/
  text-overflow: ellipsis; /*显示 ...*/
  white-space: nowrap; /*不换行*/
}
.project_text p:nth-child(3) {
  width: 195px;
  height: 27px;
  line-height: 27px;
  font-size: 14px;
  padding: 0 0 0 5px;
  overflow: hidden; /*隐藏文字*/
  text-overflow: ellipsis; /*显示 ...*/
  white-space: nowrap; /*不换行*/
}
.setshow {
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
  color: #e0dddd;
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
  display: block;
}
</style>