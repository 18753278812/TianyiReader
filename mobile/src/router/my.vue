<template>
	<div id="my">
		<div class="sc">
		<div class="login" :style="imgs">
			<router-link :to= '{name: "login"}'>
			<div class="user" :style="imgs2">
			</div>
			<div class="tip">
				<span>用户登录</span>
				<span>登录送积分换好礼</span>
			</div>
			</router-link>
		</div>
		<div class="vip pdd">
			<router-link :to= '{name: "login"}'>
			<i class="iconfont icon-vip"></i>
			<span>我的VIP</span>
			<span>开通</span>
			</router-link>
		</div>
		<div class="balance pdd">
			<router-link :to= '{name: "login"}'>
			<i class="iconfont icon-round_rmb_fill"></i>
			<span>余额</span>
			<span>充值</span>
			</router-link>
		</div>
		<div class="count pdd">
			<router-link :to= '{name: "login"}'>
			<i class="iconfont icon-zhengquan"></i>
			<span>阅点券</span>
			</router-link>
		</div>
		<div class="score pdd">
			<router-link :to= '{name: "login"}'>
			<i class="iconfont icon-jifen"></i>
			<span>积分</span>
			<span>积分商城</span>
			</router-link>
		</div>
		<div class="vip pdd blue">
			<router-link :to= '{name: "login"}'>
			<i class="iconfont icon-dingdan"></i>
			<span>订购记录</span>
			</router-link>
		</div>
		<div class="vip pdd blue">
			<router-link :to= '{name: "login"}'>
			<i class="iconfont icon-chongzhi"></i>
			<span>充值记录</span>
			</router-link>
		</div>
		<div class="vip pdd blue">
			<router-link :to= '{name: "login"}'>
			<i class="iconfont icon-lishishuju"></i>
			<span>阅读历史</span>
			</router-link>
		</div>
		<div class="vip pdd blue">
			<router-link :to= '{name: "login"}'>
			<i class="iconfont icon-menu-notes"></i>
			<span>我的笔记</span>
			</router-link>
		</div>
		<div class="vip pdd blue">
			<router-link :to= '{name: "login"}'>
			<i class="iconfont icon-lishishuju"></i>
			<span>分享成就</span>
			</router-link>
		</div>
		<div class="vip pdd blue">
			<router-link :to= '{}'>
			<i class="iconfont icon-menu-notes"></i>
			<span>设置</span>
			</router-link>
		</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'my',
		data(){
			return {
				imgs: {
					backgroundImage: 'url(' + require("../img/my.jpg") + ')'
				},
				imgs2: {
					backgroundImage: 'url(' + require("../img/mylogo.jpg") + ')'
				}
			}
		}
		
	}
</script>