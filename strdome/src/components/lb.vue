<template>
    <div>
      <tb :ff="true"> <h3>列表</h3></tb>
      <ul>
        <li v-for="(a ,b) of jin" :key="b" @click="fn7(a)">
          <img :src="a.bookImg" alt="">
          <div>
            <p>{{a.bookName}}</p>
            <p>{{a.bookPrice | fn6(2)}}</p>
            <p>{{a.bookInfo}}</p>
          </div>

        </li>
      </ul>
      <db></db>
    </div>
</template>

<script>
  import db from "../../base/db"
  import tb from "../../base/tb"
  import {a1} from "../../api"
    export default {
        name: "lb",
      components:{
        tb,db
      },
      data(){
        return {
          jin:""
        }
      },created() {
          this.fn5()
      },
      methods:{
          fn5(){
            return a1().then((a)=>{
              this.jin=a.hotlist;
              console.log(this.jin);
            })
          },
        fn7(index){
          this.$router.push({path:"/xq",query:{xq:index.bookId}})
        }
      },filters:{
          fn6(a,b){
            return "￥"+Number(a).toFixed(b)
          }
      }
    }
</script>

<style lang="less" scoped>
  ul{
    padding: 0;
  }
    li{
      width: 100%;
      display: flex;
      img{
        width: 35%;
      }
      div{
        width: 65%;
        p{
          text-align: left;
        }
      }
    }
</style>
