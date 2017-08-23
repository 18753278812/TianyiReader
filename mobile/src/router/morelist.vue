<template>
	<div id="morelist">
		<header><i class="iconfont icon-goback" @click="goback()"></i><span>{{data.title}}</span></header>
		<ul>
			<li v-for="item in val">
				<router-link :to='{name: "detail",params: {aid: item.id}}'>
					<img :src=item.img />
					<div class="desc"></div>
				</router-link>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'morelist',
		data(){
			return {
				data: {},
				val: {}
			}
		},
		mounted(){
			if (this.$route.params.list) {
				this.$parent.data = this.$route.params;
			}
			this.data = this.$parent.data;
			this.$http.get('./src/img/shop.json').then((data) => {
				this.val = data.body[this.data.list][this.data.type];
				if (this.val == undefined) {
					this.val = data.body[this.data.list].others[this.data.type].list;
				}
			})
		},
		methods: {
			goback(){
				history.back();	
			}
		},
		
	}
</script>