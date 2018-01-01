<template>
  <header id="header">
     <!--<mt-header title="产品详情">
				    <mt-button slot="left" icon="back" @click="back()">返回</mt-button>
				    <mt-button icon="more" slot="right"></mt-button>
				 </mt-header>-->
		 <div class="fanhui" slot="left" icon="back" @click="back()">
		 	<i class="iconfont icon-fanhui"></i>
		 	返回
		 </div>
		 <p>
		 	商品详情
		 </p>
		 <router-link to="/cart">
			  <div class="gouwuche" style="color: #000000;">
			 		<i class="iconfont icon-gouwuche"></i>
			 		购物车
			  </div>
		 </router-link>
    <!--<router-link to="/cart">
      <i class="iconfont icon-icon1"></i>
    </router-link>-->
  </header>
</template>

<script>
import Vue from 'vue';
import { Header } from 'mint-ui';
Vue.component(Header.name, Header);
export default {
    methods:{
      back(){
        history.back();
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
	.fanhui{
		
	}
	p{
			font-size: 20px;
	}
}
</style>