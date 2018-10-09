<template>
    <div class="w1170 ">
    <div class="wrapper">
        <Banner></Banner>
        <Login></Login>
    </div>

     <Article></Article>
    </div>
</template>

<script>
import Banner from '@/components/Banner'
import Login from '@/components/Login'
import Article from '@/components/Articles'
export default {
    components:{
        Banner,
        Login,
        Article
    }
};
</script>

<style scoped lang="scss">
.wrapper {
  display: flex;
  margin: 50px auto 30px;
  justify-content: space-between;
}
</style>