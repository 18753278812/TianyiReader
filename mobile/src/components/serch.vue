<template>
	<div id="serch">
		<header>
			<i class="iconfont icon-goback" @click="serchout()"></i>
			<i class="iconfont icon-fangdajing1 serchfind"></i>
			<input type="text" placeholder='海量正版内容供您搜索' v-focus />
		</header>
	</div>	
</template>

<script>
	export default {
		name: 'serch',
		data: function(){
			return {
				
			}
		},
		methods: {
			serchout(){
				this.$parent.serch = !this.$parent.serch;
			}
		},
		directives: {
			focus: {
				inserted(el){
					el.focus();
				}
			}
		}
	}
</script>