<template>
	<!-- login page -->
	<view class="page">
		<form class="login" @submit="formSubmit" @reset="formReset">
		    <view class="title">
		    	user login
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
		background: url('https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-zzcscoet2z3v3085d1/70e8ce60-40d1-11eb-bf0a-894cbc80c40a.jpg');
		background-size: 100% 100%;
	}
	.login {
		box-shadow: 0 0 20px 2px rgba(255,255,255,0.2);
		width: 31vw;
		height: 40vh;
		padding: 5vh 1vw;
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
