<!--  -->
<template>
<div class='character'>
    <div class="characters">
    <div class="character_logo">
        <div class="character_logoimg">
            <img src="../../assets/logo.png" alt="">
        </div>
      
    </div>
    <div class="character_txt">
        <ul>
            <li>广东群英建设有限公司</li>
            <li><span>联系电话:</span>+861382952632</li>
            <li><span>座机电话:</span>0754-89376777</li>
            <li><span>电子邮箱:</span>qy@gdjs.com</li>
        </ul>
    </div>
    </div>
    <div class="character_address">
        <span>
            <b>地址:</b> 汕头市潮南区峡山街道南里居委广祥路群英上品花园内</span><br>
        <span>&emsp;&emsp;&emsp;&emsp; Qunying shangpin garden, guangxiang road, nanliju committee, xiashan street, chaonan district, shantou city</span>
    </div>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';

export default {
  name: '',
//import引入的组件需要注入到对象中才能使用
components: {},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念
computed: {},
//监控data中的数据变化
watch: {},
//方法集合
methods: {

},
//生命周期 - 创建完成（可以访问当前this实例）
created() {

},
//生命周期 - 挂载完成（可以访问DOM元素）
mounted() {

},
beforeCreate() {}, //生命周期 - 创建之前
beforeMount() {}, //生命周期 - 挂载之前
beforeUpdate() {}, //生命周期 - 更新之前
updated() {}, //生命周期 - 更新之后
beforeDestroy() {}, //生命周期 - 销毁之前
destroyed() {}, //生命周期 - 销毁完成
activated() {}, //如果页面有keep-alive缓存功能，这个函数会触发
}
</script>
<style  scoped>
.character{
    width: 1200px;
    margin: 0 auto;
    position: relative;
    height: 100%;
    padding-top:50px;
}
.characters{
    position: relative;
    height: 100%;
    display: flex;
}
.character_logo{
    height: 350px;
    float: left;
    flex: 1;
}
.character_logoimg{
    width: 200px;
    height: 200px;
    position: relative;
    left: 25%;
    top: 50%;
    transform: translate(-25%,-50%);
}
.character_logoimg img{
     width: 100%;
     height: 100%;
}
.character_txt{
    height: 350px;
    float: left;
    flex: 1;
    flex-flow: column-reverse;
}
.character_txt ul li{
   height: 50px;
    margin-top: 30px;
    text-align: center;
    line-height: 50px;
    background: #a4ab9e;
    box-shadow: 0 0 7px #f5f5f5;
}
.character_address{
    width: 800px;
    height: 100px;
    top: 30px;
    position: relative;
}
.character_address span:nth-child(1){
    font-size: 22px;
}
</style>