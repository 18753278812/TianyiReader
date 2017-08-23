<template>
	<div id="login">
		<header>
			<i class="iconfont icon-goback" @click="goback()"></i>
			<span>登录</span>
		</header>
		<section>
			<div class="inputs">
				<input type="text" name="username" placeholder="天翼账号/手机号/邮箱/用户名" />
				<input type="password" name="password" placeholder="密码" />
			</div>
			<button>登录</button>
			<div class="add">注册 | 找回密码</div>
			<div class="other">
				<span>使用合作账号登录</span>
				<div class="icon">
					<div><i class="iconfont icon-weixin"></i>微信</div>
					<div><i class="iconfont icon-xinlangweibo"></i>微博</div>
					<div><i class="iconfont icon-qq"></i>QQ</div>
					<div><i class="iconfont icon-zhifubao"></i>支付宝</div>					
				</div>
			</div>
			<div class="mess"><span><i class="iconfont icon-tianyi"></i>天翼账号为你提供登录服务</span></div>
		</section>
	</div>
</template>

<script>
	export default {
		name: 'login',
		methods: {
			goback(){
				history.back();
			},
		}
	}
</script>