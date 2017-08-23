<template>
	<div id="sale">
		<v-swiper></v-swiper>
		<ul class="sale">
			<li class="title"><span>秒杀专区</span><span>距结束<span>&nbsp;0:0:0</span></span></li>
			<li class="list" v-for="item in data">
				<img :src="item.img" />
				<div class="bookDesc">
					<span class="title">
						{{item.title}}
					</span>
					<span class="autor">
						<i class="iconfont icon-wode1"></i>
						{{item.autor}}
					</span>
					<span class="price">
						{{item.price}}
					</span>
					<span class="desc">
						{{item.desc}}
					</span>
				</div>
			</li>
		</ul>
		<ul class="free">
			<li class="title"><span>限时免费</span><span>距结束<span>&nbsp;0:0:0</span></span></li>
			<li class="list" v-for="item in data2">
				<img :src="item.img" />
				<div class="bookDesc">
					<span class="title">
						{{item.title}}
					</span>
					<span class="autor">
						<i class="iconfont icon-wode1"></i>
						{{item.autor}}
					</span>
					<span class="price">
						{{item.price}}
					</span>
					<span class="desc">
						{{item.desc}}
					</span>
				</div>
			</li>
		</ul>
		<ul class="work">
			<li class="title"><span>优惠推荐</span></li>
		</ul>
	</div>
</template>

<script>
	import Swiper from "../components/swiper.vue"
	export default {
		name: "sale",
		data(){
			return {
				list: null,
				data: null,
				data2: null,
				banner: null
			}
		},
		methods: {
			getdata(){
				this.list = this.$parent.list;
				this.$http.get('./src/img/shop.json').then(function(data){
					this.$children[0].banner = data.body[this.list].banner;
					this.data = data.body[this.list].others.free.list;
					this.data2 = data.body[this.list].others.charge.list;
//					console.log(this.data);
				})	
			}
		},
		components: {
			"v-swiper": Swiper
		},
		mounted(){
			this.getdata();
		}
	}
</script>