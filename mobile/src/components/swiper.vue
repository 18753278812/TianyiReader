<template>
	<div class="swiper-container" id="swiper">
		    <div class="swiper-wrapper">
		        <div class="swiper-slide" v-for="item in banner"><img :src="item.img" /></div>
		    </div>
		    <!-- 如果需要分页器 -->
		    <div class="swiper-pagination"></div>
		</div>
</template>

<script>
	export default {
		name: 'swiper',
		data(){
			return {
				banner: [],
				swiper: null
			}
		},
		mounted(){
//			var mySwiper = new Swiper ('.swiper-container', {
//			    direction: 'horizontal',
//			    loop: true,
//			    // 如果需要分页器
//			    pagination: '.swiper-pagination'
//			});
//			this.swiper = mySwiper;
		},
		updated(){
//			this.swiper.update();
			var mySwiper = new Swiper ('.swiper-container', {
			    direction: 'horizontal',
			    loop: true,
			    // 如果需要分页器
			    pagination: '.swiper-pagination'
			});
		}
	}
</script>