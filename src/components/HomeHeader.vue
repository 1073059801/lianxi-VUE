<template>
	<header id="header">
		<div class="saoma">
			<i class="iconfont icon-saoma"></i>
			<p>扫码</p>
		</div>
			<div class="input">
				<table class="iconfont">&#xe6dc;</table>
				<input type="text" @focus="tz()" placeholder="   搜索"/>
			</div>
		<div class="fenlei">
			<i class="iconfont icon-fenlei-copy"></i>
			<p>分类</p>
		</div>
	</header>
</template>

<script>
//	import Vue from 'vue';
//import { Header } from 'mint-ui';
	export default {
//		data(){
//			
//		},
//		mounted(){
//			
//		},
		methods:{
			tz(){
				this.$router.push("/search")
			}
		}
	}
</script>

<style scoped lang = "scss">
	#header{
		display: flex;
		justify-content: space-around;
		align-items: center;
		.saoma{
			display: flex;
			flex-direction: column;	
			text-align: center;
		}
		.input{
			display: flex;
			align-items: center;
			width: 60%;
			table{
				background: #fff;
				float: left;
				    line-height: 28px;
   					 height: 28px;
			}
			input{
				border: 0;
				width: 100%;
				height: 24px;
				margin-left: -1px;
				 height: 28px;
			}
		}
		.fenlei{
			display: flex;
			justify-content: space-around;
			flex-direction: column;	
			text-align: center;
		}
	}
</style>