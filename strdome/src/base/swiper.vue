<template>
  <swiper :options="swiperOption">
    <swiper-slide v-for="(slide, index) in ff1" :key="index"><img :src="slide.src" alt=""></swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
  export default {
    name: 'carrousel',
    data() {
      return {
        swiperOption: {
          pagination: '.swiper-pagination'

        },
        swiperSlides: [1, 2, 3, 4, 5]
      }
    },
    props:["ff1"]


  }
</script>
<style lang="less" scoped>
  .swiper-slide{
    width: 100%;
    img{
      width: 100%;
    }
  }
</style>
