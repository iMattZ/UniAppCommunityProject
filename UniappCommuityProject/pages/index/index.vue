<template>
	<view>
		
		<!-- 顶部选项卡 -->
		<scroll-view scroll-x class="scroll-row border-bottom border-light-secondary" :scroll-into-view="scrollInfo" style="height: 100rpx;">
			<view v-for="(item,index) in tabBars" :key="index"
			class="scroll-row-item py-2 px-3 font-md" :id="'tab'+index"
			:class="tabIndex === index ? 'text-main font-lg font-weight-bold' : ''"
			@click="changeTab(index)">{{item.name}}</view>
		</scroll-view>
		
		
		<!-- swiper -->
		<swiper :duration="150" :current="tabIndex" :style="'height:'+scrollH+'px;'"
		@change="onChangeTab">
			
			<swiper-item v-for="(item,index) in newsList" :key="index" >
				<scroll-view scroll-y="true" :style="'height:'+scrollH+'px;'" 
				@scrolltolower="loadmore(index)">
					<template v-if="item.list.length > 0">
						<block v-for="(item2,index2) in item.list" :key="index2">	
							<!-- 列表样式 -->
							<common-list :item="item2" :index="index2" @follow="follow" @doSupport="doSupport"></common-list>
							<!-- 分割线 -->
							<divider></divider>
						</block>
					
						<!-- 上拉加载 -->
						<load-more :loadmore="item.loadmore"></load-more>
					</template>
					
					
					<!-- 无数据图片 -->
					<template v-else>
						<no-thing></no-thing>
					</template>
					
				</scroll-view>
			</swiper-item>
			
		</swiper>
		
		
		
		
		<!-- <block v-for="(item,index) in list" :key="index">		 -->
			<!-- 列表样式 -->
			<!-- <common-list :item="item" :index="index" @follow="follow" @doSupport="doSupport"></common-list> -->
			<!-- 分割线 -->
			<!-- <divider></divider> -->
		<!-- </block> -->
			
			
	</view>
</template>

<script>
	const demo = [{
								username:"昵称",
								userpic:"/static/demo/userpic/1.jpg",
								newstime:"2019-10-12 下午3：30",
								isFollow:false,
								title:"我是标题1",
								titlepic:"/static/demo/banner2.jpg",
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
							}];
	import commonList from '@/component/common/common-list.vue';
	import loadMore from '@/component/common/load-more.vue';
	export default {
		components:{
			commonList,
			loadMore
		},
		data() {			
			return {
				// 列表高度
				scrollH:'500',
				// 顶部选项卡
				scrollInfo:"",
				tabIndex:0,
				tabBars:[
					{
						name:"关注",
					},{
						name:"推荐",
					},{
						name:"体育",
					},{
						name:"热点",
					},{
						name:"财经",
					},{
						name:"娱乐",
					},{
						name:"军事",
					},{
						name:"历史",
					},{
						name:"本地",
					}
				],
				newsList:[]
				
			}
		},
		onLoad() {
			uni.getSystemInfo({
				success:res=>{
					this.scrollH = res.windowHeight - uni.upx2px(101)
				}
			}),
			
			// 生成数据
			this.getData();
		},
		
		// 监听点击导航栏输入框
		onNavigationBarSearchInputClicked() {
			uni.navigateTo({
				url:'../search/search'
			})
			
		},
		
		// 监听导航栏按钮的事件
		onNavigationBarButtonTap(e) {
			if(e.index === 0) {
				uni.navigateTo({
					url:'../add-input/add-input'
				})
			}
		},
		methods: {
			
			getData(){
				
				var arr = []
				for (var i = 0; i < this.tabBars.length ; i++) {
					let obj = {
						loadmore:"上拉加载更多数据",
						list:[]
					}
					
					
					if (i < 2) {
						obj.list = demo
					}
					
					arr.push(obj)	
				}
				
				this.newsList = arr
			},
			
			// 点击了关注按钮
			follow(index){
				this.list[index].isFollow = true;
				uni.showToast({ title:'关注成功' });
			},
			
			// 监听滑动
			onChangeTab(e) {
				this.changeTab(e.detail.current)
			},
			
			// 切换选项卡
			changeTab(index) {
				if (index === this.tabIndex) {
					return
				}
				
				this.tabIndex = index;
				this.scrollInfo = 'tab'+index
					
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
			},
			
			// 上拉加载更多
			loadmore(index) {
				console.log(index)
				// 拿到当前列表
				let item = this.newsList[index]
				// 修改当前列表加载状态
				item.loadmore = "加载中..."
				// 模拟数据请求
				setTimeout(()=>{
					item.list = [...item.list,...item.list]
					item.loadmore = '上拉加载更多'
				},2000)
				
			}
		}
	}
</script>

<style>
	
</style>
