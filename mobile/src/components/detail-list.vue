<template>
	<div id="detail-list">
		<header>
			<i class="iconfont icon-goback" @click="goback()"></i>
			<i class="iconfont icon-fenxiang-copy"></i>
		</header>
		{{list}}
	</div>
</template>

<script>
	export default {
		name: 'detail-list',
		data(){
			return {
				list: [],
				val: "list"
			}
		},
		props: ['name'],
		methods: {
			goback(){
				this.$parent.isok = !this.$parent.isok;
			}
		},
		mounted(){
			this.list = this.$parent.data[this.name];
		}
	}
</script>