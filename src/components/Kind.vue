<template>
	<div id="content">
		<div class="nav" >
			<ul class="fenlei">
				<li @click="jiazai()" v-for="(item, index) in typelist">
					<router-link :to = "{name:'kindtype',params:{classID:item.classID}}"> 
						{{item.className}}
					</router-link>
				</li>
			</ul>
		</div>
		<div v-if="flag" class="top">
			<img src="../assets/top.png"/>
		</div>
		<div class="bottom">
			<ul>
				<li class="left" v-if="flag" v-for="(item, index) in classList">
					<router-link  :to="{name:'detail',params:{goodsID:item.goodsID}}">
						<img :src="item.goodsListImg"/>
						<p>{{item.goodsName}}</p>
						<p>{{ item.discount }}折</p>
						<p>￥{{ item.price }}</p>
					</router-link>
					
					<!--<p v-for="(iiii, index) in iiiilist" :key="index">
						<img :src="iiii"/>
					</p>-->
						
				</li>
				
				<li class="right" v-else>
			       	<div class="box">
			       		<i class="iconfont icon-empty"></i>
			       		<br />
			       		暂无此类商品	
			       	</div>
			    </li>
			</ul>
		</div>
		<div class="goto_top" @click="gt_top()"></div>
	</div>
</template>

<script>
import MyAjax from "@/md/MyAjax.js"
import { Indicator } from 'mint-ui'
export default {
	data(){
		return{
			typelist:[],
			classList:[],
			iiiilist:[],
			flag:true
		}
	},
	mounted(){
		var that = this;
		var classUrl = "http://datainfo.duapp.com/shopdata/getclass.php";
		MyAjax.fetch(classUrl,(data) => {
	      console.log( data )
	       that.typelist = data
	    })
		  var classID = this.$route.params.classID;
	      console.log("classID",classID)
	      var listUrl = "http://datainfo.duapp.com/shopdata/getGoods.php?classID="+classID;
		MyAjax.fetchJsonp(listUrl,(data) => {
	        console.log(data)
	        if(data == "0"){
		          that.flag = false;
		        }else{
		          that.classList = data
		          that.flag = true;
		        }
//			var arr =[];
//	        that.classList = data
//		        for ( var item of data ) {
//		        	var a = eval(item.imgsUrl)
//		        	console.log(item.imgsUrl)
//		        	for( var iiii of a ){
//		        		console.log(iiii)
//		        		arr.push(iiii)
//		        	}
//		        	that.iiiilist = arr;
//		        }
	      })
		$("#content").scroll(function(){
				//console.log($(".nav").scrollTop())
				//console.log($("#content").scrollTop())
				if($("#content").scrollTop()>$(".nav").offset().top){
					$(".nav").css({"position":"fixed","top":39})
				}else{
					$(".nav").css({"position":"relative","top":0})
				}
				
				if($("#content").scrollTop()>100){
					$(".goto_top").css("display","block")
				}else{
					$(".goto_top").css("display","none")
				}
			})
	},
	watch:{
		$route(){
			var that = this;
			var classID = this.$route.params.classID;
	      	console.log("watchclassID",classID)
	      	var listUrl = "http://datainfo.duapp.com/shopdata/getGoods.php?classID="+classID;
			MyAjax.fetchJsonp(listUrl,(data) => {
		        console.log(data)
		        if(data == "0"){
		          that.flag = false;
		        }else{
		          that.classList = data
		          that.flag = true;
		        }
			})
			
			//console.log($(".nav").offset().top)
		}
	},
	methods:{
		jiazai(){
			Indicator.open({
				  text: '加载中...',
				  spinnerType: 'fading-circle'
			});
			setTimeout(() => {
				 	Indicator.close();
			},1000)
		},
		gt_top(){
			$("#content").animate({"scrollTop":0},500)
		}

	}

}
</script>

<style scoped lang = "scss">
 @import "~@/lib/reset.scss";
#content{
	
	.nav{
			width: 100%;
			height: 50px;
			position:relative;
			display:flex;
			border-top:5px solid #eee;
			background:#fff;
		.fenlei{
			width: auto;
			overflow: auto;
			white-space : nowrap;
			display: flex;
			li{
				float: left;
				display: block;
				padding: 5px 10px;
				
				a{
					padding-bottom:5px;
					color:#000;
					&.router-link-active{
		             color: red;
		             border-bottom: 1px solid red;
		           }
				}
				
			}
		}
	}
	.top{
			width: 100%;
			height: 200px;
			img{
				width: 100%;
				height: 100%;
			}
		}
	.bottom{
		height: 100px;
		ul{
			background:#E9E9E9;
			.left{
				width: 100%;
				height: auto;
				padding: 10px;
				text-align: center;
				background:#fff;
				margin-top:10px;
				img{
					width: 100%;
					height: 300px;
				}
				p{
					color: #000;
				}
				p:nth-last-child(3){
					font-size: 20px;
					color: #000;
					margin-top: 15px;
				}
				p:nth-last-child(2){
					color: red;
				}
				p:nth-last-child(1){
					font-size: 25px;
					color: red;
				}
			}
			.right{
				width: 100%;height: 500px;
				background: #000;
				opacity: 0.5;
				margin-top: -1px;
				display: flex;
				justify-content: center;
				align-items: center;
				.box{
					width: 200px;
					height: 200px;
					border-radius: 50%;
					background: #FF0000;
					text-align: center;
					font-size: 20px;
					color: #fff;
					.iconfont{
						font-size: 100px;
					}
				}
			}
		}
	}
	.goto_top{
		background:url(http://s1.ymatou.com/homem/images/gototop-2ab3b79818.png) no-repeat ;
		background-size: 40px 40px;
		position: fixed;
		right:5%;
		bottom: 10%;
		width:40px;
		height:40px;
		display: none;
		border: 1px solid red;
		border-radius:50% ;
	}
}
</style>