<template>
	
	<view class="p-2">
		<!-- 头像昵称 | 关注按钮 -->
		<view class="flex align-center justify-between">
			<view class="flex align-center">
				<!-- 头像 -->
				<image  class="rounded-circle mr-2" 
				:src="item.userpic"  @click="openSpace"
				style="width: 65rpx; height: 65rpx;" 
				lazy-load></image>
				<!-- 昵称发布时间 -->
				<view>
					<view class="font" style="line-height: 1.5;">
						{{item.username}}
					</view>
					<text class="font-sm text-light-muted" 
					style="line-height: 1.5;">
						{{item.newstime}}
						</text>
				</view>
			</view>
			
	
			<!-- 关注按钮 -->
			<view @click="follow" v-if="!item.isFollow"
			class="flex align-center justify-center bg-main rounded text-white animated faster" 
			style="width: 90rpx; height:50rpx;"
			hover-class="jello">
				关注
			</view>
		</view>
		
		
		<!-- 标题 -->
		<view class="my-1 font-md" @click="openDetail">
			{{item.title}}
		</view>
		<!-- 图片 -->
		<image :src="item.titlepic" v-if="item.titlepic" @click="openDetail"
		style="height: 350rpx;" class="rounded w-100">
		</image>
		
		
		<!-- 图标按钮 -->
		<view class="flex align-center">
			<!-- 赞 -->
			<view class="flex align-center justify-center flex-1 animated faster" 
			hover-class="jello text-main" @click="doSupport('support')"
			:class="item.support.type === 'support' ? 'support-active':''">
				<text class="iconfont icon-dianzan2 mr-2" ></text>
				<text>{{item.support.support_count > 0 ? item.support.support_count :'支持' }}</text>
			</view>
			
			<!-- 踩 -->
			<view class="flex align-center justify-center flex-1 animated faster" 
			:class="item.support.type === 'unsupport' ? 'support-active':''"
			hover-class="jello text-main" @click="doSupport('unsupport')">
				<text class="iconfont icon-cai mr-2"></text>
				<text>{{item.support.unsupport_count > 0 ? item.support.unsupport_count:'反对'}}</text>
			</view>
				
			<!-- 消息 -->
			<view class="flex align-center justify-center flex-1 animated faster" 
			hover-class="jello text-main" @click="openDetail">
				<text class="iconfont icon-xiaoxi mr-2"></text>
				<text>{{item.comment_count > 0 ? item.comment_count : '消息'}}</text>
			</view>
			
			<!-- 分享 -->
			<view class="flex align-center justify-center flex-1 animated faster" 
			hover-class="jello text-main" @click="openDetail">
				<text class="iconfont icon-fenxiang mr-2"></text>
				<text>{{item.share_count > 0 ? item.share_count :'分享'}}</text>
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
		methods:{
			// 打开个人空间
			openSpace(){
				console.log('打开个人空间')
			},
			// 关注 
			follow() {
				// 通知父组件 
				this.$emit('follow',this.index)
			},
			// 进入详情页
			openDetail(){
				console.log('进入详情页')
			},
			// 顶踩操作
			doSupport(type) {
				this.$emit('doSupport',{
					type:type,
					index:this.index
				})
			}
		}
	}
</script>

<style>
	.support-active {
		color: #FC5C82;
	}
</style>
