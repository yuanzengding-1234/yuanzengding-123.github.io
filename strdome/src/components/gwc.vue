<template>
    <div>
      <tb :ff="true"> <h3>购物车</h3></tb>
      <db></db>
    </div>
</template>

<script>
  import db from "../base/db"
  import tb from "../base/tb"
    export default {
        name: "gwc",
      components:{
        tb,db
      }
    }
</script>

<style scoped>

</style>
