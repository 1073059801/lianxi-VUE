<template>
	<header id="header">
		<div class="fanhui" slot="left" icon="back" @click="back()">
		 	<i class="iconfont icon-fanhui"></i>
		</div>
		 <p>
		 	个人中心
		 </p>
			  <div class="gouwuche" style="color: #000000;">
			 		&nbsp;
			 		&nbsp;
			 		&nbsp;
			 		&nbsp;
			 		&nbsp;
			  </div>
	</header>
</template>

<script>
	import Vue from 'vue';
	import { Header } from 'mint-ui';
	Vue.component(Header.name, Header);
	export default {
		methods:{
			back(){
				history.back()
			}
		}
	}
</script>

<style scoped lang = "scss">
@import "~@/lib/reset.scss";
#header{
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding-left:5px;
	padding-right:5px;
	color:#fff;
	.fanhui{
		
	}
	p{
			font-size: 20px;
	}
}
</style>