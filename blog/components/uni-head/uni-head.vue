<template>
	<!-- head component -->
	<view class="head">
		<text class="login" @click="toLogin">login</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			};
		},
		methods:{
			toLogin(){
				uni.navigateTo({
					url:'../../pages/login/login'
				})
			}
		}
	}
</script>

<style>
.head {
	width: 100vw;
	height: 10vh;
	box-shadow: 0 1px 10px #FFFFFF;
	color: #FFFFFF;
}
</style>
