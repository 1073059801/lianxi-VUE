<template>
	<div id="content">
		<ul class="ShoppingCart">
			<div class="shop">
				<div class="checkbox">
					<input @click="aaa()"  name="hobby" class="qx" type="checkbox"/>
				</div>
				<div class="shop_p">
					<i class="iconfont icon-dianpu"> </i>
					<p>店铺</p>
					<i class="iconfont icon-arrow-right"></i>
				</div>
				<div class="action">
					<span>领劵</span>
				</div>
			</div>
			<li v-for="(item,index) in cartlist" :key = "index">
				
				
				<div class="commodity">
					<div class="checkbox">
						<input type="checkbox" name="hobby" id="" value="" />
					</div>
					<div class="img">
						<img :src="item.goodsListImg"/>
					</div>
					<div class="introduce">
						<div class="introduce_1">
							<p>{{ item.goodsName }}</p>
						</div>
						<div class="introduce_className">
							<p>{{ item.className }}</p>
						</div>
						<div class="introduce_price">
							<p>￥{{item.price * 1 * item.number}}</p>
							<p>￥{{ (item.price*1 + 30) * item.number }}</p>
							<p class="p_3">
								<i @click="reduce(item)">-</i>
								<!--<input type="text" name="" id="" value="" />-->
								<i>{{ item.number }}</i>
								<i @click="add(item)">+</i>
							</p>
						</div>
					</div>
				</div>
			</li>
		</ul>
		<div class="jiesuan">
			<div class="checkbox">
				全选 ：<input @click="aaa2()" class="qxx" type="checkbox"/>
			</div>
			<div class="zongjia">
				<p>合计： <span>{{totalPrice}}</span></p>
				<br />
				<p>总额： <span style="color: #999;">{{ yuanjia }}</span></p>
				<p>立减： <span>{{ lijian }}</span></p>
			</div>

			<div class="zonghe">
				<p>去结算<span>{{  }}</span></p>
			</div>		</div>
	</div>
</template>

<script>
import MyAjax from "@/md/MyAjax.js"
import jquery from '@/md/jquery-1.11.3.js'
import { Indicator } from 'mint-ui'
  export default {
  	data(){
  		return{
  			cartlist: [],
  			totalPrice:"",
  			yuanjia:""
  		}
  	},
  	methods:{
  		 reduce(item){
	        var number = item.number * 1 - 1;
	        if( number == 0 ){
	        	number += 1;
	        	return;
	        }
	        item.number = number;
	        this.totalPrice -= item.price*1
	        this.yuanjia -= item.price*1 + 30
//	        this.lijian -= Math.ceil(((item.price*1 + 30) * item.number) - (Math.ceil(item.price*1)))
	        var userID = localStorage.getItem("userID");
	        var url = "http://datainfo.duapp.com/shopdata/updatecar.php";
	        url += "?userID=" + userID + "&goodsID=" + item.goodsID + "&number=" + number;
	         MyAjax.fetch(url,(data) => {
	           console.log(data)
	            if(data == "1"){
		            Indicator.open({
						  text: '加载中...',
						  spinnerType: 'fading-circle'
					});
					setTimeout(() => {
						 	Indicator.close();
					},1000)
	           }else{
	             alert("gg")
	           }
	         });
      },
  		add(item){
  			var number = item.number * 1 + 1;
	        item.number = number;
	        this.totalPrice += item.price*1
	        this.yuanjia += item.price*1 + 30
	        var userID = localStorage.getItem("userID");
	        var url = "http://datainfo.duapp.com/shopdata/updatecar.php";
	        url += "?userID=" + userID + "&goodsID=" + item.goodsID + "&number=" + number;
	         MyAjax.fetch(url,(data) => {
	           console.log(data)
	           if(data == "1"){
	             Indicator.open({
					  text: '加载中...',
					  spinnerType: 'fading-circle'
				});
				 setTimeout(() => {
					 	Indicator.close();
				},1000)
	           }else{
	             alert("gg")
	           }
	         });
  		},
  		aaa(){
  			var that = this;
  			var oQx=document.getElementsByClassName("qx")[0];
			var cks=document.getElementsByName("hobby");
				for( var i=0;i<cks.length;i++ ){
					cks[i].checked = oQx.checked;
				}
				Indicator.open({
					  text: '加载中...',
					  spinnerType: 'fading-circle'
				});
				 setTimeout(() => {
					 	Indicator.close();
				},1000)
  		},
  		aaa2(){
  			var that = this;
  			var oQx=document.getElementsByClassName("qxx")[0];
			var cks=document.getElementsByName("hobby");
				for( var i=0;i<cks.length;i++ ){
					cks[i].checked = oQx.checked;
				}
				Indicator.open({
					  text: '加载中...',
					  spinnerType: 'fading-circle'
				});
				 setTimeout(() => {
					 	Indicator.close();
				},1000)
  		}
  	},
  	mounted(){
  		/**
	       * 如果没有登录，去登录
	       * 如果登录了，显示购物车
	       *    如果没有商品，显示购物车是空的
	       *    有，显示商品
	       */
	      var that = this ; 
	    if(localStorage.getItem("userID")){
	    	//登录
	    	var userID = localStorage.getItem("userID");
	    	var url = "http://datainfo.duapp.com/shopdata/getCar.php?userID=" + userID;
	    	MyAjax.fetchJsonp(url,(data) => {
	    		console.log(data)
	    		that.cartlist = data;
	    		/**
		         * 先行查询出第一次的总价
		         */ 
		        var tp = 0;
		        var yj = 0;
		        var lj = 0;
		        for(var item of data){
		          tp += item.number*1 * item.price;
		          yj += item.number*1 * (item.price*1 + 30) 
//		          lj += totalPrice - yuanjia
		        }
//		        console.log(yj)
		        console.log(tp)
		        that.totalPrice = tp;
		        that.yuanjia = yj
//		        that.lijian = lj
	    	})
	    }else{
	    	//未登录
	    	this.$router.pust("/login")
	    }
  	}
  }
</script>

<style scoped lang = "scss">
	#content{
		margin-top: 0.4rem;
		.ShoppingCart{
			padding-bottom: 60px;
			.shop{
					width: 100%;
					display: flex;
					justify-content: space-between;
					align-items: center;
					height:0.42rem;
					padding-left:0.14rem ;
					padding-right: 0.05rem;
					display:flex;
					border-top:1px solid #ededed;
					border-bottom:0.01rem solid #ededed;
					position: fixed;
					top: 0.4rem;
					left: 0px;
					.checkbox{
						width: 0.2rem;
						display: flex;
						align-items: center;
					}
					.shop_p{
						flex: 1;
						display: inline-block;
						height: auto;
					    color: #666;
					    display: flex;
					    align-items: center;
					        font-family: PingFang-SC-Regular,Helvetica Neue,Helvetica,Droid Sans Fallback,microsoft yahei,sans-serif;
					    .iconfont{
					    	margin-left: 5px;
					    }
					    .iconfont:nth-last-child(1){
					    	margin-top: 4px;
					    }
					  p{
					  	margin-left: 10px;
					  	margin-top: 4px;
					  }
					}
					.action{
					  	color: red;
					  }
				}
			li{
				border-top:10px solid #eee;
				
				.commodity{
					display: flex;
					padding: 15px;
					.checkbox{
						width: 0.2rem;
						display: flex;
						align-items: center;
					}
					.img{
						width: 100px;height: 100px;
						img{
							width: 100%;height: 100%;
						}
					}
					.introduce{
						width: 210px;
						margin-left:15px ;
						display: flex;
						flex-direction: column;
						justify-content: space-between;
						.introduce_className{
							color: #999;
							flex: 1;
						}
						.introduce_price{
							font-size: 16px;
							display: flex;
							align-items: flex-end;
						    justify-content: space-between;
						    width: 210px;
							p:nth-child(1){
								color: red;
							}
							p:nth-child(2){
								color: #999;
								font-size: 13px;
								text-decoration: line-through;
								margin-left:15px ;
								flex: 1;
							}
							p:nth-child(3){
								display: flex;
								margin-left:25px ;
								justify-content: space-between;
								i:nth-child(1){
									display: block;
									width: 20px;
									height: 20px;
									text-align: center;
									line-height: 20px;
									background-color: #f4f4f8;
    								color: #ff464e;
								}
								i:nth-child(2){
										width: 35px;
										height: 20px;
										border: none;
										text-align: center;
									}
								i:nth-child(3){
									text-align: center;
									line-height: 20px;
									display: block;
									width: 20px;
									height: 20px;
									background-color: #f4f4f8;
									color: #ff464e;
								}
							}
						}
					}
				}
			}
		}
		.jiesuan{
			width: 100%;
			height: 50px;
			background: #fff;
			position: fixed;
			bottom:0.5rem;
			left: 0;
			display: flex;
			justify-content: space-between;
			padding-left: 15px;
			.checkbox{
				display: flex;
				align-items: center;
			}
			.zongjia{
				flex: 1;
				text-align: right;
				p{
					display: inline-block;
					span{
						color: red;
					}
				}
			}
			.zonghe{
				height: 100%;
				width: 100px;
				background: red;
				color: #fff;
				text-align: center;
				line-height: 50px;
			}
		}
	}
</style>