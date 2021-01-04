<template>
	<!-- login page -->
	<view class="page">
		<view class="login">
		    <view class="title">
		    	user login
		    </view>
			<view class="user-login account">
				<input type="text" v-model="username" placeholder="account plz" placeholder-style="color:#FFFFFF"/>
			</view>
			<view class="user-login password">
				<input type="password" v-model="password" placeholder="password plz" placeholder-style="color:#FFFFFF"/>
			</view>
			<view class="user-login remember">
				<label class="radio">
					<radio :checked="isRemember" @click="handleChangeRemeber"/><text>remember</text>
				</label>
			</view>
			<view class="user-login login-btn" @click="checkLogin">
				login
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
				isRemember:false,
			}
		},
		methods: {
			/**
			 * @description  decide remember account and password
			 * */
			handleChangeRemeber(){
				this.isRemember = !this.isRemember
			},
			/**
			 * @description  post account and password  check in
			 * */
			async checkLogin(){
				let res = await this.$uniCloud('login',{name:this.username,password:this.password})
				console.log(res)
				if(res.result.code == 0){
					uni.showToast({
						title:'success',
						success() {
							uni.navigateTo({
								url:'../index/index'
							})
						}
					})
				}else {
					uni.showToast({
						title:res.result.msg,
						icon:'none'
					})
				}
			}
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
		color: #FFFFFF;
	}
	.user-login {
		height: 5vh;
		margin-top: 2vh;
		width: 100%;
		color: #FFFFFF;
		position: relative;
	}
	.user-login input {
		height: 100%;
		width: 100%;
		font-size: 2vh;
	}
	.remember {
		
	}
	.login-btn{
		display: flex;
		align-items: center;
		justify-content: center;
		background-color: rgba(255,255,255,0.4);
		border-radius: 1vh;
	}
	.login-btn:hover {
		background-color: rgba(255,255,255,0.5);
	}
</style>
