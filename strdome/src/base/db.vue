<template>
    <div class="a1">
      <router-link to="sy" tag="div">
        <i class="iconfont icon-shouye"></i><br>
        首页
      </router-link>
      <router-link to="lb" tag="div">
        <i class="iconfont icon-icon--"></i><br>
        列表
      </router-link>
      <router-link to="gwc" tag="div">
        <i class="iconfont icon-gouwuchekong"></i><br>
        购物车
      </router-link>
      <router-link to="gr" tag="div">
        <i class="iconfont icon-geren"></i><br>
        个人
      </router-link>
    </div>
</template>

<script>
    export default {
        name: "db"
    }
</script>

<style lang="less" scoped>
.a1{
  width: 100%;
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  background: #fff;
  div{
    width: 25%;
    i{
      font-size: 2rem;
    }
  }
}
</style>
