<template>
	<div id="content">
		
		<!--<input type="text" v-model = "userID" @focus = "userIDfn()" @blur="blurUserID(userID)" placeholder="账号"/>
		<input type="password" v-model = "password" placeholder="密码"/>
		<input type="button"  value="注册"  />-->
		
		 <!--<p v-if = "code == '0'">用户名重名</p>
	     <p v-if = "code == '1'">注册成功</p>
	     <p v-if = "code == '2'">注册失败</p>-->
	     
	     <!--<mt-button  style="margin-top: 30px;" type="danger" size="large" @click="register(userID,password)">
	     	注册
	     </mt-button>-->
	     <ul>
	     	<li>
	     		<table>用户名</table>
	     		<input v-model="userID" type="text" name="text" id="text" placeholder="请输入用户名"/>
	     	</li>
	     	<li>
	     		<table>密码</table>
	     		<input v-model="password" type="password" name="pass" id="pass" value="" placeholder="请输入密码" />
	     	</li>
	     	<li>
	     		<table>验证码</table>
	     		<input v-model="captcha" type="text" name="yzm" id="yzm" value="" placeholder="请输入验证码" />
	     		<div class="yzm">
					  <p id="p" @click="aaa(4)">
					  	{{aaaa}}
					  </p>
	     		</div>
	     	</li>
	     	<input v-if="!flag" style="background: #007AFF;" type="button" name="btn" id="btn" value="注册" @click="input(userID,password)"/>
	     	<input v-else type="button" name="btn" id="btn" value="注册" @click="register(userID,password)"/>
	     </ul>
	     
	     
	     
	</div>
</template>

<script>
// import Vue from "vue"
    import MyAjax from "@/md/MyAjax.js"
	import { Toast,Field,Button  } from 'mint-ui';
	import jquery from '@/md/jquery-1.11.3.js'
  
	export default {
		data(){
			return {
				userID:"",
				password:"",
				captcha:"",
				flag:false,
				aaaa:""
				
			}
		},
	methods:{
		userIDfn(){
			this.userID = "";
			this.password = "";
			this.captcha = "";
		},
		 blurUserID(userID){
        
      	},
		register(userID,password){
			var that = this;
			var registerUrl = "http://datainfo.duapp.com/shopdata/userinfo.php";
			var bbb = this.password;
			
			
			registerUrl += "?status=register&userID=" + userID + "&password=" + password; 
			
			 MyAjax.fetch(registerUrl,(data) => {
//		       console.log(data)
//		       that.prolist = data;
				if( data =="0" ){
					that.code = 0;
					Toast('用户名重名');
					setTimeout(() => {
					 	that.code = "";
					 	that.userID = "";
					 	that.password = "";
					 	that.captcha = "";
					 },2000)
					
				}else if( data == "1" ){
          			Toast('注册成功');
					that.code = 1;
					this.$router.push("./login")
				}else if( data == "2" ){
					that.code = 2;
					setTimeout(() => {
					 	that.code = "";
					 	that.userID = "";
					 	that.password = "";
					 	that.captcha = "";
					 },2000)
				}
		    })
		},
		aaa(n){
				var sNum="";
				for(var i=0;i<n;i++){
					var num=Math.floor(Math.random()*10);
					sNum+=num;
				}
				$("#p").html(sNum);
		},
		input(){
			var pas = /^[^\s]{6,16}$/;
			var Text = /[\u4E00-\u9FA5]/;
			var sun = $("#p").html();
			var that = this;
			
			if(!Text.test(this.userID)){
				Toast('用户名为中文');
			}else if( !pas.test(this.password) ){
				Toast('密码请输入6-16个字符,不能添加空格哦');
			}else if(this.captcha != sun){
		 		Toast('验证码错误');
			}else{
				that.flag = true;
			}
		}
	},
	mounted(){
		this.aaa(4);
	}
}
</script>

<style scoped lang = "scss">
#content{
	
	ul{
		width:100%;
		padding: 20px;
		li{
			padding: 5px 10px;
			width: 100%;
			display: flex;
			overflow: hidden;
			border-bottom: 1px solid #eee;
			table{
				float: left;
				width: 20%;
				font-size: 20px;
				height: 30px;
				color: #0086B3;
				line-height: 30px;
			}
			input{
				float: left;
				width: 50%;
				border: none;
				margin-left: 20px;
			}
			.yzm{
				width: 18%;height: 30px;
				margin-left: 15px;
				text-align: center;
				background: url(../assets/yzm.png) repeat;
				p{
					color: red;
					font-size: 25px;
				}
			}
		}
		#btn{
			width: 100%;
			margin-top: 20px;
			background: red;
			border: none;
			height: 40px;
			font-size: 20px;
			color: #fff;
			border-radius: 20px;
		}
	}
}
	 
</style>