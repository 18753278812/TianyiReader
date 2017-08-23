<template>
	<div id="sort">
		<div v-for="item in data" class="list">
			<img :src="item.img" />
			<div class="desc">
				<span class="title">{{item.title}}</span>
				<span class="list-desc">{{item.desc}}</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "sort",
		data(){
			return {
				list: null,
				data: null
			}
		},
		methods: {
			getdata(){
				this.list = this.$parent.list;
				this.$http.get('./src/img/sort.json').then(function(data){
					this.data = data.body[this.list];
				})
			}
		},
		mounted(){
			this.getdata();
		}
	}
</script>