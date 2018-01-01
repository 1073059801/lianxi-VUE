<template>
  <footer id="footer">
    <ul>
    	<li v-for = '(item, index) in list' :key='index'>
    	  <router-link :to='item.path'>
      	  <i class="iconfont" :class = "item.icon"></i>
      	  <p>{{item.name}}</p>
    	  </router-link>
    	</li>
    </ul>     
  </footer>
</template>

<script>
  
  export default {
    data(){
      return {
        list: [
          {
            icon:'icon-shouye',
            name:"首页",
            path:"/home"
          },{
            icon:'icon-wodeyutang',
            name:"鱼塘",
            path:"/kind"
          },{
            icon:'icon-xiaoxi1',
            name:"消息",
            path:"/news"
          },{
            icon:'icon-gouwuche',
            name:"购物车",
            path:"/cart"
          },{
            icon:'icon-wode',
            name:"我的",
            path:"/user"
          }
        ]
      }
    }
  }
</script>

<style scoped lang = "scss">
	#footer{
		 box-shadow: 0 -2px 5px #999;  
		 z-index: 999;
	}
</style>