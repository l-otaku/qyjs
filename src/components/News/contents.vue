<!--  -->
<template>
  <div class="content">
    <div class="content_left">
      <div class="content_left_one" v-for="item in oneArticle" :key="item.id" @click="News_details_page(item.id)">
        <div class="content_img">
          <img  v-lazy="item.cover" alt />
        </div>
        <div class="content_txt">
          <h4>{{item.title}}</h4>
          <div>{{item.mian}}</div>
          <p>{{item.time}}</p>
        </div>
      </div>
    </div>
    <div class="content_right">
      <div class="content_left_one" v-for="item in towArticle" :key="item.id" @click="News_details_page(item.id)">
        <div class="content_img">
          <img  v-lazy="item.cover" alt />
        </div>
        <div class="content_txt">
          <h4>{{item.title}}</h4>
          <div>{{item.mian}}</div>
          <p>{{item.time}}</p>
        </div>
      </div>
    </div>
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
      arrs: [], //接口数据
      oneArticle: [], //截取数据
      towArticle: [] //截取数据
    };
  },
  //监听属性 类似于data概念
  computed: {
  
  },
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    setnews() {
      let api = "/NewsCenter.json";
      this.axios
        .get(api)
        .then(response => {
          if (response.status === 200) {
            this.arrs = response.data.data;
            this.oneArticle = this.arrs.slice(0, 2);
            this.towArticle = this.arrs.slice(2, 4);
          }
        })
        .catch(function(error) {
          //  console.log(error+'服务器错误');
        });
    },
    News_details_page(id){
      
      this.$store.state.Journalism_id = id
      

       this.$router.push({ path: "/index/News/NewsDetails"}); 

      // console.log(this.$store.state.Journalism_id);
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.setnews() //请求数据
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
.content {
  width: 1200px;
  height: 538px;
  margin: 0 auto;
  padding-top: 90px;
  position: relative;
  display: flex;
}
.content_left,
.content_right {
  height: 400px;
  flex: 5;
  padding-right: 10px;
  padding-left: 10px;
}
.content_left_one {
  height: 167px;
  margin-top: 20px;
  position: relative;
  border: 1px solid rgb(238, 238, 238);
  display: flex;
  flex-direction: row;
}
.content_left_one:hover {
  cursor: pointer;
  transform: translateY(-10px);
  transition: 1s all;
}
.content_img {
  flex: 4;
  height: 160px;
}
.content_img img {
  width: 100%;
  height: 100%;
}
.content_txt {
  flex: 6;
  height: 160px;
  padding-left: 15px;
  padding-top: 10px;
}
.content_txt h4 {
  width: 300px;
  height: 36px;
  line-height: 36px;
  overflow: hidden; /*隐藏文字*/
  text-overflow: ellipsis; /*显示 ...*/
  white-space: nowrap; /*不换行*/
  color: #333;
  font-size: 16px;
}
.content_txt div {
  width: 300px;
  height: 74px;
  overflow: hidden;
  color: #999;
  line-height: 23px;
  text-overflow: ellipsis;
  display: -webkit-box; /*必须结合的属性，将对象作为弹性伸缩盒子模型显示*/
  -webkit-line-clamp: 3; /*控制文本的行数*/
  -webkit-box-orient: vertical; /*必须结合的属性，设置或检索伸缩盒对象的子元素的排列方式*/
}
.content_txt p {
  height: 18px;
  color: #999;
  position: relative;
  top: 10px;
  font-size: 12px;
}
</style>