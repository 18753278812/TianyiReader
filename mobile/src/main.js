import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
Vue.use(VueRouter)
Vue.use(VueResource)
import Swiper from './swiper/swiper-3.4.2.min.js'
import App from './App.vue'
//样式
require('./swiper/swiper-3.4.2.min.css');
require('./styles/main.scss');
require('./styles/animate.css');
require('./styles/font/iconfont.css');
//路由
import Main from './router/main.vue'
import MyBook from './router/mybook.vue'
import My from './router/my.vue'
import Find from './router/find.vue'
import Shop from './router/shop.vue'
import BookContent from './router/bookcontent.vue'
import Selection from './router/selection.vue'
import Detail from './router/detail.vue'
import Sort from './router/sort.vue'
import List from './router/list.vue'
import Sale from './router/sale.vue'
import Login from './router/login.vue'
import MoreList from './router/morelist.vue'
const router = new VueRouter({
	routes: [{
		path: '/main',
		name: 'main',
		component: Main,
		'children': [{
			path: 'mybook',
			name: 'main.mybook',
			component: MyBook
		},{
			path: 'shop',
			name: 'main.shop',
			component: Shop,
			'children': [{
				path: 'selection',
				name: 'main.shop.selection',
				component: Selection
			},{
				path: 'sort',
				name: 'main.shop.sort',
				component: Sort
			},{
				path: 'hot',
				name: 'main.shop.hot',
				component: List
			},{
				path: 'favor',
				name: 'main.shop.favor',
				component: Sale
			},{
				path: '/main/shop',
				redirect: '/main/shop/selection'
			}]
		},{
			path: 'find',
			name: 'main.find',
			component: Find
		},{
			path: 'my',
			name: 'main.my',
			component: My
		}]
	},{
		path: '/bookcontent/:aid',
		name: 'bookcontent',
		component: BookContent
	},{
		path: '/detail/:aid',
		name: 'detail',
		component: Detail
	},{
		path: '/login',
		name: 'login',
		component: Login
	},{
		path: '/morelist',
		name: 'morelist',
		component: MoreList
	},{
		path: "/*",
		redirect: '/main/mybook'
	}]
})
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
