<template>
	<view>
		
		<!-- 自定义导航 -->
		<uni-nav-bar left-icon="back" statusBar :border='false'>
			<view class="flex align-center justify-center" style="width: 100%;">
				所有人可见
				<text v-model="content" class="iconfont icon-shezhi"></text>
			</view>
		</uni-nav-bar>
		
		<!-- 文本域 -->
		<textarea placeholder="说一句话吧" class="uni-textarea px-2"/>
		
		<!-- 图片上传 -->
		<upload-image @choose='choose'></upload-image>
		
		<!-- 底部操作条 -->
		<view class="fixed-bottom flex bg-white align-center justify-center" style="height: 85rpx;">
			<view class="iconfont icon-caidan footer-btn animated" hover-class="jello"></view>
			<view class="iconfont icon-huati footer-btn animated" hover-class="jello"></view>
			<view class="iconfont icon-tupian footer-btn animated" hover-class="jello"></view>
			
			<view class="ml-auto bg-main text-white flex justify-center align-center rounded mr-2 animated" 
			style="width: 140rpx; height: 60rpx;" hover-class="jello"
			@click="clickSend">发送</view>
		</view>
		
		
	</view>
</template>

<script>
	import uniNavBar from '@/component/uni-ui/uni-nav-bar/uni-nav-bar.vue'
	import uploadImage from '../../component/common/upload-image.vue'
	export default {
		components:{
			uniNavBar,
			uploadImage
		},
		data() {
			return {
				content:'',
				imageList:[]
			}
		},
		methods: {
			// 选中图片
			choose(e) {
				this.imageList = e
			},
			
			
			// 发布事件
			clickSend(e) {
				console.log('--'+this.imageList)
			}
		}
	}
</script>

<style>
	.footer-btn {
		width: 86rpx;
		height: 86rpx;
		display: flex;
		align-content: center;
		justify-content: center;
		font-size: 50rpx;
	}

</style>
