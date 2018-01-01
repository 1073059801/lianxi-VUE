<template>
  <footer id="footer">
    <ul>
    	<li>
    		<i class="iconfont icon-xing"></i>
    	  收藏
    	</li>
    	<li>
    		<i class="iconfont icon-dianpu"></i>
            店铺
      </li>
      <li @click="addCart()">
            	加入购物车
      </li>
      <li>
            	立即购买
      </li>
    </ul>     
  </footer>
</template>

<script>
  import MyAjax from "@/md/MyAjax.js"
  import { Toast,Field,Button  } from 'mint-ui';
  export default {
    data(){
      return {
      }
    },
    methods:{
      addCart(){
        /*
         * 此处有坑
         * 判断有没有登录，登录之后再加入，否则先登录
         */
        var userID = localStorage.getItem("userID");
        var goodsID = this.$route.params.goodsID;
        var url = "http://datainfo.duapp.com/shopdata/updatecar.php";
        url += "?userID=" + userID + "&goodsID=" + goodsID + "&number=1";
         MyAjax.fetch(url,(data) => {
           console.log(data)
           if(data == "1"){
             Toast('加入购物车成功');
           }else{
             alert("gg")
           }
         });
      }
    }
  }
</script>

<style scoped="" lang="scss">
  @charset "utf-8";
  @import "~@/lib/reset.scss";
  
  ul{
    @include rect(100%, 100%);
    @include flexbox();
    li{
      /*@include flex();*/
       
      @include flexbox();
       @include flex-direction(column);
       @include justify-content();
       @include align-items();
       
       
    }
  }
  #container #footer ul li{
    &:nth-child(1), &:nth-child(2){
         @include flex(1);
         @include rect(auto, 100%);
       }
       &:nth-child(3), &:nth-child(4){
         @include flex(3);
         @include rect(auto, 100%);
         
         @include font-weight();
       }
       &:nth-child(3){
         @include bgcolor(#fedc3c);
         @include textcolor(#fff);
       }
       &:nth-child(4){
         @include bgcolor(#F66);
         @include textcolor(#fff);
       }
  }
</style>