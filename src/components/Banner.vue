<template>
    <div>
   <div class="img-box">
         <div class="article"> 十三亿人都学得会的云笔记</div>
     </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped lang="scss">
.img-box {
    width: 750px;
    height: 340px;
    background: url("/static/img/banner.jpg") no-repeat;
    background-size: 100% 100%;
    position: relative;
    border-radius: 6px;
    overflow: hidden;
    .article {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 40px;
      line-height: 40px;
      color: #fff;
      background-color: rgba(0, 0, 0, 0.5);
    }
  }
</style>