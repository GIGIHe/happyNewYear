<template>
        <div class="w1170  bgc-w pd">
            <div class="head-msg">
    <div class="img-box">
        <img :src="articleData.author.avatar">
    </div>
    <div class="detail-msg">
        <div class="author"> 
        {{articleData.author.username}}
        </div>
        <div class="time">
            <span>{{articleData.updated_at}}</span>
            <span>阅读 {{articleData.readNum}}</span>
        </div>
    </div>
            </div>
     <div class="content">
         <h2 class="title">{{articleData.title}}</h2>
         <div class="article">{{articleData.contentText}}</div>
     </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
        articleData:{}
        }
    },
    methods:{
        getData(){
            let {id} = this.$route.params
            this.$axios.get(`/article/${id}`).then(res=>{
               if(res.code==200){
                 this.articleData = res.data
               }
            })
        }
    },
   created(){
       this.getData()
   }
}
</script>

<style scoped lang = 'scss'>
.pd {
  padding: 20px;
  width: 700px;
}
.head-msg {
  display: flex;
  height: 60px;
  .img-box {
    width: 60px;
    height: 60px;
    border-radius: 50%;
    img {
      width: 100%;
      height: 100%;
    }
  }
}
.detail-msg {
  box-sizing: border-box;
  padding-top: 10px;
  margin-left: 20px;
  .author {
    font-weight: 500;
    font-size: 18px;
    margin-bottom: 4px;
  }
}
.content{
    min-height: 300px;
    padding: 20px;
    box-sizing: border-box
}
</style>