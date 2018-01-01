<template>
	<div id="content">
		<div class="swiper-container" id="banner">
	        <div class="swiper-wrapper">
	            <div class="swiper-slide" v-for = "(item, index) in bannerlist" :key="index">
	              <img :src="item">
	            </div>
	        </div>
	        <div class="swiper-pagination" id="swiper-pagination"></div>
   		</div>
    	<ul class="huodong">
    		<li>
    			<img src="../assets/huodong (1).png"/>
    		</li>
    		<li>
    			<img src="../assets/huodong (2).png"/>
    		</li>
    		<li>
    			<img src="../assets/huodong (3).png"/>
    		</li>
    		<li>
    			<img src="../assets/huodong (4).png"/>
    		</li>
    	</ul>
    	<div class="dianqi">
    		<img src="../assets/dianqihd.gif"/>
    	</div>
    	<div class="maihuo">
    		<ul id="prolist">
		    	<li v-for ="(item, index) in prolist">
		    		<router-link :to="{name:'detail', params:{goodsID:item.goodsID}}" >
			    		<img :src="item.goodsListImg"/>
			        	<p id="router-link">
				        	{{item.goodsName}}
			        	</p>
			        	<div class="buttom">
			        		<div class="baoyou">
				        		{{item.className}}
				        	</div>
			        		<p>￥{{item.price}}</p>
			        	</div>
		        	</router-link>
		    	</li>
		    </ul>
    	</div>
    	<div class="goto_top" @click="gt_top()"></div>
	</div>
</template>

<script>
	import MyAjax from "@/md/MyAjax.js"
	export default {
		data(){
			return {
				bannerlist: [],
				prolist: [],
				goodsListImg: [],
				price:[],
				className:[],
				imgsUrl:[],
        		goodsBenUrl:[]
			}
		},
		mounted(){
			  var that = this;
		      var Bannerurl = "http://datainfo.duapp.com/shopdata/getBanner.php"
		      MyAjax.fetchJsonp(Bannerurl, (data) => {
		        console.log(JSON.parse(data[0].goodsBenUrl)[1])
		        var arr = [];
		        for(var item of data){
		          arr.push(JSON.parse(item.goodsBenUrl)[1])
		        }
		        that.bannerlist = arr;
		      })
		      var Prourl = "http://datainfo.duapp.com/shopdata/getGoods.php"
		      MyAjax.fetchJsonp(Prourl, (data) => {
		        console.log(data);
		       that.prolist = data;
		       that.price = data;
		       that.goodsListImg = data;
		       that.className = data;
		       that.imgsUrl = data;
		       that.goodsBenUrl = data;
		      })
		      
		    $("#content").scroll(function(){
				if($("#content").scrollTop()>100){
					$(".goto_top").css("display","block")
				}else{
					$(".goto_top").css("display","none")
				}
			})
		},
		updated(){
			 var mySwiper = new Swiper ('.swiper-container', {
			    loop: true,
			    // 如果需要分页器
			    autoplay:3000,
			    autoplayDisableOnInteraction : false,
			    pagination: '.swiper-pagination',
	 		})    
		},
		methods:{
			gt_top(){
				$("#content").animate({"scrollTop":0},500)
			}
		}
	}
</script>

<style scoped lang = "scss">
@import "~@/lib/reset.scss";
#content{
	.swiper-container {
	    width: 100%;
	    height: 300px;
	    border-bottom: 1px solid #fedc3c;
	    img{
	    	width: 100%; height: 100%;
	    }
	} 
	.huodong{
		border-top:10px solid #fedc3c ;
		width: 100%;
		height: 100px;
		display: flex;
		li{
			width: 25%;
			img{
				width: 100%;
				height: 100%;
			}
		}
	}
	.dianqi{
		border-top:8px solid #fedc3c ;
		width: 100%;
		height: 150px;
		img{
			width: 100%;
			height:100%;
		}
	}
	.maihuo{
		width: 100%;
		ul{
			display:flex;
			flex-wrap: wrap;
			/*overflow: hidden;*/
			height: 100%;
			padding: 5px;
			li{
				width: 50%;height: 305px;
				display:border-box;
				img{
					width: 100%;
					height: 200px;
				}
				#router-link{
					margin-top: 0.08rem;
					display: block;
					height: 43px;
					color: #000000;
				}
				.buttom{
					padding-left: 5px;
					padding-right: 5px;
					.baoyou{
						    display: inline-block;
						    font-size: 9px;
						    border: 1px solid #c33;
						    color: #c33;
						    padding: .0266666667rem .08rem;
						    border-radius: .08rem;
					}
					p{
						margin-top: 0.05rem;
						color: red;
						font-weight: 900;
					}
				}
			}
		}
	}
	.goto_top{
		background:url(http://s1.ymatou.com/homem/images/gototop-2ab3b79818.png) no-repeat ;
		background-size: 40px 40px;
		border: 1px solid red;
		position: fixed;
		right:5%;
		bottom: 10%;
		width:40px;
		height:40px;
		display: none;
		border-radius:50% ;
	}
}

</style>