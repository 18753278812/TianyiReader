<template>
	<div id="main">
    	<router-view></router-view>
		<v-tab></v-tab>
		<transition enter-active-class="animated slideInRight" leave-active-class="animated slideOutRight">
			<v-serch v-if="serch"></v-serch>
		</transition>
	</div>
</template>

<script>
	import TabFooter from '../components/tab_footer.vue';
	import Serch from '../components/serch.vue';
	export default {
		name: 'main',
		data: function(){
			return {
				serch: false
			}
		},
		components: {
			'v-tab': TabFooter,
			'v-serch': Serch 
		}
	}
</script>