<!--  -->
<template>
<div>
  <!-- 头部组件 -->
  <appbar></appbar>
  <!-- 中间组件 -->
  <Journalism></Journalism>
  <!-- 底部组件 -->
  <BottomModule></BottomModule>
</div>
</template>

<script>
//这里可以导入其他文件（比如：组件，工具js，第三方插件js，json文件，图片文件等等）
//例如：import 《组件名称》 from '《组件路径》';
import BottomModule from '@/components/BottomModule/BottomModule'
import Journalism from '@/components/Journalism/Journalism'
import appbar from "@/components/index/appbar"

export default {

//import引入的组件需要注入到对象中才能使用
components: {
  BottomModule,
  Journalism,
  appbar,
},
data() {
//这里存放数据
return {

};
},
//监听属性 类似于data概念

methods: {
  
},
//生命周期 - 创建完成（可以访问当前this实例）
created() {
  
},

}
</script>
<style  scoped>

</style>