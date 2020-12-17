<template>
	<!-- login page -->
	<view class="page">
		<form class="login" @submit="formSubmit" @reset="formReset">
		    <view class="title">
		    	用户登录
		    </view>
		</form>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.page {
		display: flex;
		align-items: center;
		justify-content: center;
		background: url('../../static/login/login-bg.jpeg');
		background-size: 100% 100%;
	}
	.login {
		box-shadow: 0 0 20px 2px rgba(0,0,0,0.1);
		width: 33vw;
		height: 50vh;
		border-radius: 10px;
		position: relative;
	}
	.title {
		width: 100%;
		height: 10vh;
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: 4vh;
		/* color: #505458; */
		color: #FFFFFF;
	}
</style>
