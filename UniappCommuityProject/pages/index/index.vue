<template>
	<view>
		<block v-for="(item,index) in list" :key="index">
			
			<!-- 列表样式 -->
			<common-list :item="item" :index="index" @follow="follow" @doSupport="doSupport"></common-list>
			
			<!-- 分割线 -->
			<divider></divider>
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
						userpic:"/static/demo/userpic/1.jpg",
						newstime:"2019-10-12 下午3：30",
						isFollow:false,
						title:"我是标题1",
						titlepic:"/static/demo/banner1.jpg",
						support:{
							type:"support",
							support_count:10,
							unsupport_count:20
						},
						comment_count:20,
						share_count:20
					},{
						username:"昵称",
						userpic:"/static/demo/userpic/1.jpg",
						newstime:"2019-10-12 下午3：30",
						isFollow:false,
						title:"我是标题2",
						titlepic:"",
						support:{
							type:"support",
							support_count:1,
							unsupport_count:0
						},
						comment_count:2,
						share_count:2
					},{
						username:"昵称",
						userpic:"/static/demo/userpic/1.jpg",
						newstime:"2019-10-12 下午3：30",
						isFollow:false,
						title:"我是标题2",
						titlepic:"",
						support:{
							type:"",
							support_count:0,
							unsupport_count:0
						},
						comment_count:0,
						share_count:0
					}
				]
			}
		},
		onLoad() {

		},
		methods: {
			
			// 点击了关注按钮
			follow(index){
				this.list[index].isFollow = true;
				uni.showToast({ title:'关注成功' });
			},
			// 顶踩操作
			doSupport(e) {
				// 拿到当前对象
				let item = this.list[e.index]
				let msg = e.type === 'support' ? '顶':'踩'
				
				// 之前没有操作过
				if (item.support.type === '') {
					item.support[e.type+'_count']++
				}else if (item.support.type === 'support' && e.type === 'unsupport') { 
					// 顶 - 1
					item.support.support_count--
					// 踩 + 1
					item.support.unsupport_count++
					
				}else if (item.support.type === 'unsupport' && e.type === 'support') {
					
					//  顶 + 1
					item.support.support_count++
					//  踩 - 1
					item.support.unsupport_count--
				}
				

				item.support.type = e.type
				uni.showToast({
					title: msg + '成功'
				})
				
				
			}
		}
	}
</script>

<style>
	
</style>
