<template>
	<div id="shopmain">
		<ul class="recommend">
			<li class="head">黄金推荐</li>
			<li v-for="(item,index) in recommend" v-if="index < 6"><router-link :to='{name: "detail", params: {aid: item.id}}'>
				<img :src="item.img" />
				<span>{{item.title}}</span>
			</router-link></li>
			<li class="foot"><router-link :to='{name: "morelist",params: {list: list,type: "recommend",title: "黄金推荐"}}'>更多推荐在这里<i class="iconfont icon-fanhui"></i></router-link></li>
		</ul>
		<ul class="news">
			<li class="head">新书精选</li>
			<li v-for="(item,index) in news" v-if="index < 6"><router-link :to='{name: "detail", params: {aid: item.id}}'>
				<img :src="item.img" />
				<span>{{item.title}}</span>
			</router-link></li>
			<li class="foot"><router-link :to='{name: "morelist",params: {list: list,type: "news",title: "新书精选"}}'>更多推荐在这里<i class="iconfont icon-fanhui"></i></router-link></li>
		</ul>
		<div class="others">
			<ul v-for="item in others" :class="item.tap">
				<li>{{item.title}}</li>
				<li v-for="book in item.list"><router-link :to="{name: 'detail',params: {aid: book.id}}">
						<img :src="book.img" />
						<div class="bookDesc">
							<span class="title">
								{{book.title}}
							</span>
							<span class="autor">
								<i class="iconfont icon-wode1"></i>
								{{book.autor}}
							</span>
							<span class="price">
								{{book.price}}
							</span>
							<span class="desc">
								{{book.desc}}
							</span>
						</div>
				</router-link></li>
				<li class="foot"><router-link :to="{name: 'morelist',params: {list: list,type: item.tap,title: item.title}}">更多推荐在这里<i class="iconfont icon-fanhui"></i></router-link></li>
			</ul>
		</div>
		
	</div>
</template>

<script>
	export default {
		name: "shopmain",
		data(){
			return {
				recommend: [],
				news: [],
				others: [],
				list: 'boy'
			}
		},
		created(){

		}
	}
</script>