<template>
 <div id="content">
  	<div class="swiper-container" id="banner">
  		 <div class="swiper-wrapper">
	  		<div class="swiper-slide" v-for = "(banner, index) in bannerlist" :key="index">
	  			<img :src="banner"/>
	  		</div>
  		</div>
  		<div class="swiper-pagination" id="swiper-pagination"></div>
  	</div>
  	
  	<div class="introduce">
  		<p class="goodsName">
  		<span class="baoyou">
  			包邮
  		</span>
  		<span class="class">
  			{{className}}
  		</span>
  			{{goodsName}}
  		</p>
  		<div class="price">
  			￥{{price}}
  			<p>{{discount}}折</p>
  		</div>
  	</div>
  	
  	<div class="xuanxiang">
  		<div class="xuanxiang_wuliu">
  			<p>
  				物流
  			</p>
  			<span>
  				默认：圆通，韵达，中通，随机
  				<i class="iconfont icon-arrow-right"></i>
  			</span>
  		</div>
  		<div class="border"></div>
  		<div class="xuanxiang_yunfei">
  			<p>运费</p>
  			<span>
  				包邮	
  			</span>
  		</div>
  		<div class="xuanxiang_jia">
  			<i class="iconfont icon-jiayipeishi"></i> 假一赔十 
  			<i class="iconfont icon-shouhouwuyou"></i> 售后无忧
  		</div>
  		<div class="xuanxiang_guize">
  			<p>选择</p>
  			<span>
  				规则	
  				<i class="iconfont icon-arrow-right"></i>
  			</span>
  		</div>
  	</div>
  	
  	<div class="shangpinjieshao">
  		<div class="bt_title">
  			<span>
  				详情
  			</span>
  		</div>
  	</div>
  	<div class="tuwen">
  		<div class="box">
  			图文详情
  		</div>
  		<div class="xuzhi">
  			<div class="bt_title">
  				<span>买家须知</span>
  			</div>
  			<p>
  				下单前请仔细阅读买家须知，确认可以接受再下单。包裹送到后一定要先验货，一定要先验货，一定要先验货，没问题再签收。有破损等问题不要签收！请马上联系客服！签收后请不要再来说有破损问题不能接受。谢谢理解
  			</p>
  		</div>
  		<div class="jieshao">
  			<div class="bt_title">
  				<span>商品介绍</span>
  			</div>
  			<p>
				{{detail}}
			</p>
  		</div>
		<div class="list">
			<div class="listCon">
				<div class="top">
					<div class="left">
					    <div class="toppic">
							<img src="" alt="" class="tx"/>
						</div>
						<div class="text">
							<p>首尔在线直播</p>
							<p>超级买手<span>4.7</span></p>
						</div>
					</div>
					<div class="guanzhu"></div>
				</div>
				<div class="center">
					<ul>
						<li>
						     <p>最近销量</p>
						     <p>2222</p>
						</li>
						<li>
						     <p>粉丝</p>
						     <p>2222</p>
						</li>
						<li>
						     <p>综合评分</p>
						     <p>4.7</p>
						</li>
						<li>
						    <p>买家频分<span>4.7</span></p>
						    <p>买家频分<span>4.7</span></p>
						    <p>买家频分<span>4.7</span></p>
						</li>
					</ul>
				</div>
			</div>
		</div>
  		<ul id="xiangping">
	  		<li v-for = "(xiangqing, index) in bannerlist2" :key="index">
	  			<img :src="xiangqing"/>
	  		</li>
	  	</ul>
  	</div>
  	
  	<br />
  	
  	<br />
  	
    <!--<img :src="goodsListImg"/>-->
     <br/>
   <img :src="goodsBenUrl"/>
    <br/>
  </div>
</template>

<script>
   import MyAjax from "@/md/MyAjax.js"
export default {
    data(){
      return {
      	bannerlist: [],
      	bannerlist2: [],
        goodsName:"",
        goodsListImg:"",
        imgsUrl:[],
        goodsBenUrl:[],
        detail:"",
        goodsName:"",
        price:"",
        discount:"",
        className:""
      }
    },
    mounted(){
      var that = this;
      var goodsID = this.$route.params.goodsID;
      var url = "http://datainfo.duapp.com/shopdata/getGoods.php?goodsID="+goodsID;
       MyAjax.fetchJsonp(url,(data) => {
//     		console.log(data[0])
	        that.goodsName = data[0].goodsName;
	        that.goodsListImg = data[0].goodsListImg;
       		that.detail = data[0].detail;
       		that.className = data[0].className;
       		that.goodsName = data[0].goodsName;
       		that.price = data[0].price;
       		that.discount = data[0].discount;
       	
//      console.log(data[0])
   			var arr = [];
   			var brr = [];
   			//banner
	        for(var item of data){
//		          arr.push(eval(item.imgsUrl))
	          var aaa = eval(item.imgsUrl)
	          for ( var banner of aaa ) {
//	          	console.log( banner )
	          	arr.push(banner)
	          }
	          that.bannerlist = arr;
	          //详情
	          var bbb = eval(item.goodsBenUrl)
	          for ( var xiangqing of bbb ) {
//	          	console.log( xiangqing )
	          	brr.push(xiangqing)
	          }
	          that.bannerlist2 = brr;
	        }
       })
    },
    updated(){
			 var mySwiper = new Swiper ('.swiper-container', {
			    loop: true,
			    // 如果需要分页器
			    autoplayDisableOnInteraction : false,
			    pagination: '.swiper-pagination',
	 		})    
		}
    
}
</script>

<style scoped lang="scss">
@import "~@/lib/reset.scss";
#content{
	#banner{
		width: 100%;height: 360px;
		img{
			width: 100%;height: 100%;
		}
	}
	#xiangping{
		width: 100%;
		height: auto;
		margin-top: 50px;
		img{
			width: 100%;height: auto;
		}
	}
	.introduce{
		width: 100%;height:auto;
		border-top: 0.1rem solid #fedc3c;
		border-bottom: 0.01rem solid #FEDC3C;
		padding: 0.05rem;
		p{
			font-size: 0.16rem;
		}
		span{
		    margin-left: 0.05rem;
		}
		.baoyou{
			display: inline-block;
		    font-size: 9px;
		    border: 1px solid #c33;
		    color: #c33;
		    padding: .0266666667rem .08rem;
		    border-radius: .08rem;
		    float: left;
		}
		.class{
			display: inline-block;
		    font-size: 9px;
		    border: 1px solid #c33;
		    color: #c33;
		    padding: .0266666667rem .08rem;
		    border-radius: .08rem;
		}
		.goodsName{
			display: inline-block;
		}
		.price{
			display: flex;
			margin-top: 0.05rem;
			color: red;
			font-weight: 900;
			font-size: 0.25rem;
			p{
				font-size: .1.5rem;
				margin-left: 0.05rem;
				margin-top: 0.10rem;
			}
		}
	}
	.xuanxiang{
		width: 100%;
		height: auto;
		border-top:0.05rem solid #FEDC3C ;
		.xuanxiang_wuliu{
			display: flex;
			width: 100%;
		    overflow: hidden;
		    padding: 0.075rem 0.075rem 0.05rem;
		    position: relative;
		    span{
		    	margin-left: 0.15rem;
		    	flex: 1;
		    	display: flex;
		    	justify-content: space-between;
		    	i{
		    		
		    		text-align: right;
		    	}
		    }
		}
		.border{
			    overflow: hidden;
			    font-size: 0.075rem;
			    color: #999;
			    margin-left: 0.25rem;
			    padding-bottom: 0.05rem;
			    border-bottom: 1px solid hsla(0,0%,87%,.5);
		}
		.xuanxiang_yunfei{
			display: flex;
			width: 100%;
		    overflow: hidden;
		    padding: 0.075rem 0.075rem 0.05rem;
		    position: relative;
		    span{
		    	margin-left: 0.15rem;
		    	flex: 1;
		    	display: flex;
		    	justify-content: space-between;
		    	i{
		    		
		    		text-align: right;
		    	}
		    }
		}
		.xuanxiang_jia{
			color: red;
			background: #f8f8f8;
			padding-left:0.15rem ;
		}
		.xuanxiang_guize{
			display: flex;
			width: 100%;
		    overflow: hidden;
		    padding: 0.075rem 0.075rem 0.05rem;
		    position: relative;
		    border-top: 12px solid #eee;
		    span{
		    	margin-left: 0.15rem;
		    	flex: 1;
		    	display: flex;
		    	justify-content: space-between;
		    	i{
		    		
		    		text-align: right;
		    	}
		    }
		}
	}
	.shangpinjieshao{
		height: 50px;
		text-align: center;
		background: #eee;
		.bt_title{
			margin-top: 25px;
			display: inline-block;
			height: 1px;
			background: #ccc;
			width: 200px;
			position: relative;
			span{
				display: inline-block;
				background: #eee;
				width: 100px;
				position: relative;
				top: -14px;
				color: #ccc;
				font-size: 18px;
			}
		}
		.bt_title:before{
	    	    position: absolute;
			    content: '';
			    width: 0.1rem;
			    height: 0.1rem;
			    border-radius: 50%;
			    background: #ccc;
			    top:-0.04rem;
			    right:0;
			    box-shadow: 0 1px 0 #fff;
		    }
	    .bt_title:after{
	    	    position: absolute;
			    content: '';
			    width: 0.1rem;
				height: 0.1rem;
			    border-radius: 50%;
			    background: #ccc;
			    top: -0.04rem;
			    left:0;
			    box-shadow: 0 1px 0 #fff;
	    }
	}
	.tuwen{
		.box{
			height: 38px;
			line-height: 38px;
			padding-left: 0.05rem;
			border-bottom: 1px solid #999999;
		}
		.xuzhi{
			    padding: 10px;
				text-align: center;
			.bt_title{
				display: inline-block;
				height: 2px;
				background: red;
				width: 200px;
				position: relative;
				margin-top:20px;
				span{
					width: 100px;
					display: inline-block;
					position: relative;
					top: -8px;
					background: #fff;
				}
			}
			p{
				margin-top: 0.15rem;
			}
		}
		.jieshao{
			 	padding: 10px;
				text-align: center;
				margin-top: 0.15rem;
			.bt_title{
				display: inline-block;
				height: 2px;
				background: red;
				width: 200px;
				position: relative;
				margin-top:20px;
				span{
					width: 100px;
					display: inline-block;
					position: relative;
					top: -8px;
					background: #fff;
				}
			}
		}
		.list{
			width:100%;
			height:220px;
			padding:10px;
			.listCon{
				width:100%;
				height:210px;
				border:1px solid #ccc;
				
				.top{
					width:100%;
					height:40px;
					background:#ccc;
					display:flex;
					justify-content: space-between;
					align-items: center;;
					.left{
					   display:flex;
					   align-items:center;
						.toppic{
							width:30px;
							height:30px;
							background:#63A35C;
							border-radius: 50%;
						}
						.text{
							margin-left:0.05rem ;
						}
					}
					.guanzhu{
						width:70px;
						height:28px;
						border:1px solid #000;
						border-radius:5px;
						margin-right:12px;
					}
				}
				.center{
					width:100%;
					height: 65px;
					background:#caa;
					margin-top:10px;
					ul{
						
						display:flex;
						justify-content: space-around;
						li{
							
						}
					}
				}
			}
		}
		
		
	}
	
}
</style>