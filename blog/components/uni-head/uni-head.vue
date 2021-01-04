<template>
	<!-- head component -->
	<view class="head">
		<view class="menu">
			<image class="logo" src="logo"></image>
			<view class="user" >
				<image class="user-ava" v-if="isLogin" src=""></image>
				<image class="user-ava" v-else src="https://vkceyugu.cdn.bspapp.com/VKCEYUGU-aliyun-zzcscoet2z3v3085d1/756b60a0-428f-11eb-bc56-c9cea619f663.jpg" @click="toLogin"></image>
			</view>
			<view class="menu-item" v-for="(item,id) in menu" :key="id" :class="[selectedId == item.id ? 'selected' : '']" @click="selectedItem(item)">
				{{item.name}}
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		onLoad() {
			if(uni.getStorageSync('token')){
				this.isLogin = true
			}
		},
		data() {
			return {
				isLogin:false,
				selectedId:0,
				menu:[
					{
						id:0,
						name:'home'
					},
					{
						id:1,
						name:'album'
					},
					{
						id:2,
						name:'assortment'
					},
					{
						id:3,
						name:'holder'
					},
				]
			};
		},
		methods:{
			toLogin(){
				uni.navigateTo({
					url:'../../pages/login/login'
				})
			},
			selectedItem(e){
				this.selectedId = e.id
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
.menu {
	height: 10vh;
	width: 70vw;
	margin: auto;
	position: relative;
	display: flex;
	flex-direction: row;
}
.logo {
	height: 10vh;
	width: 10vw;
	margin-right: 2vw;
	cursor: pointer;
}
.menu-item {
	height: 10vh;
	width: 5vw;
	display: flex;
	align-items: center;
	justify-content: center;
}
.menu-item:hover {
	cursor: pointer;
	color: #007AFF;
}
.selected {
	color: #007AFF;
}
.user {
	height: 10vh;
	width: 10vh;
	border-radius: 50%;
	position: absolute;
	right: 0;
	top: 0;
	display: flex;
	align-items: center;
	justify-content: center;
}
.user-ava {
	height: 10vh;
	width: 10vh;
	border-radius: 50%;
}
</style>
