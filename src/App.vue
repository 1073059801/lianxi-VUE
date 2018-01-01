<template>
  <div id="container">
    <router-view name="header"></router-view>
    <router-view name="content"></router-view>
    <router-view name="footer"></router-view>
  </div>
</template>

<script>

export default {
//components:{
//  "v-footer": Footer
//}
}
</script>

<style  lang="scss">
	@charset "utf-8";
	@import "~@/lib/reset.scss";
	
	html,body,#app,#container{
		@include rect(100%, 100%)
	}
	
#container{
		@include flexbox();
		@include flex-direction(column);
		#header{
			@include rect(100%, 0.4rem);
			@include bgcolor(#fedc3c);
		}
		#content{
			@include flex();
			@include rect(100%, auto);
			overflow: auto;
			#swiper-pagination span{
				background:#fedc3c;
			}
		}
		#footer{
			@include rect(100%, 0.5rem);
			ul{
				@include flexbox();
				@include rect(100%, 100%);
				li{
					@include rect(100%, 100%);
					@include flex()
					
					a{
						 @include rect(100%,  100%);
             @include flexbox();
             @include flex-direction(column);
             @include justify-content();
             @include align-items();
             @include textcolor(#333);
             
             &.router-link-active{
             	@include textcolor(#fedc3c);
             	
             }
					}
				}
			}
		}
	}
</style>

