<template>
	<div id="content">
		<!--<input type="text" v-model = "userID" @focus = "userIDfn()" @blur="blurUserID(userID)" placeholder="账号"/>
		<input type="password" v-model = "password" placeholder="密码"/>
		<input type="button"  value="登录"  @click="login(userID,password)"/>
		
		 <p v-if = "code == '0'">用户名不存在</p>
	     <p v-if = "code == '2'">密码错误</p>-->
	     
	       <mt-field label="用户名" placeholder="用户名" v-model="userID"></mt-field>
	       <mt-field label="密码" placeholder="请输入密码" type="password" v-model="password"></mt-field>
	       <mt-button style="margin-top: 30px;" type="danger" size="large" @click="login(userID,password)">
		     	登录
		   </mt-button>
		   <div class="fenlei">
		   		 <router-link to="/register">
			   		<a href="#">立即注册</a>
			   	 </router-link>
			   	  <router-link to="/register">
				   	<a href="#">忘记密码？</a>
				  </router-link>
		   </div>
	</div>
</template>

<script>
import Vue from "vue"
import MyAjax from "@/md/MyAjax.js"
import { Toast,Field,Button  } from 'mint-ui';
  
	export default {
		data(){
			return {
				userID:"是不是傻",
				password:"111111"
			}
		},
		methods:{
		userIDfn(){
			this.userID = "";
			this.password = "";
		},
		 blurUserID(userID){
        
      	},
		login(userID,password){
			var that = this;
			var registerUrl = "http://datainfo.duapp.com/shopdata/userinfo.php";
			registerUrl += "?status=login&userID=" + userID + "&password=" +password; 
			
			
			 MyAjax.fetch(registerUrl,(data) => {
		       console.log(data)
				if( data =="0" ){
					Toast('用户名不存在');
					setTimeout(() => {
					 	this.userID = "";
						this.password = "";
					 },2000)
				}else if( data == "2" ){
					Toast('密码错误');
					setTimeout(() => {
					 	this.userID = "";
						this.password = "";
					 },2000)
				}else{
					Toast('登陆成功');
					localStorage.setItem("userID",data.userID)
					setTimeout(() => {
					 	this.userID = "";
						this.password = "";
						that.$router.push("/home")
					 },1000)
				}
		    })
		}
	}
}
</script>

<style scoped lang = "scss">
	 p{
	    color: #f00;
	  }
	  input{
	    text-indent: 12px;
	    width: 80%;
	    height: 30px;
	    border: 1px solid #999;
	    margin: 5px 10%;
	  }
	  input[type='button']{
	    text-indent:0;
	    border: 0;
	  }
	  .fenlei{
	  	margin-top: 20px;
	  	width: 100%;
	  	text-align: right;
	  }
</style>