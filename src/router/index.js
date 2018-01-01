import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

//引入相关模块
import HomeHeader from '@/components/HomeHeader.vue'
import Home from '@/components/Home.vue'
import KindHeader from '@/components/KindHeader.vue'
import Kind from '@/components/Kind.vue'
import NewsHeader from '@/components/NewsHeader.vue'
import News from '@/components/News.vue'
import CartHeader from '@/components/CartHeader.vue'
import Cart from '@/components/Cart.vue'
import UserHeader from '@/components/UserHeader.vue'
import User from '@/components/User.vue'
import DetailHeader from '@/components/DetailHeader.vue'
import Detail from '@/components/Detail.vue'
import DetailFooter from "@/components/DetailFooter.vue"
import Footer from "@/components/Footer.vue"
import LoginHeader from '@/components/LoginHeader.vue'
import Login from '@/components/Login.vue'
import RegisterHeader from '@/components/RegisterHeader.vue'
import Register from '@/components/Register.vue'
//import SearchHeader from '@/components/SearchHeader.vue'
import Search from '@/components/Search.vue'

export default new Router({
  routes: [
    {
      path: "/",
      redirect:"/home"
    },
    {
      path: "/kind",
      redirect:"/kind/1"
    },
    {
      path:"/home",
      name:"home",
      components:{
        header: HomeHeader,
        content:Home,
        footer:Footer
        
      }
    },
    {
      path:"/kind",
      name:"kind",
      components:{
        header: KindHeader,
        content:Kind,
        footer:Footer
      }
    },
     {
      path:"/kind/:classID",
      name:"kindtype",
      components:{
        header: KindHeader,
        content:Kind,
        footer:Footer
      }
    },
     {
      path:"/news",
      name:"news",
      components:{
        header: NewsHeader,
        content:News,
        footer:Footer
      }
    },
    {
      path:"/cart",
      name:"cart",
      components:{
        header: CartHeader,
        content:Cart,
        footer:Footer
      }
    },
    {
      path:"/user",
      name:"user",
      components:{
        header: UserHeader,
        content:User,
        footer:Footer
      }
    },
    {
      path:"/detail/:goodsID",
      name:"detail",
      components:{
        header: DetailHeader,
        content:Detail,
        footer:DetailFooter
      }
    },
    {
    	path:"/login",
    	name:"login",
    	components:{
    		header: LoginHeader,
    		content:Login,
    		footer:Footer
    	}
    },
    {
    	path:"/register",
    	name:"register",
    	components:{
    		header: RegisterHeader,
    		content:Register,
    		footer:Footer
    	}
    },
    {
    	path:"/search",
    	name:"search",
    	components:{
//  		header: SearchHeader,
    		content:Search,
    		footer:Footer
    	}
    }
  ]
})
