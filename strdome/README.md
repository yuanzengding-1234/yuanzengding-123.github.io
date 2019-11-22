环境：node，webpack@4.1.0/webpack-cli ,vue-cli 全局安装

使用npm install 跑环境（就是将项目中需要的依赖按照package.json列表安装一遍
安装完成后，会有node_modules文件夹）

项目结构：
build：webpack配置，如需加loader，在webpack.base.conf.js中配置loader
config：项目配置，如更改启动的端口号
mock 模拟数据 :模拟的数据需要放static文件下面，因为其他文件下读取不了
api 调取接口
base 基础组件(全局组件)
components 页面组件
router ->index.js 路由

购物车实现：
详情页面，加入购物车，存cookie
（注意，cookie中存的时候字符串类型的，定义的需要是个对象类型的值，对象的key是商品id，value是购买了多少个商品，取出cookie的时候，需要转义成对象类型的值操作）
购物车页面取出来cookie的值，对比所有的商品，筛选出和cookie中一致的商品


启动项目：
请先cd 到项目的根目录
启动命令：npm run dev

使用的插件：
vue-router 路由组件（生成项目时已安装）
axios 调取接口：
npm install axios

轮播图插件：
下载轮播图插件(不要下载最高版本的，因为高版本的使用的是swiper4文档)
npm install vue-awesome-swiper@2.5.4 
vue-awesome-swiper文档：https://github.com/surmon-china/vue-awesome-swiper
https://blog.csdn.net/qq_41108402/article/details/80546626

项目中：
1，先在入口文件（main.js）引入
顺序是先引入，再调用css
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
（这个css路径根据node_modules中的swiper里面的css路径，如果报错，查看node_modules中的swiper路径）
Vue.use(VueAwesomeSwiper);
（使用Vue.use注册一下VueAwesomeSwiper，目的是供全局使用）

2,创建Swiper.vue

3,在首页引入Swiper.vue
import Swiper from '../base/Swiper';路径自己定
（注意：Swiper.vue中导入的是Swiper）
在首页中components注册一下Swiper组件，最后使用<Swiper></Swiper>



 使用less写样式：
 npm install less
