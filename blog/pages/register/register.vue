<template>
	<!-- login page -->
	<view class="page">
		<view class="register">
		    <view class="title">
		    	user register
		    </view>
			<view class="user-register username">
				<input type="text" v-model="username" placeholder="username plz" placeholder-style="color:#ccc"/>
			</view>
			<view class="user-register password">
				<input type="password" v-model="password" placeholder="password plz" placeholder-style="color:#ccc"/>
			</view>
			<view class="user-register gender">
				<input type="text" v-model="gender" placeholder="gender plz" placeholder-style="color:#ccc"/>
			</view>
			<view class="user-register avatar">
				<input type="text" v-model="avatar" placeholder="avatar plz" placeholder-style="color:#ccc"/>
			</view>
			<view class="user-register register-btn" @click="handleRegister">
				commit
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				username:'',
				password:'',
				gender:"",
				avatar:''
			}
		},
		methods: {
			/**
			 * @description  handle register function
			 * @param {string} username
			 * @param {string} password 
			 * @param {string} gender
			 * @param {string} avatar
			 * */
			async handleRegister(){
				let res = await this.$uniCloud('register',{username:this.username,password:this.password,gender:this.gender,avatar:this.avatar})
				console.log(res)
			},
			// /**
			//  * @description  post account and password  check in
			//  * */
			// async checkLogin(){
			// 	let res = await this.$uniCloud('login',{name:this.username,password:this.password})
			// 	console.log(res)
			// 	if(res.result.code == 0){
			// 		uni.showToast({
			// 			title:'success',
			// 			success() {
			// 				uni.navigateTo({
			// 					url:'../index/index'
			// 				})
			// 			}
			// 		})
			// 	}else {
			// 		uni.showToast({
			// 			title:res.result.msg,
			// 			icon:'none'
			// 		})
			// 	}
			// }
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
	.register {
		box-shadow: 0 0 20px 2px rgba(255,255,255,0.2);
		width: 31vw;
		min-height: 40vh;
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
		color: #FFFFFF;
	}
	.user-register {
		height: 5vh;
		margin-top: 2vh;
		width: 100%;
		color: #FFFFFF;
		position: relative;
	}
	.user-register input {
		height: 100%;
		width: 100%;
		font-size: 2vh;
	}
	.register-btn{
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: rgba(255,255,255,0.4);
		border-radius: 1vh;
	}
	.register-btn:hover {
		background-color: rgba(255,255,255,0.5);
	}
</style>
