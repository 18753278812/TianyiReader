<template>
	<div id="find">
		<header>发现</header>
		<div class="member pdd">
			<i class="iconfont icon-huangguan"></i>
			<div class="desc">
				<span>荣耀会员中心</span>
				<span>免费读 免广告 可下载 送积分</span>
			</div>
		</div>
		<ul class="uls">
			<li class="lis blue">
				<router-link :to="{name: 'login'}">
				<i class="iconfont icon-qiandao"></i>
				<span>每日签到</span>
				<span>送阅读 抽大奖</span>
				</router-link>
			</li>
			<li class="lis blue">
				<router-link :to="{name: 'login'}">
				<i class="iconfont icon-jifenshangcheng"></i>
				<span>积分商城</span>
				<span>电信积分通用</span>
				</router-link>
			</li>
			<li class="lis blue">
				<i class="iconfont icon-weibiaoti210"></i>
				<span>积分抽奖</span>
			</li>
			<li class="lis blue">
				<i class="iconfont icon-renwu"></i>
				<span>做任务赚积分</span>
			</li>
			<li class="lis">
				<i class="iconfont icon-tiantianchoujiang"></i>
				<span>阅读积分兑换</span>
			</li>
			<li class="lis gray">
				<router-link :to="{name: 'login'}">
				<i class="iconfont icon-youxi"></i>
				<span>游戏专区</span>
				</router-link>
			</li>
			<li class="lis gray">
				<i class="iconfont icon-manhua"></i>
				<span>动漫专区</span>
			</li>
			<li class="lis gray">
				<i class="iconfont icon-yingshi"></i>
				<span>影视大聚会</span>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		name: 'find'
	}
</script>