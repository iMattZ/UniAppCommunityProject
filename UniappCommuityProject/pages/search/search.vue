<template>
	<view>

		<template v-if="searchList.length === 0">
			<view class="py-2 px-2 font-md ">搜索历史</view>
			<view class="flex flex-wrap">
				<view v-for="(item,index) in list" :key="index" 
				class="border font mx-2 my-1 px-2 rounded" 
				@click="clickSearchHistory(item)"
				hover-class="bg-light">{{item}}</view>

			</view>
		</template>

		<template v-else>
			<block v-for="(item,index) in searchList" :key='index'>
				<common-list :item="item" :index="index"></common-list>
			</block>
		</template>

	</view>
</template>

<script>
	const demo = [{
		username: "昵称",
		userpic: "/static/demo/userpic/1.jpg",
		newstime: "2019-10-12 下午3：30",
		isFollow: false,
		title: "我是标题1",
		titlepic: "/static/demo/banner2.jpg",
		support: {
			type: "support",
			support_count: 10,
			unsupport_count: 20
		},
		comment_count: 20,
		share_count: 20
	}, {
		username: "昵称",
		userpic: "/static/demo/userpic/1.jpg",
		newstime: "2019-10-12 下午3：30",
		isFollow: false,
		title: "我是标题2",
		titlepic: "",
		support: {
			type: "support",
			support_count: 1,
			unsupport_count: 0
		},
		comment_count: 2,
		share_count: 2
	}, {
		username: "昵称",
		userpic: "/static/demo/userpic/1.jpg",
		newstime: "2019-10-12 下午3：30",
		isFollow: false,
		title: "我是标题2",
		titlepic: "",
		support: {
			type: "",
			support_count: 0,
			unsupport_count: 0
		},
		comment_count: 0,
		share_count: 0
	}];

	import commonList from '@/component/common/common-list.vue'
	export default {
		components:{
			commonList
		},
		data() {
			return {
				// 搜索的数据
				searchText: '',
				list: [
					'uniapp第一季实战教程', 'uniapp第二季实战教程', '实战教程', '实战教程'
				],
				// 搜索结果
				searchList: []
			}
		},

		// 监听导航栏输入框内容的变化
		onNavigationBarSearchInputChanged(e) {
			this.searchText = e.text
		},

		// 监听导航栏按钮的事件处理
		onNavigationBarButtonTap(e) {
			console.log(e)
			if (e.index === 0) {
				this.searchEvent()
			}

		},

		methods: {
			
			// 搜索历史
			clickSearchHistory(e) {
				this.searchText = e.text
				this.searchEvent()
			},

			// 搜索事件
			searchEvent() {
				// 收起键盘
				uni.hideKeyboard()

				// 显示加载状态
				uni.showLoading({
					title: '加载中...'
				})

				
				// 请求搜索
				setTimeout(()=>{
					this.searchList = demo
					// 隐藏loading
					uni.hideLoading()
				},3000)

			}
		}
	}
</script>

<style>

</style>
