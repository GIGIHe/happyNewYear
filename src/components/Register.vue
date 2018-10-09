<template>
    <div class="wrapper">
        <h3>新用户注册</h3>
        <div class="input-box">
        <input type="text" placeholder="用户名" v-model="userData.username">
        <input type="text" placeholder="邮箱" v-model="userData.email">
        <input type="password" placeholder="密码" v-model="userData.password">
        <input type="submit" class="submit" value="注册" @click="handleRegister"> 
        </div>
         
         
    </div>
</template>

<script>
export default {
  data(){
    return{
      userData:{
        email:'',
        username:'',
        password:''
      }
    }
  },
  methods:{
    handleRegister(){
      this.$axios.post('/user',this.userData).then(res=>{
        if(res.code==200){
          this.$message.success(res.msg);
           setTimeout(() => {
                     this.$router.push('/')
                    }, 1000);
        }else{
          this.$message.info(res.msg)
        }
      }
      ).catch(err=>{
        this.$message.info(err)
      })
    }
  },
  
};
</script>

<style scoped lang="scss">
.wrapper {
  padding: 20px 40px;
  box-sizing: border-box;
  border-radius: 6px;
  height: 400px;
  width: 400px;
  background-color: #fff;
  margin:50px auto;
  h3 {
    text-align: center;
    font-weight: 500;
    margin-bottom: 20px;
  }
  .input-box{
      display: flex;
      flex-direction: column;
      justify-content: space-between
     
  }
   input{
         margin: 15px;
        height: 40px;
        text-indent: 1em;
        outline: none;
        border: 1px solid #eee;
        font-size: 12px;
        border-radius: 4px;
        box-sizing: border-box;
      }
      .submit{
        background-color: #409eff;
        font-size: 14px;
        color: #fff;
      }
}
</style>