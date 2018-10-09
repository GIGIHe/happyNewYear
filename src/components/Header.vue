<template>
    <div class="header-wrap">
        <header class="header-content w1170">
            <div class="header-title" @click="$router.push('/')">云笔记</div>
            <div class="btn" @click="handlewrite">
                <el-button>
                写笔记
                </el-button>
                </div>
        </header>
    </div>
</template>

<script>
export default {
  methods:{
    handlewrite(){
      // console.log(this.$store.state.userInfo)
      // this.$router.push('/note')
      if(this.$store.state.userInfo.username){
        this.$router.push('/note')
      }else{
        this.$message.info('请登录')
      }
    }
  }
}
</script>

<style scoped lang="scss">
.header-wrap {
  background-color: #409eff;

  height: 50px;
  .header-content {
    display: flex;
    justify-content: space-between;

    .header-title {
      color: #fff;
      font-size: 20px;
      font-weight: 500;
      line-height: 50px;
      cursor: pointer;
    }
    /deep/ .btn {
      line-height: 50px;
    }
  }
}
</style>