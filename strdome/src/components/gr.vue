<template>
  <div class="gr-main">
    <qu class="bg"></qu>
    <router-link to="/shezhi" class="gr-shezhi"><i class="iconfont icon-shezhi"></i><br/>设置</router-link>
    <tb><h3>个人</h3></tb>
    <router-link to="/xiaoxi" class="gr-xiaoxi"><i class="iconfont icon-xiaoxi"></i><br/>消息</router-link>
    <div class="gr-top">
      <i class="iconfont icon-icon-test"  ></i>
      <div class="top-tx-right">
        <router-link to="/edit"><p>132****7895</p></router-link>
        <p>等级：4</p>
      </div>
      <ul>
        <li><span>21</span> <br>收藏夹</li>
        <li><span>21</span> <br>关注店铺</li>
        <li><span>21</span> <br>足迹</li>
        <li><span>21</span> <br>红包卡卷</li>
      </ul>
    </div>
    <div class="dingdan">
      <p class="biaoti">我的订单</p>
      <ul>
        <li><i class="iconfont icon-daizhifu-"></i><br>待支付</li>
        <li><i class="iconfont icon-gerenzhongxindingdandaishouhuo"></i><br>代发货</li>
        <li><i class="iconfont icon-daipingjia"></i><br>待评价</li>
        <li><i class="iconfont icon-zixunguwen"></i><br>退货/售后</li>
      </ul>
    </div>
    <div class="qianbao">
      <p class="biaoti">我的钱包</p>
        <ul>
          <li><span>7</span><br/>优惠券</li>
          <li><span>7521</span> <br/>积分</li>
          <li><span>99.99</span> <br/>余额</li>
          <li><span>20.33</span> <br/>购物返现</li>
        </ul>
    </div>

    <div class="baibaoxiang">
      <p class="biaoti">百宝箱</p>
      <ul>
        <li><i class="iconfont icon-kechengguwen"></i><br>顾问</li>
        <li><i class="iconfont icon-tubiao-"></i><br>会员</li>
        <li><i class="iconfont icon-wodequanyi"></i><br>权益</li>
        <li><i class="iconfont icon-shoucang"></i><br>收藏</li>
      </ul>
      <ul>
        <li><i class="iconfont icon-weishoucang"></i><br>新人试用</li>
        <li><i class="iconfont icon-tousujianyi"></i><br>投诉建议</li>
        <li><i class="iconfont icon-wodequanyi"></i><br>福利社区</li>
        <li><i class="iconfont icon-shoucang"></i><br>我的红包</li>
      </ul>
    </div>
    <div class="jingxuan">
      <p class="biaoti">精选推荐</p>
      <ul>
        <li><i class="iconfont icon-qiqiu"></i><br>活动</li>
        <li><i class="iconfont icon-quanzi"></i><br>活动圈</li>
        <li><i class="iconfont icon-jingcaishike"></i><br>装饰</li>
        <li><i class="iconfont icon-shangwangmianrenzhengshenqingbiao"></i><br>购物免单</li>
      </ul>
      <ul>
        <li><i class="iconfont icon-iconx-"></i><br>信用卡</li>
        <li><i class="iconfont icon-tousujianyi"></i><br>邀请有礼</li>
        <li><i class="iconfont icon-yinhangqia"></i><br>储值卡</li>
        <li><i class=""></i><br>&nbsp;</li>
      </ul>
    </div>
    <db></db>
  </div>
</template>

<script>
  import db from "../base/db"
  import tb from "../base/tb"
  import qu from "../components/Qu"
    export default {
        name: "gr",
      components:{
        tb,db,qu
      }
    }
</script>

<style lang="less" scoped>
  .bg{
    width: 100%;
    height: 100%;
    position: fixed;
    background: #cccccc2e;
    top: 0;
    left: 0;
    z-index: -1000;
  }
  .biaoti{
    font-size: 0.8rem;
    text-align: left;
    border-bottom: 1px solid #ccc;
    text-indent:1em;
  }
a{text-decoration: none;}
li{list-style: none}
  .gr-shezhi{
    position: absolute;
    left: 0.5rem;
    top:0.5rem;
    z-index: 1000;
    font-size: 1rem;
  }

  .gr-xiaoxi{
    position: absolute;
    right: 0.5rem;
    top:0.5rem;
    z-index: 1000;
  }
  .gr-top{
    position: absolute;
    top:2rem;
    left: 0rem;
    width:100%;
    height:10rem;
    box-sizing: border-box;
    i{
      position: absolute;
      top: 2rem;
      left: 2rem;
      font-size:5.5rem;
      z-index: 1000;
    }
    div{
      margin-top: 3rem;
      font-size: 1rem;
    }
    ul{
      margin-left: -3.5rem;
      display: flex;
    }
    li{
      flex: 1;
      font-size: 0.7rem;
    }
  }
  .dingdan{
    position: absolute;
    top:12.2rem;
    left: 0rem;
    box-sizing: border-box;
    width:100%;
    border:1px solid #ccc;
    border-radius:1rem;
    background: white;
    ul{
      margin-left: -3.5rem;
      display: flex;
    }
    li{
      flex: 1;
      font-size: 0.7rem;
    }
  }

.qianbao{
  position: absolute;
  top:19rem;
  left: 0rem;
  box-sizing: border-box;
  width:100%;
  border:1px solid #ccc;
  border-radius:1rem;
  background: white;
  ul{
    margin-left: -3.5rem;
    margin-top: 1.5rem;
    display: flex;
  }
  li{
    flex: 1;
    font-size: 0.7rem;
  }
}

  .baibaoxiang{
    position: absolute;
    top: 26rem;
    left: 0rem;
    box-sizing: border-box;
    width: 100%;
    border-radius:1rem;
    background: white;
    ul{
      margin-left: -3.5rem;
      margin-top: 1.5rem;
      display: flex;
    }
    li{
      flex: 1;
      font-size: 0.7rem;
    }
    i{
      color:pink;
    }
  }

  .jingxuan{
    position: absolute;
    top: 37rem;
    left: 0rem;
    box-sizing: border-box;
    width: 100%;
    border-radius:1rem;
    background: white;
    ul{
      margin-left: -3.5rem;
      margin-top: 1.5rem;
      display: flex;
    }
    li{
      flex: 1;
      font-size: 0.7rem;
    }
    i{
      color:skyblue;
    }
  }

</style>
