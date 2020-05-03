import Vue from 'vue'
import Vuex from 'vuex'

//挂载Vuex
Vue.use(Vuex)

//创建VueX对象
const store =  new Vuex.Store({
    state:{
        //存放的键值对就是所要管理的状态
        gallery:'' ,   //工业界数据
        Industry:'' ,  //画廊数据
        serviceSector:''    //服务数据
    },
    mutations:{
      //es6语法，等同edit:funcion(){...}
      gallery(state,gallerys){state.gallery = gallerys} ,  //工业界数据
      Industry(state,Industrys){state.Industry = Industrys}  , //画廊数据
      serviceSector(state,serviceSectors){state.serviceSector = serviceSectors}   //服务数据
  }
})

export default store