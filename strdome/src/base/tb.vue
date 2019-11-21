<template>
    <div>
      <span v-if="ff" @click="fn1" class="iconfont icon-fanhui"></span>
      <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "tb",
      props:{
          ff:{
            type:[Boolean],
            default:false
          }
      },
      methods:{
          fn1(){
            this.$router.go(-1)
          }
      }
    }
</script>

<style scoped>
  div{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    background: #6697EB;
    z-index: 100;
  }
  span{
    position: fixed;
    left: 5px;
    top: 10px;
    font-size: 30px;
  }
</style>
