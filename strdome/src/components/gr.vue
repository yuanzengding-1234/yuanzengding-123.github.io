<template>
    <div>
      <tb :ff="true"> <h3>个人</h3></tb>
      <db></db>
    </div>
</template>

<script>
  import db from "../base/db"
  import tb from "../base/tb"
    export default {
        name: "gr",
      components:{
        tb,db
      }
    }
</script>

<style scoped>

</style>
