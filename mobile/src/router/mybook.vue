<template>
	<div id="mybook">
		<header>
			<i class="iconfont icon-fangdajing1" @click="serch()"></i>
			<i class="iconfont icon-menu"></i>
		</header>
		<v-main></v-main>
	</div>
</template>

<script>
	import MyBookMain from '../components/mybook-main.vue'
	export default {
		name: 'mybook',
		data: function(){
			return {
				
			}
		},
		methods: {
			serch(){
					this.$parent.serch = !this.$parent.serch;
				}
		},
		components: {
			'v-main': MyBookMain
		}
	}
</script>