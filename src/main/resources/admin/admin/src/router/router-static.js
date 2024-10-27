import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
    import news from '@/views/modules/news/list'
    import qichezixun from '@/views/modules/qichezixun/list'
    import aboutus from '@/views/modules/aboutus/list'
    import putongguanliyuan from '@/views/modules/putongguanliyuan/list'
    import haichexinxi from '@/views/modules/haichexinxi/list'
    import forum from '@/views/modules/forum/list'
    import qicheleibie from '@/views/modules/qicheleibie/list'
    import quxiaodingdan from '@/views/modules/quxiaodingdan/list'
    import systemintro from '@/views/modules/systemintro/list'
    import yonghu from '@/views/modules/yonghu/list'
    import qichexinxi from '@/views/modules/qichexinxi/list'
    import messages from '@/views/modules/messages/list'
    import zuchedingdan from '@/views/modules/zuchedingdan/list'
    import config from '@/views/modules/config/list'


//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '系统首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '系统首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }
      ,{
	path: '/news',
        name: '公告信息',
        component: news
      }
      ,{
	path: '/qichezixun',
        name: '汽车资讯',
        component: qichezixun
      }
      ,{
	path: '/aboutus',
        name: '关于我们',
        component: aboutus
      }
      ,{
	path: '/putongguanliyuan',
        name: '普通管理员',
        component: putongguanliyuan
      }
      ,{
	path: '/haichexinxi',
        name: '还车信息',
        component: haichexinxi
      }
      ,{
	path: '/forum',
        name: '汽车论坛',
        component: forum
      }
      ,{
	path: '/qicheleibie',
        name: '汽车类别',
        component: qicheleibie
      }
      ,{
	path: '/quxiaodingdan',
        name: '取消订单',
        component: quxiaodingdan
      }
      ,{
	path: '/systemintro',
        name: '系统简介',
        component: systemintro
      }
      ,{
	path: '/yonghu',
        name: '用户',
        component: yonghu
      }
      ,{
	path: '/qichexinxi',
        name: '汽车信息',
        component: qichexinxi
      }
      ,{
	path: '/messages',
        name: '留言板管理',
        component: messages
      }
      ,{
	path: '/zuchedingdan',
        name: '租车订单',
        component: zuchedingdan
      }
      ,{
	path: '/config',
        name: '轮播图管理',
        component: config
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '系统首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})
const originalPush = VueRouter.prototype.push
//修改原型对象中的push方法
VueRouter.prototype.push = function push(location) {
   return originalPush.call(this, location).catch(err => err)
}
export default router;
