<template>
	<div id="content">
		
		<div class="Center1" v-if = "isLogin">
			<button class="touxiang" @click="sheetVisible = true">
				点击换头像
			</button>
			<p>{{userID}}</p>
		</div>
		
		<div class="Center" v-else>
			<router-link to="/register">
				<p style="color: #fff;">注册</p>
		 	</router-link>
		 	<div class="border">
		 		
		 	</div>
		 	<router-link to="/login">
		 		<p style="color: #fff;">登录</p>
		 	</router-link>
		</div>
		
		<ul class="bottom">
			<li>
				<i id="icon" class="iconfont icon-book"></i>
				<p>我发布的</p>
				<i class="iconfont icon-arrow-right"></i>
			</li>
			<div id="border"></div>
			<!--------------------------------------------------------------->			
			<li>
				<i id="icon" class="iconfont icon-womaichude"></i>
				<p>我卖出的</p>
				<i class="iconfont icon-arrow-right"></i>
			</li>
			<div id="border"></div>
			<!--------------------------------------------------------------->	
			<li>
				<i id="icon" class="iconfont icon-womaidaode"></i>
				<p>我买到的</p>
				<i class="iconfont icon-arrow-right"></i>
			</li>
			<div id="border"></div>
			<!--------------------------------------------------------------->
			<li>
				<i id="icon" class="iconfont icon-wodeshoucang"></i>
				<p>我收藏的</p>
				<i class="iconfont icon-arrow-right"></i>
			</li>
			<div id="border"></div>
			<!--------------------------------------------------------------->			
			<li>
				<i id="icon" class="iconfont icon-wodepaimai"></i>
				<p>我拍卖的</p>
				<i class="iconfont icon-arrow-right"></i>
			</li>
			<div id="border"></div>
			<!--------------------------------------------------------------->			
			<li>
				<i id="icon" class="iconfont icon-wodebaobei"></i>
				<p>我的宝贝</p>
				<i class="iconfont icon-arrow-right"></i>
			</li>
			<div id="border"></div>
			<!--------------------------------------------------------------->			
			<li style="border-top:10px solid #eee ;">
				<i id="icon" class="iconfont icon-10003"></i>
				<p>我的设置</p>
				<i class="iconfont icon-arrow-right"></i>
			</li>
			<div id="border"></div>
			<!--------------------------------------------------------------->	
			<router-link to="/login" v-if = "isLogin">
		 		<li id="icon" @click="logout()">
					<i class="iconfont icon-tuichudenglu1"></i>
					<p>退出登录</p>
					<i class="iconfont icon-arrow-right"></i>
				</li>
				<div id="border"></div>
		 	</router-link>
			<!--------------------------------------------------------------->	
		</ul>
		<mt-actionsheet
		  :actions="actions"
		  v-model="sheetVisible">
		</mt-actionsheet>
	</div>
</template>

<script>
import Vue from "vue"
import { Actionsheet } from 'mint-ui';

Vue.component(Actionsheet.name, Actionsheet);
	export default {
		data(){
			return{
				isLogin:false,
	        	userID:"",
	        	sheetVisible:false,
	        	actions:[{
		          name:"拍照",
		          method:this.takePhoto() 
		        },
		        {
		          name:"选取",
		          method:this.getPhoto() 
		        }]
			}
		},
		mounted(){
	      if(localStorage.getItem("userID")){
	        this.isLogin = true;
	        this.userID = localStorage.getItem("userID")
	      }
	    },
	    methods:{
	      getPhoto(){
	         console.log("选取")
	      },
	      takePhoto(){
	        console.log("拍照")
	      },
	      logout(){
	        localStorage.removeItem("userID");
	        this.$router.push("/login")
	      }
	    }
	}
</script>

<style scoped lang = "scss">
@import "~@/lib/reset.scss";
#content{
	margin-top:-1px;
	.Center{
		height:100px;
		width:100%;
		background:#fedc3c;
		display:flex;
		justify-content: space-around;
		align-items: center;
		font-size:20px;
		color:#fff;
		.touxiang{
			width: 0.6rem;
			height:0.6rem;
			border: 1px solid #fff;
			border-radius: 50%;
		}
		.border{
			border-left: 2px solid #fff;
			height: 50px;
		}
	}
	.Center1{
		height:100px;
		width:100%;
		background:#fedc3c;
		display:flex;
		align-items: center;
		font-size:20px;
		color:#fff;
		padding-left: 20px;
		.touxiang{
			width: 0.6rem;
			height:0.6rem;
			border: 3px solid #fff;
			border-radius: 50%;
			background: #55A532;
			color: #fff;
			font-size: 15px;
		}
		p{
			margin-left: 20px;
			color: #000000;
		}
		.border{
			border-left: 2px solid #fff;
			height: 50px;
		}
	}
	.bottom{
		width: 100%;
		height: auto;
		padding: 0.05rem 0.1rem;
		border-top: 15px solid #eee;
		li{
			height: 40px;
			display: flex;
			justify-content: space-between;
			align-items: center;
			
			#icon{
				color: #FEDC3C;
			}
			.iconfont{
				font-size: 20px;
			}
			p{
				flex: 1;
				margin-left: 0.2rem;
				font-size: 18px;
			}
		}
		#border{
			overflow: hidden;
		    font-size: 0.075rem;
		    color: #999;
		    margin-left: 0.25rem;
		    padding-bottom: 0.05rem;
		    border-bottom: 1px solid hsla(0,0%,87%,.5);

		}
	}
}
</style>