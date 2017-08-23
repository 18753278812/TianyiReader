<template>
	<div id="list">
		<div class="list" v-for="item in data">
			<div class="desc">
				<span>{{item.title}}</span>
				<span>{{item.desc}}</span>
			</div>
			<div class="imglist">
				<img v-for="img in item.books" :src="img"/>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "list",
		data(){
			return {
				list: null,
				data: [{
					books: "123"
				}]
			}
		},
		methods: {
			getdata(){
				this.list = this.$parent.list;
				this.$http.get('./src/img/list.json').then(function(data){
					this.data = data.body[this.list];
//					console.log(this.data)
				})
			}
		},
		beforeMount(){
			this.getdata();
		},
		mounted(){
			
		}
	}
</script>