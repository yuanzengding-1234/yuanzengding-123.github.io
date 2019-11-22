<template>
    <div class="aa1">
      <tb :ff="true"> <h3>购物车</h3></tb>
      <div>
        <div class="a1">
          <p>全选：<input type="checkbox" v-model="checkall"></p>
          <p @click="fn33">删除选中</p>
          <p @>删除全部</p>
        </div>
        <ul>
          <li v-for="(a,b) of shoplist" :key="b">
            <input type="checkbox" v-model="a.ised">
            <img :src="a.bookImg" alt=""><br>
            <div>
              <p>{{a.bookName}}</p>
              <p>{{a.bookPrice | fn1}}</p>
              <p><button @click="fn2(b)">+</button><span>{{a.const}}</span><button @click="fn21(b)">-</button></p>
              <p>小计：{{a.const*a.bookPrice | fn1}} <span @click="fn3(b)">删除</span></p>
            </div>
          </li>
        </ul>
        <p>总价：{{sum | fn1}}</p>
      </div>
      <h3 @click="aa=true">结算</h3>
      <div class="a2" v-if="aa">
        <p>共消费{{mme}}元</p>
        <p><button @click="fnn">确定</button> <button @click="aa=false">取消</button></p>
      </div>
      <db></db>
      {{shoplist}}
    </div>
</template>

<script>
  import db from "../../base/db"
  import tb from "../../base/tb"
  import { a1 } from "../../api";
  import Cookies from "js-cookie";
    export default {
        name: "gwc",
      components:{
        tb,db
      },
      filters:{
          fn1(a){
            return "￥"+Number(a).toFixed(2)
          }
      },
      data() {
        return {
          shoplist: [],
          isnotshop: false,
          aa:false
        };
      },
      computed: {
        checkall: {
          get() {
            return this.shoplist.every((item, index) => {
              return item.ised;
            });
          },
          set(val) {
            this.shoplist.forEach(element => {
              element.ised = val;
            });
          }
        },
        sum: {
          get() {
            return this.shoplist.reduce((p, n) => {
              if (!n.ised) {
                return p;
              }
              return p + n.bookPrice * n.const;
            }, 0);
          }
        },
        mme(){
          var a1=0;
          this.shoplist.forEach((a,b)=>{
            if (this.shoplist[b].ised){
              a1+=this.shoplist[b].const*this.shoplist[b].bookPrice;
            }
          });
          return a1;
        }
      },
      created() {
        this.getl();
      },
      methods: {
        getl() {
          a1().then(res => {
            this.isnotshop = true;
            var shopc = Cookies.get("shoplist");
            //console.log(shopc);

            if (shopc) {

              var ary = JSON.parse(shopc);
              this.shoplist = res.hotlist.filter(item => {
                item.const = ary[item.bookId];
                item.ised = true;
                console.log(ary[item.bookId]);
                return ary[item.bookId]; //ary[4]
              });
              return
            }
            this.isnotshop = false;
          });
        },
        fn2(a){
          this.shoplist[a].const++;
        },
        fn21(a){
          this.shoplist[a].const--;
          if (this.shoplist[a].const==0){
            this.shoplist[a].const=1
          }
        },
        fn3(a){
         this.shoplist.splice(a,1);
         var ary={};
          var c=this.shoplist;
          for (var i=0;i<c.length;i++){
            //console.log(c[i]);
            ary[c[i].bookId]=c[i].const;
          }
          //console.log(ary);
          Cookies.set('shoplist',JSON.stringify(ary));
        },
        fn33(){
          var a=[];
          this.shoplist.forEach((a,b) =>{
            //console.log(this.shoplist[b].ised);
            if (this.shoplist[b].ised==false){
              a.push(this.shoplist[b])
            }
          });
          var ary={};
          for (var i=0;i<a.length;i++){
            console.log(a[i]);
            ary[a[i].bookId]=a[i].const;
          }
          console.log(ary);
          this.shoplist=a;
          Cookies.set('shoplist',JSON.stringify(ary));
        },
        fnn(){
          this.aa=false;
          var cc=[];
          for (var i=0 ;i<this.shoplist.length;i++){
            console.log(this.shoplist[i].ised);
            if(this.shoplist[i].ised){
              console.log(cc);
              this.shoplist.splice(i,1);
              cc.push(this.shoplist[i])
            }
          }
          // this.shoplist.forEach((a,b)=>{
          //   console.log(b);
          //   console.log(a.ised);
          //   if(a.ised){
          //     console.log(this.shoplist);
          //     cc.push(a)
          //   }
          // });
          var ary={};
          var ary1={};
          if (this.shoplist.length>0) {
            this.shoplist.forEach((a,b)=>{
              ary[ this.shoplist[b].bookId]=this.shoplist[b].const
            });
          }
         if (cc.length>1){
           console.log(cc);
           cc.forEach((a,b)=>{
             ary1[cc[b].bookId]=a.const
           });
         }


          Cookies.set('shoplist',JSON.stringify(ary));
          Cookies.set('js',JSON.stringify(ary1));
        }
      }
    }
</script>

<style lang="less" scoped>
.aa1{
  margin-bottom: 80px;
  width: 100%;
  .a2{
    background: #FFCC00;
    position: fixed;
    top: 50%;
    transform: rotate(0,-50%);
  }
  div{
    width: 100%;
    div.a1{
      display: flex;
      justify-content: space-between;
    }
    input{

    }
    img{
      width: 28%;
    }
    ul{
      width: 90%;
      li{
        display: flex;
        justify-content: space-between;
        list-style: none;
        width: 100%;
        img{
          width: 25%;
        }
        div{
          width: 74%;
          p{
            margin: 1px 0;
            text-align: left;
            padding: 0;
            text-indent: 1rem;
          }
        }
      }
    }
  }
}
</style>
