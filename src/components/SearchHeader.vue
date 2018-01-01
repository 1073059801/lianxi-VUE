<template>
	<header id="header" >
		<!--<mt-search 
		  v-model="value"
		  cancel-text="取消"
		  placeholder="搜索商品">
		</mt-search>-->
		<div class="search">
			<table>
				<i class="iconfont icon-sousuo"></i>
			</table>
			<input type="text" name="" id="" value="" placeholder="搜索商品" />
			<div class="quxiao" @click="back()">
				取消
			</div>
		</div>
		
		
	</header>
</template>

<script>
import Vue from 'vue';
import { Search } from 'mint-ui';
import jquery from '@/md/jquery-1.11.3.js'

Vue.component(Search.name, Search);
	export default {
//		data(){
//			
//		},
		mounted(){
			$(function () {
		        $('input:text:first').focus();
		        var $inp = $('input:text');
		        $inp.bind('keydown', function (e) {
		            var key = e.which;
		            if (key == 13) {
		            	alert("0000")
		                e.preventDefault();
//		                var nxtIdx = $inp.index(this) + 1;
//		                $(":input:text:eq(" + nxtIdx + ")").focus();
		            }
		        });
		    });
		},
		methods:{
			Search(){
			        
			},
			back(){
				history.back()
			}
		}
	}
</script>

<style scoped lang = "scss">
#header{
	
	.search{
		width: 100%;
		height: 100%;
		padding: 5px 15px;
		display:flex;
		align-items: center;
		table{
			background: red;
			width: 25px;height: 25px;
			text-align: center;
			line-height: 25px;
			float: left;
			background: #fff;
		}
		input{
			border: none;
			float: left;
			width: 75%;
			height: 26px;
			margin-left: -1px;
		}
		.quxiao{
			color: #007AFF;
			font-size: 22px;
			margin-left: 15px;
		}
	}
}
</style>