<template>
	<view>
		<block v-for="(item,index) in list" :key="index">
			
			<!-- 列表样式 -->
			<common-list :item="item" :index="index"></common-list>
		
		</block>
			
			
		

	</view>
</template>

<script>
	import commonList from '@/component/common/common-list.vue';
	export default {
		components:{
			commonList
		},
		data() {			
			return {
				list:[
					{
						username:"昵称",
						userpic:"",
						newstime:"/static/demo/default.jpg",
						isfollow:false,
						title:"我是标题1",
						titlepic:"",
						support:{
							type:"support",
							support_count:1,
							unsupport_count:2
						},
						comment_count:2,
						share_count:2
					},{
						username:"昵称",
						userpic:"@/static/demo/default.jpg",
						newstime:"",
						isfollow:false,
						title:"我是标题2",
						titlepic:"",
						support:{
							type:"support",
							support_count:1,
							unsupport_count:2
						},
						comment_count:2,
						share_count:2
					}
				]
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
	
</style>
