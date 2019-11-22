<template>
      <div class="l-top">
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="iconfont icon-x"></i>
          <router-link to="register" class="l-zc">注册&nbsp;&nbsp;&nbsp;&nbsp;</router-link>
        <div class="l-text">
          <i class="iconfont icon-denglu"></i><input type="text" placeholder="手机号">
        </div>
        <div class="l-text">
          <i class="iconfont icon-mima"></i><input type="password" placeholder="密码">
        </div>
        <router-link to="/wangji" tag="p" class="wj">忘记密码？</router-link>
<!--        <input class="dl" type="button" value="登录">-->
        <div ><router-link to="/gr" class="dl" tag="button">登录</router-link></div>
        <div class="fg">———————或者通过———————</div>
        <div class="l-icon">
          <ul>
            <li><i class="iconfont icon-qq"></i></li>
            <li><i class="iconfont icon-weixin-copy"></i></li>
            <li><i class="iconfont icon-weibo"></i></li>
          </ul>
        </div>
      </div>
</template>

<script>
    export default {
        name: "login"
    }
</script>

<style lang="less" scoped>
  a{text-decoration: none;}
  li{list-style: none;}

  .l-top{
    position: relative;
    top:-3.5rem;
    left: 0;
    width: 100%;
    i{
      float: left;
      text-indent: 1em;
      color:#ff7d01;
    }
    .l-zc{
      float: right;
    }
  }
  .l-text{
    width:100%;
    border-bottom: 1px solid #ccc;
    margin-top: 3rem;
    input{
      border-style: none;
      margin-left:-6rem;
    }
  }
  .wj{
    text-align: right;
  }
  .dl{
    width: 100%;
    height:3rem;
    background: #ff7d01;
    line-height:3rem;
    border-style: none;
    font-size: 1.2rem;
  }
  .fg{
    width: 100%;
    margin-top: 3rem;
  }
  .l-icon{
    width: 100%;
    ul{
      display: flex;
    }
    li{
      flex: 1;
    }
    i{
      font-size:3rem;
      margin-left: -3.5rem;
      margin-top: 1rem;
    }
  }
</style>


