<template>
	<div id="detail">
		<header>
			<i class="iconfont icon-goback" @click="goback()"></i>
			<i class="iconfont icon-fenxiang-copy"></i>
		</header>
		<section>
			<div class="top">
				<img :src=data.img />
				<div class="box">
					<span class="title">{{data.title}}</span>
					<span class="autor">{{data.autor}}</span>
					<span class="words">{{data.words}}|{{data.status}}</span>
					<span class="readers">{{data.readers}}</span>
					<span class="price">{{data.price}}</span>
				</div>
			</div>
			<div class="desc" @click="autoheight()">
				{{data.desc}}
				<div class="xia">......<i class="iconfont icon-xia"></i></div>
			</div>
			<div class="tab">
				<span v-for="item in data.tab">{{item}}</span>
			</div>
			<div class="list"  @click="list('list')">
				<span>目录</span>
				<span>更新至{{data.list[data.list.length - 1]}}</span>
				<i class="iconfont icon-fanhui"></i>
			</div>
			<ul class="comment">
				<li><span>书友评论</span><span>我要评论</span></li>
				<li v-for="(item,index) in data.comment" v-if="index < 3">
					<div class="via">
						<img :src="item.via" />
					</div>
					<div class="content">
						<span>{{item.reader.substring(0,3) + '****' + item.reader.substring(7)}}</span>
						<span>{{item.content}}</span>
						<div>
							<span>{{item.date}}</span>
							<span>{{item.praise}} <i class="iconfont icon-zan"></i></span>
						</div>
					</div>
				</li>
				<li  @click="list('comment')">查看更多书评（{{data.comment.length}}条）</li>
			</ul>
		</section>
		<footer>
			<span>放入书架</span>
			<span>立即试读</span>
		</footer>
		<v-list v-if='isok' :name="type"></v-list>
	</div>
</template>

<script>
	import DetailList from '../components/detail-list.vue'
	export default {
		name: "detail",
		data(){
			return {
				aid: "01",
				data: {
					list: [],
					comment: []
				},
				val: true,
				isok: false,
				type: "list"
			}
		},
		methods: {
			goback(){
				history.back();
			},
			autoheight(){
				if(this.val) {
					document.querySelector('.desc').style.height = "1.5rem";
					document.querySelector('.xia').style.display = "none";
				} else {
					document.querySelector('.desc').style.height = "";
					setTimeout(()=>{
						document.querySelector('.xia').style.display = "";
					},500)
					
				}
				this.val = !this.val;
			},
			list(val){
				this.type = val;
				this.isok = !this.isok;
			}
		},
		components: {
			'v-list': DetailList
		},
		beforeMount(){
			this.aid = this.$route.params.aid;
			this.$http.get('./src/img/books.json').then((arr) => {
				arr.body.forEach((item) => {
					if(item.id == this.aid) {
						this.data = item;
						return;
					}	
				});
				console.log(this.data);
			})
		}
	}
</script>