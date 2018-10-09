<template>
    <div class="article">
       
        <div class="wrap" v-for="(item,index) in articleData" :key="index">
              <router-link :to="{ name: 'ArticleDetail',params:{id:item._id} }">
          <div class="article-top" >
    
         <div class="item-img">
             <img :src="item.author.avatar">
         </div>
         <div class="item-details">
             <span class="author">{{item.author.username}}</span>
             <span>|</span>
             <strong class="title">{{item.title}}</strong>
             <div class="feedback">
               <strong>浏览:{{item.readNum}}</strong>
               <strong>回复:{{item.commentNum}}</strong>
               <strong>分类:{{item.catagory.name}}</strong>
             </div>
         </div>
     </div>
              </router-link>
     <div class="article-content">{{item.contentText}}</div>
        </div>
    
    </div>
</template>

<script>
    export default {
          data(){
              return{
                articleData:[]
              }
             
          },
          methods:{
              getData(){
                  this.$axios.get('/article').then(res=>{
                      this.articleData = res.data
                  })
              }
              
          },
          created(){
              this.getData()
          }
    }
</script>

<style scoped lang="scss">
.article{
    width:750px; 
    padding: 10px;
    box-sizing: border-box;
    background-color: #fff;
    border-radius: 6px;
    margin-bottom: 50px;
    .wrap {
    display: flex;
    flex-direction: column;
      overflow: hidden;
          text-overflow: ellipsis;
          display: -webkit-box;
          -webkit-line-clamp: 2; //行数
          -webkit-box-orient: vertical;
          margin: 20px 0;
          a{
              color:#555;
              text-decoration: none;
          }
      .article-top{
        display: flex;
        padding:5px 10px 10px; 
        box-sizing: border-box;
        .item-img img{
            width: 40px;
            height: 40px;
        }
        
    }
    .item-details{
            margin-left: 20px;
            .author{
                font-size: 16px;
                font-weight: 600;
                color: #409eff;
            }
            .feedback{
                margin-top:10px;
                font-size: 12px;
                font-weight: 400px;
                strong{
                    margin-right: 20px;
                }
            }
        }
        .article-content{
            text-indent: 1em;
            font-size: 12px;
            color: #555;
            padding: 0 40px;
            line-height: 2;
        }
    }
}
</style>