<template>
    <div>
      <tb :ff="true"><h3>商品详情</h3></tb>
      <swiper :ff1="msg1"></swiper>
      <p>书名:{{msg.bookName}}</p>
      <p>价钱：{{msg.bookPrice | fn(2)}}</p>
      <p>详情：{{msg.bookInfo}}</p>
      <img :src="msg.bookImg" alt="">
      <div class="a2"><i class="iconfont icon-gouwuchekong"></i><div class="j1" v-if="aaa">+1</div><p class="a1" @click="fn11(msg.bookId)">加入购物车</p></div>
    </div>
</template>

<script>
  import swiper from '../../base/swiper'
  import tb from '../../base/tb'
  import {a21,a1} from "../../api"
  import Cookies from "js-cookie";
    export default {
        name: "xq",
      data(){
          return {
            msg1:"",
            msg:"",
            aaa:false,
            shoplist:""
          }
      },
      props:['fff'],
      components:{
        swiper, tb
      },
      created() {
        this.get1();
        this.get();
      },
      methods:{

        get1(){
          a21().then((a)=>{
            this.msg1=a.banner
          });
        },get(){
          a1().then((a)=>{
            this.msg=a.hotlist[this.$route.query.xq-1];
          });
        },
        fn11(pid){
          this.aaa=true;

          var shoplists=Cookies.get('shoplist');
          var ary = {};
          if(shoplists){
            ary = JSON.parse(shoplists);
            if(ary[pid]){
              ary[pid] += 1;
            }else{
              ary[pid] = 1;
            }
          }else{
            console.log(pid);

            ary={[pid]:1};
          }
          console.log(ary);
          Cookies.set('shoplist',JSON.stringify(ary));
          setTimeout(() => {
            this.aaa=false;
          }, 1000);

        }
      },
      filters:{
          fn(a,b){
            return "￥"+Number(a).toFixed(b)
          }
      }
    }

</script>

<style lang="less" scoped>
div{
  p{
    text-align: left;
  }
  div.a2{
    display: flex;
    justify-content: space-between;
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 40px;
    i{
      width: 30%;
      height: 40px;
      font-size: 30px;
    }
    p.a1{
      width: 70%;
      background: red;
      height: 40px;
      line-height: 40px;
      text-align: center;
      margin: 0;
    }
    div.j1{
      border-radius: 50%;
      width: 30px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      background: red;
      position: absolute;
      left: 4rem;
      top: -1rem;
    }
  }
}
</style>
