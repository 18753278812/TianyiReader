<template>
	<div id="shop">
		<header>
			<div class="shop-top-tap">
				<div class="active" @click="uplist('boy')">男频</div>
				<div @click="uplist('girl')">女频</div>
				<div @click="uplist('pb')">出版</div>
			</div>
			<i class="iconfont icon-fangdajing1" @click="serch()"></i>
		</header>
		<nav>
			<router-link :to="{name: 'main.shop.selection'}">精选</router-link>
			<router-link :to="{name: 'main.shop.sort'}">分类</router-link>
			<router-link :to="{name: 'main.shop.hot'}">榜单</router-link>
			<router-link :to="{name: 'main.shop.favor'}">优惠</router-link>
		</nav>
		<router-view></router-view>
	</div>
</template>

<script>
	export default {
		name: 'shop',
		data(){
			return {
				list: 'boy'
			}
		},
		methods: {
			serch(){
				this.$parent.serch = !this.$parent.serch;
			},
			uplist(val){
				this.list = val;
				this.$children[4].getdata();
			}
		},
		mounted(){
			var btn = document.querySelector('.shop-top-tap').children;
			document.querySelector('.shop-top-tap').addEventListener('click', function(e) {
				for(let i = 0; i < btn.length; i++) {
					btn[i].setAttribute('class',"");
				}
				e.target.className = 'active';
			})
		}
	}
</script>