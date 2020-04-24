import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import AppBar from '@/views/AppBar.vue'     //导航栏
import Home from '@/views/Home.vue'       //首页
import AboutUs from '@/views/AboutUs.vue'    //关于我们
import Projects from '@/views/Projects.vue'    //项目展示
import News from '@/views/News.vue'    //新闻中心
import ContactUs from '@/views/ContactUs.vue'    //联系我们

Vue.use(Router)

const routes = [
	{ path: "/", component: AppBar ,redirect: '/AppBar/Home'},
    { path: '/AppBar', component: AppBar ,redirect: '/AppBar/Home' ,
			children:[
				{path: 'Home', component: Home },
				{path: 'AboutUs', component: AboutUs},
				{path: 'Projects', component: Projects},
				{path: 'News', component: News},
				{path: 'ContactUs', component: ContactUs},
			],
	},
    // { path: "/Main", component: Main },
    
  ];

export default new Router({
  routes
})
