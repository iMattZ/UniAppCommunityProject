<template>
	
	<!-- 头像昵称 | 关注按钮 -->
	<view class="p-2">
		<!-- 头像昵称 | 创建时间 -->
		<view class="flex align-center justify-between">
			
			<!-- 头像 -->
			<view class="flex align-center">
				<image  class="rounded-circle mr-2" :src="item.userpic"  
				style="width: 65rpx; height: 65rpx;" lazy-load>
				</image>
				<!-- 昵称 | 创建时间 -->
				<view>
					<!-- 昵称 -->
					<view style="font-size: 30rpx; line-height: 1.5;">{{item.username}}</view>
					<!-- 创建时间 -->
					<text style="font-size: 25rpx; line-height: 1.5; color: #9D9589;">{{item.newstime}}</text>
				</view>
			</view>
			
	
			<!-- 关注按钮 -->
			<view class="flex align-center justify-center bg-main" 
			style="width: 90rpx; height:50rpx; border-radius: 5rpx; color: #FFFFFF;">
				关注
			</view>
		</view>
		
		
		<!-- 标题 -->
		<view class="my-1" style="font-size: 30rpx;">
			{{item.title}}
		</view>
		<!-- 图片 -->
		<image :src="item.titlepic" 
		style="width: 100%; height: 350rpx; border-radius: 5rpx;">
		</image>
		
		
		<!-- 图标按钮 -->
		<view class="flex align-center">
			<!-- 赞 -->
			<view class="flex align-center justify-center flex-1">
				<text class="iconfont icon-dianzan2 mr-2"></text>
				<text>{{item.support.support_count}}</text>
			</view>
			
			<!-- 踩 -->
			<view class="flex align-center justify-center flex-1">
				<text class="iconfont icon-cai mr-2"></text>
				<text>{{item.support.unsupport_count}}</text>
			</view>
				
			<!-- 消息 -->
			<view class="flex align-center justify-center flex-1">
				<text class="iconfont icon-xiaoxi mr-2"></text>
				<text>{{item.comment_count}}</text>
			</view>
			
			<!-- 分享 -->
			<view class="flex align-center justify-center flex-1">
				<text class="iconfont icon-fenxiang mr-2"></text>
				<text>{{item.share_count}}</text>
			</view>
			
		</view>
	</view>
	
</template>

<script>
	export default {
		props:{
			item:Object,
			index:Number
		},
	}
</script>

<style>
</style>
