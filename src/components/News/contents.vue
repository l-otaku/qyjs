<template>
  <div >
    <div class="w" style="height:40px;"></div>
    <ul class="content">
      <li v-for="item in arrs" :key="item.id" @click="News_details_page(item.id-1)" :data-index="item.id-1">
        <div class="contentBox">
          <div class="image">
            <img v-lazy="item.cover" alt="">
          </div>
          <div class="contentMain">
            <h3>{{item.title}}</h3>
            <p>{{item.main}}</p>
            <p style="padding-top:15px;">{{item.time}}</p>
          </div>
        </div>
      </li>
    </ul>
  <div class="w" style="height:40px;"></div>
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
      arrs: [] //接口数据
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    News_details_page(id) {
      this.$router.push({ path: "/index/News/NewsDetails/" + id });
    },
    getMianDetaili() {
      //请求主体数据
      let api = "/NewsCenter.json";
      this.$fn(api);
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {
    let ae = JSON.parse(localStorage.getItem("News"));
    if (!ae) {
      this.getMianDetaili();
      console.log("新闻中心 : 本地没有数据 重新获取");
    } else {
      console.log("新闻中心 : 可以使用旧数据");
      if (Date.now() - ae.time > 7200000) {
        this.getMianDetaili();
      } else {
        this.arrs = ae.data;
      }
    }
  },
};
</script>
<style  scoped>
* {
  box-sizing: border-box;
}
.w {
  width: 1200px;
  margin: 0 auto;
}
.content {
  width: 1200px;
  height: auto;
  margin: 0 auto;
  overflow: hidden;
}
.content li {
  padding: 14px;
  /* padding-top: 14px; */
  float: left;
  width: 49%;
  height: auto;
  cursor: pointer;
}
.content li:hover {
  cursor: pointer;
  transform: translateY(-10px);
  transition: 1s all;
}
.content li:hover h3 {
  color: #e69c33;
}

.content .contentBox {
  width: 100%;
  height: 159px;
  float: left;
  border: 1px solid #eeeeee;
  border-radius: 5px;
}
.content .image {
  width: 40%;
  float: left;
  vertical-align: middle;
}

.content img {
  border-radius: 5px;
  width: 100%;
  height: 157px;
  vertical-align: bottom;
}
.contentMain {
  float: left;
  width: 60%;
  padding: 0 17px;
}
.contentMain h3 {
  margin-top: 10px;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.contentMain p {
  padding-top: 10px;
}
.contentMain p:nth-child(2) {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>