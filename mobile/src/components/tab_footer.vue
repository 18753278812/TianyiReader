<template>
	<footer>
		<ul>
			<li><router-link :to="{name: 'main.mybook'}"><i class="iconfont icon-shujiaxuanzhong"></i><span>书架</span></router-link></li>
			<li><router-link :to="{name: 'main.shop'}"><i class="iconfont icon-shu"></i><span>书城</span></router-link></li>
			<li><router-link :to="{name: 'main.find'}"><i class="iconfont icon-faxian"></i><span>发现</span></router-link></li>
			<li><router-link :to="{name: 'main.my'}"><i class="iconfont icon-wode"></i><span>我的</span></router-link></li>
		</ul>
	</footer>
</template>

<script>
	export default {
		
	}
</script>