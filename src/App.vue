<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body{
  background-color: #f1f1f1;
}
.w1170{
  width: 1170px;
  margin: 0 auto
}
.color-b{
  color: #409eff
}
.color-w{
  color: #fff;
}
.bgc-b{
  background-color: #409eff;
}
.bgc-w{
  background-color: #fff;
}
.clearfix::after{
content: '';
display: block;
clear: both;
height: 0;
}
</style>
