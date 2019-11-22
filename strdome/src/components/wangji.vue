<template>
  <div class="w-main">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<router-link to="/login" tag="i" class="iconfont icon-x"></router-link><span class="w-wj">忘记密码</span>
    <div class="l-text">
      <i class="iconfont icon-denglu"></i><input type="text" placeholder="手机号">
    </div>
    <div class="l-text">
      <i class="iconfont icon-yanzhengma"></i><input type="text" placeholder="请输入验证码">
      <div class="yzm">获取验证码(60s)</div>
    </div>
    <div class="l-text">
      <i class="iconfont icon-mima"></i><input type="password" placeholder="......">
    </div>
    <div class="l-text">
      <i class="iconfont icon-mima"></i><input type="password" placeholder="请再次输入密码">
    </div>
    <div ><router-link to="/login" class="wc" tag="button">完成</router-link></div>
  </div>
</template>

<script>
    export default {
        name: "wangji"
    }
</script>

<style lang="less" scoped>
  a{text-decoration: none;}
  li{list-style: none;}

  .w-main{
    position: relative;
    top:-3.5rem;
    left: 0;
    width: 100%;
  i{
    float: left;
    text-indent: 1em;
    color:#ff7d01;
  }
  .w-wj{
    margin-left: -13rem;
  }
  }
  .l-text{
    width:100%;
    border-bottom: 1px solid #ccc;
    margin-top: 3rem;
    i{
      color: #CCC0B3;
    }
    input{
      border-style: none;
      margin-left:-6rem;
    }
  }
  .wc{
    margin-top:3rem;
    width: 100%;
    height:3rem;
    background: #ff7d01;
    line-height:3rem;
    border-style: none;
    font-size: 1.2rem;
  }
  .yzm{
    position: absolute;
    top:7.2rem;
    right:1rem;
    width: 5rem;
    height:2.3rem;
    background: #ffc107;
    font-size: 0.8rem;
  }
</style>
