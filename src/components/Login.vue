<template>
    <div>
 <div class="user-box bgc-w" v-if="!userInfo.username">
        <input type="text" placeholder="邮箱" v-model="userData.email" >
       <input type="password" placeholder="密码" v-model="userData.password">
       <input type="submit" class="s-btn s-btn1" value="登录" @click="handleLogin">
       <input type="submit" class="s-btn" value="注册" @click="$router.push('/register')">
     </div>
     <div class="user-box bgc-w" v-else>
        <div class="user-img" >
            <img :src="userInfo.avatar">
        </div>
        <div class="user-name">{{userInfo.username}}</div>
        <el-button type='warning' @click="handleLogout">退出登录</el-button>
     </div>
    </div>
</template>

<script>
import {mapState} from  'vuex'
    export default {
        data(){
            return{
                userData:{
                    email:'2697190181@qq.com',
                    password:'1234567'
                }
            }
        },
        methods:{
            handleLogin(){
            this.$axios.post('/login',this.userData).then(res=>{
                // console.log(res)
                this.$store.commit('CHAGE_USERINFO',res.userData)
                if(res.code==200){
                    this.$message.success(res.msg)
                }else{
                    this.$message.info(res.msg)
                    
                }
            }).catch(err=>{
                this.$message.info(res.err)
            })
            },
            handleLogout(){
             this.$axios.get('/logout').then(res=>{
                 if(res.code==200){
                     this.$message.success(res.msg);
                      const userInfo={
                          username:'',
                          email:'',
                          avatar:''
                      }
                      //手动的清空vuex中的数据
                      this.$store.commit('CHAGE_USERINFO',userInfo)
                     setTimeout(() => {
                         this.$router.push('/')
                     }, 1000);
                 }else{
                     this.$message.info(res.msg)
                 }
             })
            }
        },
        computed:{
    ...mapState(['userInfo'])
  }
        
    }
</script>

<style scoped lang="scss">
.user-box {
     width: 360px;
     height: 340px;
    //  background-color: #fff;
     border-radius: 6px;
     padding: 40px 14px;
     box-sizing: border-box;
    //  overflow: hidden;
     display: flex;
     flex-direction: column;
     input{
         margin-bottom: 24px;
         height: 40px;
         border-radius: 4px;
         outline: none;
         border: 1px solid #eee;
         text-indent: 1em
     }
      .s-btn{
        color:#666; 
        background-color: #fff;
     }
     .s-btn1{
         background-color: #409eff;
          color: #fff;
     }
     .user-img{
         width: 80px;
         height: 80px;
         margin:0 auto 30px;
         img{
             width: 100%;
             height: 100%;

         }
         
     }
     .user-name{
            text-align: center; 
             margin-bottom: 60px;

               }
    /deep/ .el-button{
        width: 100%;
    }
  }
</style>