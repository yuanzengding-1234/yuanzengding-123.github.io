<template>
    <div>
      <tb :ff="true"><h3>消息中心</h3></tb>
      <ul class="xx-main">
        <li><i class="iconfont icon-kehufuwuicon"></i>&nbsp;&nbsp;客户服务<br>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            你好，我是机器人客户，请问您要咨询...</span><span>&gt;</span>  </li>
        <router-link to="/lb" tag="li"><i class="iconfont icon-13"></i>&nbsp;&nbsp;优惠促销 <br>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          新品尝鲜抢购中...</span><span>&gt;</span>
        </router-link>
        <router-link to="#" tag="li"><i class="iconfont icon-tongzhi3"></i>&nbsp;&nbsp;账户通知 <br>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          你有179积分即将过期，快去用掉把...</span><span>&gt;</span>
        </router-link>
        <li><i class="iconfont icon-xitongshezhi"></i>&nbsp;&nbsp;通知信息 <br>
          <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            不要忘记签到哦！坚持签到，优惠券...</span><span>&gt;</span>
        </li>
      </ul>
    </div>
</template>

<script>
  import tb from "../base/tb"
    export default {
        name: "xiaoxi",
      components:{
          tb
      }
    }
</script>

<style lang="less" scoped>
  li{list-style:none;}
.xx-main{
  position: absolute;
  top:1rem;
  left:-2rem;
  width: 100%;
  box-sizing: border-box;
  text-align: left;
li{
  width: 100%;
  border-bottom: 1px solid #ccc;
  margin-top:1.2rem;
  font-size:0.8rem;
}
  i{
    font-size:2.5rem;
    color: #ffc107;
  }
  span{
    color: #ccc;
  }
}
</style>
