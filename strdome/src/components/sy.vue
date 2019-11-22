<template>
  <div class="hello">
    <tb> <h3>首页</h3></tb>
    <swiper :ff1="msg1"></swiper>
    <h3>热门图书</h3>
    <div class="a1">
      <div  @click="fn(a)"  v-for="(a,b) of  msg" :key="b" >
        <img :src="a.bookImg" alt="">
        <p>{{a.bookName}}</p>
        <p>{{a.bookPrice | fn1(2)}}</p>
      </div>
    </div>
    <db></db>
  </div>
</template>

<script>
  import db from "../base/db"
  import tb from "../base/tb"
  import swiper from "../base/swiper"
  import {a1,a21} from "../api"
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      msg1:""
    }
  },
  components:{
    tb,swiper,db
  },
  created() {
   this.get();
    this.get1()
  },
  methods:{
    get(){
      return  a1().then((a)=>{
        //console.log(a.data.hotlist);
        this.msg=a.hotlist
      });
    },
    get1(){
      a21().then((a)=>{
        //console.log(a.data.banner);
        this.msg1=a.banner

      });
    },
    fn(index){
      this.$router.push({path:"/xq",query:{xq:index.bookId}})

    }
  },
  filters:{
    fn1(a,b){
      // console.log(a);
      return "￥"+Number(a).toFixed(b);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.a1{
  width: 90%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  img{
    width: 50%;
  }
  div{
    width: 50%;
    p{
      width: 100%;
      font-size: .8rem;
    }
    p:nth-of-type(2){
      color: red;
    }
  }
}
  .hello{
    margin-bottom: 60px;
  }
</style>
