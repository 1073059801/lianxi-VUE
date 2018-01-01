<template>
	<div id="content">
		<div class="search">
			<table>
				<i class="iconfont icon-sousuo"></i>
			</table>
			<input type="text" name="search" id="search" value="" placeholder="搜索商品" />
			<div class="quxiao" @click="back()">
				取消
			</div>
		</div>
		<div v-if="flag" class="nodata">
			<img src="../assets/nodata.png"/>
			<p>哎呀，溜走了，换个词试试</p>
			<p>为你推荐一下商品</p>
		</div>
		<div v-else class="bottom">
			<p>热搜</p>
			<ul>
				<li style="color: red;">话费充值</li>
				<li style="color: red;">咸鱼12.12预热主会场</li>
				<li style="color: red;">新人专享大礼包</li>
				<li style="color: red;">限时开抢，低价秒杀</li>
				<li>衣柜</li>
				<li>上衣</li>
				<li>衣柜</li>
				<li>衬衫</li>
				<li>礼服</li>
				<li>短外套</li>
				<li>卫衣</li>
				<li>T恤</li>
			</ul>
		</div>
		<div class="bottom2">
			<p>搜索记录</p>
			<ul>
				<li></li>
			</ul>
		</div>
		<div class="bottom3">
			<p>常用分类</p>
			<ul>
				<li>女装</li>
				<li>男装</li>
				<li>居家百货</li>
				<li>内衣配饰</li>
				<li>通讯旅游</li>
			</ul>
		</div>
	</div>
</template>

<script>
import Vue from 'vue';
import MyAjax from "@/md/MyAjax.js"
import { Search } from 'mint-ui';
import jquery from '@/md/jquery-1.11.3.js'

Vue.component(Search.name, Search);
	export default {
		data(){
			return{
				flag:false
			}
		},
		methods:{
			Search(){
				var that = this;
			    var url = "http://datainfo.duapp.com/shopdata/selectGoodes.php";
			    var text = $("#search").val();
			    console.log(text);
				   MyAjax.fetchJsonp(url, (data) => {
			      	console.log(data)
			      	if( data == 0 ){
			      		that.flag = true;
			      	}
			    })
			},
			back(){
				history.back()
			}
		},
		mounted(){
			var that = this
			$(function () {
		        $('input:text:first').focus();
		        var $inp = $('input:text');
		        $inp.bind('keydown', function (e) {
		            var key = e.which;
		            if (key == 13) {
		            	that.Search();
		                e.preventDefault();
//		                var nxtIdx = $inp.index(this) + 1;
//		                $(":input:text:eq(" + nxtIdx + ")").focus();
		            }
		        });
		    });
		}
	}
</script>

<style scoped lang = "scss">
#content{
	.search{
		width: 100%;
		height: 0.4rem;
		padding: 5px 15px;
		background: #FEDC3C;
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
	.nodata{
		width: 100%;
		height: 400px;
		background: #fff;
		text-align: center;
		img{
			width: 200px;
			height:200px;
			
		}
		p:nth-child(2){
			font-size: 20px;
		}
		p:nth-child(3){
			font-size: 16px;
			color: #999999;
		}
	}
	.bottom{
		padding: 5px;
		width: 100%;
		height: auto;
		overflow: hidden;
		p{
			width: 100%;
			height: 20px;
			font-size: 20px;
		}
		ul{
				margin-top: 10px;
				li{
					float: left;
					color: #000;
					padding:2px 5px;
					line-height: 30px;
					background: #f4f4f4;
					font-size: 12px;
					border-radius: 10px;
					margin: 5px;
				}
			}
	}
	.bottom2{
		padding: 5px;
		p{
			width: 100%;
			height: 20px;
			font-size: 20px;
		}
	}
	.bottom3{
		padding: 5px;
		margin-top: 10px;
		p{
			display: flex;
			align-items: center;
			justify-content: center;
			width: 50px;
			height: 50px;
			line-height: 19px;
			font-size: 17px;
			text-align: center;
			border-radius: 50px;
			background: greenyellow;
			margin-left:10px ;
			color: #fff;
		}
		ul{
			
			li{
				display: flex;
			align-items: center;
			justify-content: center;
				float: left;
				margin:10px;
				width: 50px;
			height: 50px;
			line-height: 16px;
			font-size: 17px;
			text-align: center;
			border-radius: 50px;
			background:blueviolet;
			color: #fff;
			}
		}
	}
}

</style>