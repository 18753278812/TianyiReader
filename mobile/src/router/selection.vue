<template>
	<div id="selection">
		<v-swiper></v-swiper>
		<v-shopmain></v-shopmain>
	</div>
</template>

<script>
	import Swiper from '../components/swiper.vue';
	import ShopMain from '../components/shopmain.vue';
	export default {
		name: 'selection',
		components: {
			'v-swiper': Swiper,
			'v-shopmain': ShopMain
		},
		data(){
			return {
				list: 'boy'
			}
		},
		methods: {
			getdata(){
				this.list = this.$parent.list;
				this.$http.get('./src/img/shop.json').then(function(data){
					this.$children[0].banner = data.body[this.list].banner;
					this.$children[1].recommend = data.body[this.list].recommend;
					this.$children[1].news = data.body[this.list].news;
					this.$children[1].others = data.body[this.list].others;
					this.$children[1].list = this.list;
				});
			}
		},
		beforeMount(){
			this.getdata();
		}
	}
</script>