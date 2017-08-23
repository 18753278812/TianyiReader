<template>
	<section id="mybook-mian">
		<transition enter-active-class="animated slideInDown" leave-active-class="animated slideOutUp">
			<div class="label" v-if="labelshow">
				<div class="label-text"></div>
			</div>
		</transition>
		<div class="books">
			<ul :style="imgs">
				<li v-for="item in books"><router-link :to="{name: 'bookcontent',params: {aid: item.id}}">
					<img :src="item.img" />
				</router-link></li>
				<li class="addbook">
					<router-link :to="{name: 'main.shop'}">
						<div><i class="iconfont icon-jia"></i></div>
					</router-link>
				</li>
			</ul>
		</div>		
	</section>
</template>

<script>
	export default {
		name: 'mybook-main',
		data(){
			return {
				labelshow: true,
				imgs: {
					backgroundImage: 'url(' + require("../img/books.jpg") + ')'
				},
				books: []
			}
		},
		methods: {

		},
		beforeMount(){
			this.$http.get('./src/img/mybook.json').then(function(data){
				this.books = data.body;
//				console.log(this.books);
			})
		},
		mounted(){
			document.querySelector('.books').style.height = document.querySelector('#mybook-mian').offsetHeight + 50 + 'px';
			document.querySelector('#mybook-mian').onscroll = function(ev){
//				console.log(document.querySelector('#mybook-mian').offsetTop);
				this.labelshow = false;
				document.querySelector('.books').style.paddingTop = '0.45rem';
				if (ev.target.scrollTop == 0) {
					this.labelshow = true;
					document.querySelector('.books').style.paddingTop = '0';
				}
			}.bind(this);
		}
	}
</script>
